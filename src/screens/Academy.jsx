import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Lock, CheckCircle2, BookOpen, Bookmark, BookmarkCheck, ChevronRight, ArrowRight, ListChecks, FileText } from 'lucide-react';
import { usePrefs } from '../state/PrefsContext.jsx';
import { useProgress } from '../state/ProgressContext.jsx';
import { Card, Progress as Bar, Tag, Btn, SectionTitle } from '../components/ui.jsx';
import Markdown from '../components/Markdown.jsx';
import QuizEngine, { isAnswerCorrect } from '../components/QuizEngine.jsx';
import { LEVELS, levelById, moduleById, isLevelUnlocked, isLevelLessonsDoneFn, isModuleDoneFn, isModuleUnlocked, isLessonUnlocked, levelProgress, moduleProgress, bestExamPct } from '../curriculum/index.js';

// ---------- Academy home: 10 levels ----------
export function AcademyScreen() {
  const { t, L, lang } = usePrefs();
  const p = useProgress();
  const s = p.state;
  const navigate = useNavigate();
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('ac.title')}</div><div className="header-count">{t('ac.levelsSub')}</div></div>
      </div></div>
      <div className="screen-content">
        {LEVELS.map((lv) => {
          const prog = levelProgress(s, lv.id);
          const unlocked = isLevelUnlocked(s, lv.id);
          return (
            <Card key={lv.id} className="tap-card" onClick={() => unlocked && navigate(`/academy/level/${lv.id}`)}>
              <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
                <div className={`list-icon ${prog.pct === 100 ? 'green' : ''}`} style={{ width: 46, height: 46, fontSize: 22 }}>{unlocked ? lv.icon : <Lock size={20} />}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 800 }}>{lv.num}. {L(lv.name)} {!unlocked && '🔒'}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)', margin: '3px 0 7px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{L(lv.goal)}</div>
                  <Bar value={prog.pct} thin />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: prog.pct === 100 ? 'var(--success)' : 'var(--accent)' }}>{prog.pct}%</div>
                  <div style={{ fontSize: 9.5, color: 'var(--muted)' }}>{t('ac.lessons')}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Level detail: modules + exam ----------
export function LevelScreen() {
  const { t, L, lang } = usePrefs();
  const { levelId } = useParams();
  const p = useProgress();
  const s = p.state;
  const navigate = useNavigate();
  const lv = levelById(levelId);
  if (!lv) return null;
  const unlocked = isLevelUnlocked(s, lv.id);
  const prog = levelProgress(s, lv.id);
  const lessonsDone = isLevelLessonsDoneFn(s, lv.id);
  const examBest = bestExamPct(s, `exam:${lv.id}`);
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate('/academy')}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{lv.icon} {lv.num}. {L(lv.name)}</div>
      </div></div>
      <div className="screen-content fade-in">
        {!unlocked ? (
          <Card><div style={{ textAlign: 'center', padding: 10 }}><Lock size={30} color="var(--muted)" /><div style={{ fontWeight: 700, marginTop: 8 }}>{t('ac.lockedHint')}</div></div></Card>
        ) : (
          <>
            <Card>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)' }}>{t('ac.goal')}</div>
              <div style={{ fontSize: 13.5, marginTop: 4, lineHeight: 1.7 }}>{L(lv.goal)}</div>
              <div style={{ marginTop: 10 }}><Bar value={prog.pct} /></div>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 5 }}>{t('ac.progressOf', { done: prog.done, total: prog.total })}</div>
            </Card>
            {lv.modules.length === 0 ? (
              <Card className="tap-card" onClick={() => navigate('/projects')}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div className="list-icon violet" style={{ width: 46, height: 46, fontSize: 22 }}>💼</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{lang === 'ar' ? '12 مشروعاً عملياً' : '12 practical projects'}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-2)' }}>{lang === 'ar' ? 'تُكمل هذا المستوى عبر شاشة المشاريع' : 'Complete this level through the Projects screen'}</div>
                  </div>
                  <ChevronRight size={16} color="var(--muted)" />
                </div>
              </Card>
            ) : (
              lv.modules.map((m) => {
                const mp = moduleProgress(s, m.id);
                const mUnlocked = isModuleUnlocked(s, m.id);
                return (
                  <Card key={m.id} pad={false} className={mUnlocked ? 'tap-card' : ''} onClick={() => mUnlocked && navigate(`/academy/level/${lv.id}/module/${m.id}`)}>
                    <div className="list-item">
                      <div className={`list-icon ${mp.pct === 100 ? 'green' : 'cyan'}`}><FileText /></div>
                      <div className="list-main">
                        <div className="list-title">{L(m.name)} {!mUnlocked && '🔒'}</div>
                        <div className="list-sub">{t('ac.progressOf', { done: mp.done, total: mp.total })}</div>
                        <div style={{ marginTop: 6 }}><Bar value={mp.pct} thin /></div>
                      </div>
                    </div>
                  </Card>
                );
              })
            )}
            {lv.exam && (
              <Card className="tap-card" onClick={() => lessonsDone && navigate(`/quiz/exam:${lv.id}`)} style={{ opacity: lessonsDone ? 1 : 0.6 }}>
                <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
                  <div className={`list-icon ${examBest !== null && examBest >= 70 ? 'green' : 'amber'}`}><ListChecks /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>{t('ac.exam')}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{lessonsDone ? (examBest !== null ? t('ac.examPassed', { score: examBest }) : t('c.start')) : t('ac.examLocked')}</div>
                  </div>
                  <ChevronRight size={16} color="var(--muted)" />
                </div>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// ---------- Module detail: lesson list ----------
export function ModuleScreen() {
  const { t, L, lang } = usePrefs();
  const { levelId, moduleId } = useParams();
  const p = useProgress();
  const s = p.state;
  const navigate = useNavigate();
  const found = moduleById(moduleId);
  if (!found) return null;
  const { module: m, level: lv } = found;
  const mUnlocked = isModuleUnlocked(s, moduleId);
  const allDone = isModuleDoneFn(s, moduleId);
  const tested = s.quizResults.filter((r) => r.quizId === `module:${moduleId}`);
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate(`/academy/level/${lv.id}`)}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{L(m.name)}</div>
      </div></div>
      <div className="screen-content fade-in">
        {!mUnlocked ? (
          <Card><div style={{ textAlign: 'center', padding: 10 }}><Lock size={30} color="var(--muted)" /><div style={{ fontWeight: 700, marginTop: 8 }}>{t('ac.lockedHint')}</div></div></Card>
        ) : (
          <>
            <Card pad={false}>
              {m.lessons.map((ls, i) => {
                const done = !!s.completedLessons[ls.id];
                const un = isLessonUnlocked(s, ls.id);
                return (
                  <div key={ls.id} className="list-item" onClick={() => un && navigate(`/lesson/${ls.id}`)} style={{ opacity: un ? 1 : 0.55 }}>
                    <div className={`list-icon ${done ? 'green' : 'cyan'}`}>{done ? <CheckCircle2 /> : <BookOpen />}</div>
                    <div className="list-main">
                      <div className="list-title">{i + 1}. {L(ls.title)}</div>
                      <div className="list-sub">{ls.minutes} {t('c.min')} · {done ? t('c.completed') : un ? t('c.inProgress') : '🔒 ' + t('c.locked')}</div>
                    </div>
                    {s.bookmarks.includes(ls.id) && <BookmarkCheck size={16} color="var(--warning)" />}
                  </div>
                );
              })}
            </Card>
            {allDone && (
              <Btn className="btn-block btn-lg" variant="btn-primary" onClick={() => navigate(`/quiz/module:${moduleId}`)}>
                <ListChecks size={17} /> {t('ac.moduleTest')}
              </Btn>
            )}
            {!allDone && <div style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>{t('ac.moduleTestLocked')}</div>}
          </>
        )}
      </div>
    </div>
  );
}

// ---------- Lesson viewer ----------
export function LessonScreen() {
  const { t, L, lang } = usePrefs();
  const { lessonId } = useParams();
  const p = useProgress();
  const s = p.state;
  const navigate = useNavigate();
  const item = useMemo(() => {
    for (const lv of LEVELS) for (const m of lv.modules || []) {
      const i = m.lessons.findIndex((x) => x.id === lessonId);
      if (i >= 0) return { lesson: m.lessons[i], module: m, level: lv, idx: i, next: m.lessons[i + 1] };
    }
    return null;
  }, [lessonId]);

  const [exDone, setExDone] = useState(false);
  const [exText, setExText] = useState('');
  const [exResult, setExResult] = useState(null);
  const [confirm, setConfirm] = useState({});
  const [kcheckDone, setKcheckDone] = useState(null);
  const [summary, setSummary] = useState(s.lessonNotes[lessonId] || '');

  if (!item) {
    return (
      <div className="screen"><div className="screen-content" style={{ paddingTop: 80 }}>
        <Card><div style={{ textAlign: 'center' }}>
          <Lock size={34} color="var(--muted)" />
          <div style={{ fontWeight: 700, marginTop: 10 }}>{t('nf.title')}</div>
          <Btn style={{ marginTop: 12 }} variant="btn-outline" onClick={() => navigate('/academy')}>{t('c.back')}</Btn>
        </div></Card>
      </div></div>
    );
  }
  const ls = item.lesson;
  const unlocked = isLessonUnlocked(s, ls.id);
  const done = !!s.completedLessons[ls.id];
  const ex = ls.exercise;

  if (!unlocked) {
    return (
      <div className="screen"><div className="screen-content" style={{ paddingTop: 80 }}>
        <Card><div style={{ textAlign: 'center' }}><Lock size={34} color="var(--muted)" /><div style={{ fontWeight: 700, marginTop: 10 }}>{t('ls.nextLocked')}</div></div></Card>
      </div></div>
    );
  }

  const exerciseOk = ex.kind === 'checklist' ? confirm && ex.confirm && ex.confirm.every((c, i) => confirm[i]) : exResult === true;
  const kcheckOk = kcheckDone !== null && kcheckDone >= 70;
  const canComplete = exerciseOk && kcheckOk;

  const checkExercise = () => {
    const ok = isAnswerCorrect({ type: ex.kind === 'value' ? 'num' : 'fill', accept: ex.accept, answer: ex.accept && ex.accept[0], tolerance: ex.tolerance }, exText);
    setExResult(ok);
  };

  const complete = () => {
    if (done) return;
    p.completeLesson(ls.id, ls.xp, kcheckDone);
    p.setLessonNote(ls.id, summary);
    setTimeout(() => {
      if (item.next) navigate(`/lesson/${item.next.id}`);
      else navigate(`/academy/level/${item.level.id}`);
    }, 900);
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate(`/academy/level/${item.level.id}/module/${item.module.id}`)}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{done && '✓ '}{L(ls.title)}</div>
        <button className={`icon-btn ${s.bookmarks.includes(ls.id) ? 'active' : ''}`} onClick={() => p.toggleBookmark(ls.id)}>
          {s.bookmarks.includes(ls.id) ? <BookmarkCheck size={17} /> : <Bookmark size={17} />}
        </button>
      </div></div>

      <div className="screen-content fade-in">
        <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
          <Tag color="blue">{L(item.level.name)}</Tag>
          <Tag>{L(item.module.name)}</Tag>
          <Tag color="amber">{ls.minutes} {t('c.min')}</Tag>
          <Tag color="green">+{ls.xp} XP</Tag>
        </div>

        <Card>
          <div className="card-title">{L(ls.title)}</div>
          <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{L(ls.description)}</div>
        </Card>

        <SectionTitle icon={ListChecks}>{t('ls.objectives')}</SectionTitle>
        <Card>
          {ls.objectives.map((o, i) => (
            <div key={i} style={{ display: 'flex', gap: 9, marginBottom: 8 }}>
              <CheckCircle2 size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: 3 }} />
              <div style={{ fontSize: 13 }}>{L(o)}</div>
            </div>
          ))}
        </Card>

        <SectionTitle icon={BookOpen}>{t('ls.explanation')}</SectionTitle>
        <Card><Markdown text={L(ls.body)} lang={lang} /></Card>

        <SectionTitle icon={FileText}>{t('ls.terms')}</SectionTitle>
        <Card>
          {ls.terms.map((tm, i) => (
            <div key={i} className="term-card">
              <span className="term-en">{tm.en}</span>
              <span className="term-ar"><b>{tm.ar}</b> — {L(tm.def)}</span>
            </div>
          ))}
        </Card>

        <SectionTitle icon={FileText}>{t('c.examples')}</SectionTitle>
        {ls.examples.map((ex2, i) => (
          <Card key={i}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--accent)', marginBottom: 5 }}>{L(ex2.title)}</div>
            <Markdown text={L(ex2.body)} lang={lang} />
          </Card>
        ))}

        {ls.steps && ls.steps.length > 0 && (
          <>
            <SectionTitle icon={ListChecks}>{t('ls.steps')}</SectionTitle>
            <Card>
              {ls.steps.map((st, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 9 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 8, background: 'var(--primary-soft)', color: 'var(--accent)', fontSize: 11.5, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ fontSize: 13 }}>{L(st)}</div>
                </div>
              ))}
            </Card>
          </>
        )}

        {ls.functions && ls.functions.length > 0 && (
          <>
            <SectionTitle icon={FileText}>{t('ls.functions')}</SectionTitle>
            {ls.functions.map((fn, i) => (
              <Card key={i}>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--accent)', direction: 'ltr', textAlign: 'start' }}>{fn.name}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-2)', margin: '4px 0 8px' }}>{fn.ar}</div>
                <div style={{ fontSize: 12.5 }}><b>{t('xl.syntax')}:</b> <code style={{ background: 'var(--surface-3)', padding: '2px 7px', borderRadius: 6, direction: 'ltr', display: 'inline-block' }}>{fn.syntax}</code></div>
                <div style={{ margin: '7px 0' }}>
                  <b style={{ fontSize: 12.5 }}>{t('xl.args')}:</b>
                  {fn.args.map((a, j) => (
                    <div key={j} style={{ fontSize: 12.5, color: 'var(--text-2)', marginInlineStart: 12 }}>
                      <span className="kbd">{a.name}</span> — {L(a.desc)}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12.5 }}><b>{t('xl.example')}:</b> <code style={{ background: 'var(--surface-3)', padding: '2px 7px', borderRadius: 6, direction: 'ltr', display: 'inline-block' }}>{fn.example}</code></div>
                <div style={{ fontSize: 12.5, marginTop: 3 }}><b>{t('xl.result')}:</b> {L(fn.result)}</div>
                <div style={{ fontSize: 12.5, marginTop: 6 }}>
                  <b>{t('xl.mistakes')}:</b>
                  {fn.mistakes.map((mm, j) => <div key={j} style={{ color: 'var(--text-2)' }}>• {L(mm)}</div>)}
                </div>
              </Card>
            ))}
          </>
        )}

        {/* Exercise */}
        <SectionTitle icon={ListChecks}>{t('ls.exercise')}</SectionTitle>
        <Card>
          <div style={{ fontSize: 13.5, lineHeight: 1.7 }}>{L(ex.prompt)}</div>
          {ex.kind === 'checklist' ? (
            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 12, color: 'var(--text-2)', marginBottom: 8 }}>{t('ls.exSelf')}</div>
              {ex.confirm.map((c, i) => (
                <label key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', padding: '8px 0', fontSize: 13, cursor: 'pointer' }}>
                  <input type="checkbox" checked={!!confirm[i]} onChange={(e) => setConfirm((prev) => ({ ...prev, [i]: e.target.checked }))} style={{ marginTop: 3, width: 17, height: 17 }} />
                  <span>{L(c)}</span>
                </label>
              ))}
            </div>
          ) : (
            <div style={{ marginTop: 10 }}>
              <input className="fill-input" placeholder={t('ls.exPrompt')} value={exText} disabled={exResult !== null}
                onChange={(e) => setExText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && exText.trim() && exResult === null) checkExercise(); }} />
              {exResult === null && <Btn className="btn-block" style={{ marginTop: 9 }} variant="btn-primary" disabled={!exText.trim()} onClick={checkExercise}>{t('ls.exCheck')}</Btn>}
            </div>
          )}
          {exResult === true && <div className="feedback" style={{ marginTop: 10 }}>✓ {t('ls.exCorrect')}</div>}
          {exResult === false && <div className="feedback bad" style={{ marginTop: 10 }}>✗ {t('ls.exWrong')}<div style={{ marginTop: 4 }}><b>{t('c.showSolution')}:</b> {L(ex.solution)}</div></div>}
          {ex.kind === 'checklist' && ex.solution && confirm && ex.confirm && ex.confirm.every((c, i) => confirm[i]) && (
            <div className="callout tip" style={{ marginTop: 10 }}>{L(ex.solution)}</div>
          )}
        </Card>

        {/* Knowledge check */}
        <SectionTitle icon={ListChecks}>{t('ls.kcheck')}</SectionTitle>
        {kcheckDone === null ? (
          <Card>
            <div style={{ fontSize: 12.5, color: 'var(--text-2)', marginBottom: 10 }}>{t('ls.needQuiz')}</div>
            <Btn className="btn-block" variant="btn-accent" onClick={() => document.getElementById('kc') && document.getElementById('kc').scrollIntoView({ behavior: 'smooth' })}>{t('c.start')}</Btn>
          </Card>
        ) : (
          <Card><div className={`feedback ${kcheckOk ? '' : 'bad'}`} style={{ margin: 0 }}>{kcheckOk ? '✓ ' : ''}{t('c.score')}: {kcheckDone}% (70% {lang === 'ar' ? 'للنجاح' : 'to pass'})</div></Card>
        )}
        <div id="kc">
          <QuizEngine compact title={t('ls.kcheck')} questions={ls.quiz} kind="lesson" onFinish={(sc, tot, pct) => setKcheckDone(pct)} />
        </div>

        <SectionTitle icon={FileText}>{t('ls.summary')}</SectionTitle>
        <Card>
          <textarea className="textarea" style={{ minHeight: 70 }} placeholder={t('ls.summaryPlaceholder')} value={summary} onChange={(e) => { setSummary(e.target.value); p.setLessonNote(ls.id, e.target.value); }} />
        </Card>

        <div style={{ height: 10 }} />
        {done ? (
          <div className="feedback" style={{ margin: 0 }}>✓ {t('c.completed')}</div>
        ) : (
          <>
            {!canComplete && <div style={{ fontSize: 12, color: 'var(--warning)', textAlign: 'center', marginBottom: 8 }}>{t('ls.exNeed')}</div>}
            <Btn className="btn-block btn-lg" variant="btn-primary" disabled={!canComplete} onClick={complete}>
              <CheckCircle2 size={17} /> {t('ls.complete')} (+{ls.xp} XP)
            </Btn>
          </>
        )}
        <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
          {item.idx > 0 && <Btn className="btn-block" variant="btn-outline" onClick={() => navigate(`/lesson/${item.module.lessons[item.idx - 1].id}`)}>{t('ls.prevLesson')}</Btn>}
          {item.next && <Btn className="btn-block" variant="btn-outline" disabled={!isLessonUnlocked(s, item.next.id)} onClick={() => navigate(`/lesson/${item.next.id}`)}>{t('ls.nextLesson')}</Btn>}
        </div>
      </div>
    </div>
  );
}
