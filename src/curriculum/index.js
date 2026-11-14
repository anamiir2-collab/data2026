// Curriculum index: structure, ordering, unlock rules, question composition.
// Content lives in level01.js … level10.js (bilingual data only).
import L1 from './level01.js';
import L2 from './level02.js';
import L3 from './level03.js';
import L4 from './level04.js';
import L5 from './level05.js';
import L6 from './level06.js';
import L7 from './level07.js';
import L8 from './level08.js';
import L9 from './level09.js';
import L10 from './level10.js';

export const LEVELS = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10];

// Flat ordered lesson list (sequential unlocking across the whole journey)
export const ORDERED_LESSONS = LEVELS.flatMap((lv) =>
  (lv.modules || []).flatMap((m) => m.lessons.map((ls) => ({ lesson: ls, module: m, level: lv })))
);

export function lessonById(id) {
  return ORDERED_LESSONS.find((x) => x.lesson.id === id);
}

export function levelById(id) {
  return LEVELS.find((l) => l.id === id);
}

export function moduleById(id) {
  for (const lv of LEVELS) {
    const m = (lv.modules || []).find((mm) => mm.id === id);
    if (m) return { module: m, level: lv };
  }
  return null;
}

export function moduleLessons(moduleId) {
  const found = moduleById(moduleId);
  return found ? found.module.lessons : [];
}

// ---- completion helpers ----
export function isLessonDone(progress, lessonId) {
  return !!progress.completedLessons[lessonId];
}

export function isModuleDoneFn(progress, moduleId) {
  const ls = moduleLessons(moduleId);
  return ls.length > 0 && ls.every((l) => isLessonDone(progress, l.id));
}

export function isLevelLessonsDoneFn(progress, levelId) {
  const lv = levelById(levelId);
  if (!lv) return false;
  const all = (lv.modules || []).flatMap((m) => m.lessons);
  return all.length > 0 && all.every((l) => isLessonDone(progress, l.id));
}

export function moduleProgress(progress, moduleId) {
  const ls = moduleLessons(moduleId);
  const done = ls.filter((l) => isLessonDone(progress, l.id)).length;
  return { done, total: ls.length, pct: ls.length ? Math.round((done / ls.length) * 100) : 0 };
}

export function levelProgress(progress, levelId) {
  const lv = levelById(levelId);
  const all = lv ? (lv.modules || []).flatMap((m) => m.lessons) : [];
  const done = all.filter((l) => isLessonDone(progress, l.id)).length;
  return { done, total: all.length, pct: all.length ? Math.round((done / all.length) * 100) : 0 };
}

// ---- unlock rules (progressive learning) ----
export function isLessonUnlocked(progress, lessonId) {
  const idx = ORDERED_LESSONS.findIndex((x) => x.lesson.id === lessonId);
  if (idx < 0) return false;
  if (idx === 0) return true;
  return isLessonDone(progress, ORDERED_LESSONS[idx - 1].lesson.id);
}

export function isLevelUnlocked(progress, levelId) {
  const idx = LEVELS.findIndex((l) => l.id === levelId);
  if (idx <= 0) return true;
  return isLevelLessonsDoneFn(progress, LEVELS[idx - 1].id);
}

export function isModuleUnlocked(progress, moduleId) {
  const found = moduleById(moduleId);
  if (!found) return false;
  const mods = found.level.modules || [];
  const idx = mods.findIndex((m) => m.id === moduleId);
  if (idx <= 0) return isLevelUnlocked(progress, found.level.id);
  return isModuleDoneFn(progress, mods[idx - 1].id) && isLevelUnlocked(progress, found.level.id);
}

export function isModuleTestUnlocked(progress, moduleId) {
  return isModuleDoneFn(progress, moduleId);
}

export function isLevelExamUnlocked(progress, levelId) {
  return isLevelLessonsDoneFn(progress, levelId);
}

// ---- navigation helpers ----
export function nextUnlockedLesson(progress) {
  const item = ORDERED_LESSONS.find((x) => !isLessonDone(progress, x.lesson.id) && isLessonUnlocked(progress, x.lesson.id));
  if (item) return item;
  // All unlocked lessons done: next lesson exists but is locked → return it so UI can show "continue"
  return ORDERED_LESSONS.find((x) => !isLessonDone(progress, x.lesson.id)) || null;
}

export function nextIncompleteLesson(progress) {
  return ORDERED_LESSONS.find((x) => !isLessonDone(progress, x.lesson.id)) || null;
}

export function bestExamPct(progress, quizId) {
  const r = progress.examResults.find((x) => x.quizId === quizId);
  return r ? r.bestPct : null;
}

// Module test composes its questions from the module's lesson quizzes.
export function moduleTestQuestions(moduleId) {
  const ls = moduleLessons(moduleId);
  const qs = [];
  ls.forEach((l) => l.quiz.forEach((q, i) => qs.push({ ...q, qid: `${l.id}#${i}` })));
  return qs.slice(0, 10);
}

export function levelExamQuestions(levelId) {
  const lv = levelById(levelId);
  return lv && lv.exam ? lv.exam.questions : [];
}

export const FINAL_EXAM_QUESTIONS = (levelById('L10') && levelById('L10').finalExam && levelById('L10').finalExam.questions) || [];
