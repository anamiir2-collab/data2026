import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { idbGet, idbSet, todayStr, daysBetween } from '../storage/idb.js';
import { ACHIEVEMENTS } from '../data/achievements.js';
import { showToast } from './PrefsContext.jsx';
import { XP_THRESHOLDS, RANKS } from '../i18n/translations.js';

const DEFAULT_STATE = {
  version: 1,
  name: '',
  xp: 0,
  streak: { count: 0, lastDay: null },
  dailyGoal: 3,
  completedLessons: {}, // lessonId -> { at, kcheckPct }
  bookmarks: [],
  lessonNotes: {},
  quizResults: [], // { quizId, kind, score, total, pct, at } every attempt
  examResults: [], // { quizId, bestPct, attempts: [{pct, at}] }
  projectTasks: {}, // projectId -> [bool,...]
  projectNotes: {},
  projectSubmissions: {}, // projectId -> { at, tasksDone, tasksTotal }
  portfolioEntries: [], // { id, fields:{...}, at, projectId }
  achievements: {}, // achId -> iso date
  activity: [], // { at, day, type, key, xp }
  labStats: { sqlOk: 0, cleanFixed: 0, challenges: 0, conversions: 0 },
  excelChallenges: {}, // challengeId -> true
  sqlSolved: [], // exercise ids
  sqlQueries: {}, // exerciseId -> last query
  finalReadinessSeenAt: null,
};

const ProgressCtx = createContext(null);

export function ProgressProvider({ children }) {
  const [state, setState] = useState(DEFAULT_STATE);
  const [ready, setReady] = useState(false);
  const saveTimer = useRef(null);
  const langRef = useRef('en');
  langRef.current = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';

  // Load persisted state once
  useEffect(() => {
    let alive = true;
    (async () => {
      const saved = await idbGet('progress');
      if (alive && saved && saved.version === 1) {
        setState({ ...DEFAULT_STATE, ...saved });
      }
      if (alive) setReady(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Debounced persistence on every change
  useEffect(() => {
    if (!ready) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => idbSet('progress', state), 350);
    return () => clearTimeout(saveTimer.current);
  }, [state, ready]);

  const ctx = useMemo(() => {
    const awardXp = (amount, type, key) => {
      setState((s) => {
        const today = todayStr();
        let streak = s.streak;
        if (streak.lastDay !== today) {
          const yesterday = todayStr(new Date(Date.now() - 86400000));
          streak = {
            count: streak.lastDay === yesterday ? streak.count + 1 : 1,
            lastDay: today,
          };
        }
        const prevRankIdx = rankIndex(s.xp);
        const nextXp = s.xp + amount;
        const activity = [
          { at: new Date().toISOString(), day: today, type, key, xp: amount },
          ...s.activity,
        ].slice(0, 80);
        const newRankIdx = rankIndex(nextXp);
        if (newRankIdx > prevRankIdx) {
          showToast((RANKS[langRef.current][newRankIdx] || '') && langRef.current === 'ar' ? `رتبة جديدة: ${RANKS.ar[newRankIdx]}!` : `New rank: ${RANKS.en[newRankIdx]}!`);
        }
        return { ...s, xp: nextXp, streak, activity };
      });
    };

    const checkAchievements = () => {
      setState((s) => {
        const cur = { ...s };
        const helpers = curriculumHelpers(cur);
        const unlockedNow = [];
        for (const a of ACHIEVEMENTS) {
          if (!cur.achievements[a.id] && safeCheck(a, cur, helpers)) {
            cur.achievements = { ...cur.achievements, [a.id]: new Date().toISOString() };
            unlockedNow.push(a);
          }
        }
        if (unlockedNow.length) {
          setTimeout(() => {
            unlockedNow.forEach((a) => {
              showToast(`${langRef.current === 'ar' ? 'إنجاز جديد: ' : 'Achievement unlocked: '}${a.name[langRef.current] || a.name.en} ${a.icon}`);
            });
          }, 250);
          // bonus XP for badges (applied through the same reducer chain)
          const bonus = unlockedNow.length * 25;
          cur.xp = cur.xp + bonus;
          cur.activity = [
            { at: new Date().toISOString(), day: todayStr(), type: 'achievement', key: unlockedNow[0].id, xp: bonus },
            ...cur.activity,
          ].slice(0, 80);
        }
        return cur;
      });
    };

    const api = {
      state,
      ready,
      // ---- lessons ----
      completeLesson(lessonId, xp, kcheckPct) {
        setState((s) =>
          s.completedLessons[lessonId]
            ? s
            : { ...s, completedLessons: { ...s.completedLessons, [lessonId]: { at: new Date().toISOString(), kcheckPct } } }
        );
        awardXp(xp, 'lesson', lessonId);
        setTimeout(checkAchievements, 60);
      },
      setLessonNote(lessonId, text) {
        setState((s) => ({ ...s, lessonNotes: { ...s.lessonNotes, [lessonId]: text } }));
      },
      toggleBookmark(lessonId) {
        setState((s) => ({
          ...s,
          bookmarks: s.bookmarks.includes(lessonId) ? s.bookmarks.filter((b) => b !== lessonId) : [...s.bookmarks, lessonId],
        }));
      },
      // ---- quizzes / exams ----
      recordQuiz(quizId, kind, score, total) {
        const pct = total ? Math.round((score / total) * 100) : 0;
        const at = new Date().toISOString();
        setState((s) => {
          const quizResults = [{ quizId, kind, score, total, pct, at }, ...s.quizResults].slice(0, 200);
          let examResults = s.examResults;
          if (kind === 'exam' || kind === 'final' || kind === 'practical') {
            const existing = s.examResults.find((r) => r.quizId === quizId);
            examResults = existing
              ? s.examResults.map((r) =>
                  r.quizId === quizId
                    ? { ...r, bestPct: Math.max(r.bestPct, pct), attempts: [...r.attempts, { pct, at }] }
                    : r
                )
              : [...s.examResults, { quizId, bestPct: pct, attempts: [{ pct, at }] }];
          }
          return { ...s, quizResults, examResults };
        });
        awardXp(score * 4, kind === 'lesson' ? 'quiz' : 'exam', quizId);
        setTimeout(checkAchievements, 60);
        return pct;
      },
      // ---- projects ----
      setProjectTask(projectId, idx, done) {
        setState((s) => {
          const arr = [...(s.projectTasks[projectId] || [])];
          arr[idx] = done;
          return { ...s, projectTasks: { ...s.projectTasks, [projectId]: arr } };
        });
      },
      setProjectNote(projectId, text) {
        setState((s) => ({ ...s, projectNotes: { ...s.projectNotes, [projectId]: text } }));
      },
      submitProject(projectId, tasksDone, tasksTotal, xp) {
        setState((s) => ({
          ...s,
          projectSubmissions: { ...s.projectSubmissions, [projectId]: { at: new Date().toISOString(), tasksDone, tasksTotal } },
        }));
        awardXp(xp, 'project', projectId);
        setTimeout(checkAchievements, 60);
      },
      // ---- portfolio ----
      addPortfolioEntry(entry) {
        setState((s) => ({
          ...s,
          portfolioEntries: [...s.portfolioEntries, { ...entry, id: 'pf' + Date.now(), at: new Date().toISOString() }],
        }));
        setTimeout(checkAchievements, 60);
      },
      updatePortfolioEntry(id, fields) {
        setState((s) => ({
          ...s,
          portfolioEntries: s.portfolioEntries.map((e) => (e.id === id ? { ...e, fields } : e)),
        }));
        setTimeout(checkAchievements, 60);
      },
      deletePortfolioEntry(id) {
        setState((s) => ({ ...s, portfolioEntries: s.portfolioEntries.filter((e) => e.id !== id) }));
      },
      // ---- labs ----
      bumpLabStat(key, n = 1) {
        setState((s) => ({ ...s, labStats: { ...s.labStats, [key]: (s.labStats[key] || 0) + n } }));
        if (key === 'challenges') awardXp(15 * n, 'lab', 'challenge');
        setTimeout(checkAchievements, 60);
      },
      saveSqlQuery(exId, text) {
        setState((s) => ({ ...s, sqlQueries: { ...s.sqlQueries, [exId]: text } }));
      },
      markSqlSolved(exId) {
        setState((s) => (s.sqlSolved.includes(exId) ? s : { ...s, sqlSolved: [...s.sqlSolved, exId] }));
      },
      setExcelChallenge(chId) {
        setState((s) => (s.excelChallenges[chId] ? s : { ...s, excelChallenges: { ...s.excelChallenges, [chId]: true } }));
      },
      // ---- profile ----
      setName(name) {
        setState((s) => ({ ...s, name }));
      },
      setDailyGoal(n) {
        setState((s) => ({ ...s, dailyGoal: n }));
      },
      // ---- backup ----
      exportJSON() {
        return JSON.stringify({ app: 'datapath-academy', exportedAt: new Date().toISOString(), progress: state }, null, 2);
      },
      async importJSON(text) {
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          return false;
        }
        if (!data || data.app !== 'datapath-academy' || !data.progress || data.progress.version !== 1) return false;
        setState({ ...DEFAULT_STATE, ...data.progress });
        setTimeout(checkAchievements, 100);
        return true;
      },
      resetAll() {
        setState({ ...DEFAULT_STATE });
        setTimeout(checkAchievements, 100);
      },
    };
    return api;
  }, [state, ready]);

  return <ProgressCtx.Provider value={ctx}>{children}</ProgressCtx.Provider>;
}

function rankIndex(xp) {
  let idx = 0;
  for (let i = 0; i < XP_THRESHOLDS.length; i++) if (xp >= XP_THRESHOLDS[i]) idx = i;
  return idx;
}

function safeCheck(a, progress, helpers) {
  try {
    return !!a.check(progress, helpers);
  } catch (e) {
    return false;
  }
}

// Helpers used by achievement conditions
import { LEVELS, isModuleDoneFn, isLevelLessonsDoneFn } from '../curriculum/index.js';
function curriculumHelpers(progress) {
  return {
    isModuleDone: (mid) => isModuleDoneFn(progress, mid),
    isLevelLessonsDone: (lid) => isLevelLessonsDoneFn(progress, lid),
    levelById: LEVELS.find.bind(LEVELS),
  };
}

export function useProgress() {
  const ctx = useContext(ProgressCtx);
  if (!ctx) throw new Error('useProgress outside provider');
  return ctx;
}
