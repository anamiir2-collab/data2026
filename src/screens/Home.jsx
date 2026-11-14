import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Zap, BookCheck, Target, Trophy, CalendarDays, ClipboardList, ChevronRight, Award, TrendingUp } from 'lucide-react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { usePrefs } from '../state/PrefsContext.jsx';
import { useProgress } from '../state/ProgressContext.jsx';
import { Card, StatTile, SectionTitle, Progress as Bar, Ring, ListItem, Empty, Tag } from '../components/ui.jsx';
import { LEVELS, levelProgress, nextUnlockedLesson, isLevelUnlocked, isLevelLessonsDoneFn, moduleProgress } from '../curriculum/index.js';
import { PROJECTS } from '../data/projects.js';
import { ACHIEVEMENTS } from '../data/achievements.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function HomeScreen() {
  const { t, L, lang } = usePrefs();
  const p = useProgress();
  const s = p.state;
  const navigate = useNavigate();

  const next = useMemo(() => nextUnlockedLesson(s), [s]);
  const lessonsDone = Object.keys(s.completedLessons).length;
  const totalLessons = LEVELS.reduce((a, lv) => a + (lv.modules || []).reduce((b, m) => b + m.lessons.length, 0), 0);
  const today = new Date().toISOString().slice(0, 10);
  const todayLessons = s.activity.filter((a) => a.day === today && a.type === 'lesson').length;
  const quizAvg = s.quizResults.length ? Math.round(s.quizResults.reduce((a, r) => a + r.pct, 0) / s.quizResults.length) : 0;
  const modulesDone = LEVELS.reduce((acc, lv) => acc + (lv.modules || []).filter((m) => moduleProgress(s, m.id).pct === 100).length, 0);
  const totalModules = LEVELS.reduce((a, lv) => a + (lv.modules || []).length, 0);

  const greeting = (() => {
    const h = new Date().getHours();
    return h < 12 ? t('home.morning') : h < 17 ? t('home.afternoon') : h < 22 ? t('home.evening') : t('home.night');
  })();

  const last7 = useMemo(() => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const key = d.toISOString().slice(0, 10);
      days.push({
        label: d.toLocaleDateString(lang === 'ar' ? 'ar' : 'en', { weekday: 'short' }),
        xp: s.activity.filter((a) => a.day === key).reduce((x, a) => x + (a.xp || 0), 0),
      });
    }
    return days;
  }, [s.activity, lang]);

  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    if (!canvasRef.current) return;
    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: last7.map((d) => d.label),
        datasets: [{ data: last7.map((d) => d.xp), backgroundColor: 'rgba(6,182,212,0.75)', borderRadius: 6, maxBarThickness: 26 }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false }, ticks: { color: '#9fb0c7', font: { size: 10 } } }, y: { beginAtZero: true, grid: { color: 'rgba(150,170,200,0.12)' }, ticks: { color: '#9fb0c7', font: { size: 9 }, precision: 0 } } },
      },
    });
    return () => chart.destroy();
  }, [last7]);

  const recommended = useMemo(() => {
    const out = [];
    for (const lv of LEVELS) {
      if (!isLevelUnlocked(s, lv.id)) continue;
      for (const m of lv.modules || []) {
        for (const ls of m.lessons) {
          if (!s.completedLessons[ls.id]) out.push({ lesson: ls, module: m, level: lv });
          if (out.length >= 3) break;
        }
        if (out.length >= 3) break;
      }
      if (out.length >= 3) break;
    }
    return out;
  }, [s]);

  const upcoming = useMemo(() => {
    const tasks = [];
    if (todayLessons < s.dailyGoal) tasks.push({ key: 'goal', text: t('home.upcomingGoal', { n: s.dailyGoal }) });
    for (const lv of LEVELS) {
      if (isLevelUnlocked(s, lv.id) && isLevelLessonsDoneFn(s, lv.id) && !(s.examResults.find((e) => e.quizId === `exam:${lv.id}`))) {
        tasks.push({ key: `exam-${lv.id}`, text: t('home.upcomingExam', { n: lv.num }) });
        break;
      }
    }
    const notSubmitted = PROJECTS.find((pr) => !s.projectSubmissions[pr.id]);
    if (notSubmitted) tasks.push({ key: 'project', text: t('home.upcomingProject', { project: L(notSubmitted.title) }) });
    if (s.bookmarks.length) {
      const bm = s.bookmarks[0];
      const found = nextUnlockedLesson(s);
      tasks.push({ key: 'review', text: t('home.upcomingReview', { lesson: L(found ? found.lesson.title : '') }) });
    }
    return tasks.slice(0, 3);
  }, [s, todayLessons, t, L]);

  const earned = Object.keys(s.achievements).length;

  return (
    <div className="screen">
      <div className="screen-content">
        <div className="hero-card fade-in">
          <div className="hero-hello">{greeting}, {s.name || (lang === 'ar' ? 'عزيزي المتعلم' : 'learner')} 👋</div>
          <div className="hero-title">{t('app.tagline')}</div>
          <div className="hero-meta">
            <span className="tag">🔥 {t('home.stats.streak')}: {s.streak.count}</span>
            <span className="tag">⚡ {s.xp} XP</span>
            <span className="tag">🏅 {earned} {lang === 'ar' ? 'إنجاز' : 'badges'}</span>
          </div>
          {next ? (
            <>
              <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 4 }}>{t('home.readyNext')}</div>
              <div style={{ fontSize: 14.5, fontWeight: 800, marginBottom: 12 }}>
                {L(next.lesson.title)} · {L(next.level.name)}
              </div>
              <button className="btn btn-accent" onClick={() => navigate(`/lesson/${next.lesson.id}`)}>
                {t('home.continueLearning')} <ChevronRight size={16} />
              </button>
            </>
          ) : (
            <button className="btn btn-accent" onClick={() => navigate('/readiness')}>{lang === 'ar' ? 'اطلب تقرير الجاهزية' : 'View readiness report'}</button>
          )}
        </div>

        <div className="stat-grid">
          <StatTile icon={BookCheck} value={`${lessonsDone}/${totalLessons}`} label={t('home.stats.lessons')} />
          <StatTile icon={ClipboardList} value={`${modulesDone}/${totalModules}`} label={t('home.stats.modules')} />
          <StatTile icon={TrendingUp} value={`${quizAvg}%`} label={t('home.stats.quizAvg')} />
          <StatTile icon={Zap} value={s.xp} label={t('home.stats.xp')} />
        </div>

        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Ring value={(todayLessons / Math.max(1, s.dailyGoal)) * 100} label={`${todayLessons}/${s.dailyGoal}`} sub={t('c.lesson')} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 800, display: 'flex', gap: 6, alignItems: 'center' }}>
                <Target size={15} color="var(--accent)" /> {t('home.stats.goal')}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 4, lineHeight: 1.6 }}>
                {todayLessons >= s.dailyGoal ? t('home.goalDone') : t('home.goalRemaining', { n: s.dailyGoal - todayLessons })}
              </div>
            </div>
          </div>
        </Card>

        <SectionTitle icon={CalendarDays}>{t('home.weekly')}</SectionTitle>
        <Card>
          <canvas ref={canvasRef} height={110} />
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{t('home.weeklySub')}</div>
        </Card>

        <SectionTitle icon={Flame2}>{t('home.journey')}</SectionTitle>
        <div style={{ fontSize: 12, color: 'var(--muted)', margin: '-6px 2px 10px' }}>{t('home.journeySub')}</div>
        <div className="journey">
          {LEVELS.map((lv, i) => {
            const prog = levelProgress(s, lv.id);
            const unlocked = isLevelUnlocked(s, lv.id);
            const done = prog.pct === 100;
            const current = unlocked && !done && (i === 0 || levelProgress(s, LEVELS[i - 1].id).pct === 100);
            return (
              <div key={lv.id} className="journey-item">
                <div className={`journey-dot ${done ? 'done' : ''} ${current ? 'current' : ''}`}>
                  {done ? '✓' : lv.icon}
                </div>
                <div className={`journey-card ${unlocked ? 'tap-card' : 'locked'}`} onClick={() => unlocked && navigate(`/academy/level/${lv.id}`)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: 13.5, fontWeight: 800 }}>
                      {lv.num}. {L(lv.name)} {!unlocked && '🔒'}
                    </div>
                    <Tag color={done ? 'green' : current ? '' : 'blue'}>{prog.pct}%</Tag>
                  </div>
                  <div style={{ margin: '7px 0 4px' }}><Bar value={prog.pct} thin /></div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{t('ac.progressOf', { done: prog.done, total: prog.total })}</div>
                </div>
              </div>
            );
          })}
        </div>

        <SectionTitle icon={TrendingUp}>{t('home.recommended')}</SectionTitle>
        <Card pad={false}>
          {recommended.length === 0 && <Empty icon={BookCheck} title={t('home.emptyRecommended')} />}
          {recommended.map((r) => (
            <ListItem key={r.lesson.id} icon={BookCheck} title={L(r.lesson.title)} sub={`${L(r.level.name)} · ${L(r.module.name)}`} onClick={() => navigate(`/lesson/${r.lesson.id}`)} />
          ))}
        </Card>

        <SectionTitle icon={ClipboardList}>{t('home.upcoming')}</SectionTitle>
        <Card pad={false}>
          {upcoming.length === 0 && <Empty icon={Target} title={lang === 'ar' ? 'لا مهام معلقة' : 'Nothing pending — great pace!'} />}
          {upcoming.map((u) => (
            <ListItem key={u.key} icon={Target} iconColor="amber" title={u.text} chevron={false} />
          ))}
        </Card>

        <SectionTitle icon={Trophy} action={<span className="see-all" onClick={() => navigate('/achievements')}>{t('c.seeAll')}</span>}>{t('home.achievements')}</SectionTitle>
        <div className="stat-grid three">
          {ACHIEVEMENTS.slice(0, 6).map((a) => (
            <div key={a.id} className={`badge-tile ${s.achievements[a.id] ? '' : 'locked'}`}>
              <div className="b-icon">{a.icon}</div>
              <div className="b-name">{L(a.name)}</div>
            </div>
          ))}
        </div>

        <SectionTitle icon={Award}>{t('home.recent')}</SectionTitle>
        <Card pad={false}>
          {s.activity.length === 0 && <Empty icon={Award} title={t('home.noRecent')} />}
          {s.activity.slice(0, 5).map((a, i) => (
            <ListItem key={i} chevron={false} icon={Zap} title={a.type === 'lesson' ? (lang === 'ar' ? 'درس مكتمل' : 'Lesson completed') : a.type === 'project' ? (lang === 'ar' ? 'مشروع مُسلّم' : 'Project submitted') : a.type === 'achievement' ? (lang === 'ar' ? 'إنجاز جديد' : 'Achievement unlocked') : lang === 'ar' ? 'تقييم' : 'Assessment'} sub={`${new Date(a.at).toLocaleString(lang === 'ar' ? 'ar' : 'en')} · +${a.xp} XP`} />
          ))}
        </Card>
      </div>
    </div>
  );
}

function Flame2(props) { return <TrendingUp {...props} />; }
