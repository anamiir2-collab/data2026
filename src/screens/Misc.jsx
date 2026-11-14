import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Trophy, Settings as Cog, Download, Upload, Smartphone, FileText, CheckCircle2, Lock, User as UserIcon, Target, ClipboardList, ChevronRight } from 'lucide-react';
import { usePrefs, showToast, playSound } from '../state/PrefsContext.jsx';
import { useProgress } from '../state/ProgressContext.jsx';
import { Card, SectionTitle, Btn, Tag, Tabs, Ring, Progress as Bar, StatTile, Empty, Sheet, ConfirmSheet } from '../components/ui.jsx';
import QuizEngine from '../components/QuizEngine.jsx';
import { PROJECTS } from '../data/projects.js';
import { ACHIEVEMENTS } from '../data/achievements.js';
import { LEVELS, moduleById, levelById, moduleTestQuestions, levelExamQuestions, FINAL_EXAM_QUESTIONS, isLevelUnlocked, isLevelLessonsDoneFn } from '../curriculum/index.js';
import { rankFor } from '../i18n/translations.js';

// ================= QUIZ RUNNER (module tests / level exams / final) =================
export function QuizScreen() {
  const { quizId } = useParams();
  const { t, L, sound, lang } = usePrefs();
  const p = useProgress();
  const navigate = useNavigate();
  const cfg = useMemo(() => {
    if (quizId.startsWith('module:')) {
      const id = quizId.slice(7);
      const found = moduleById(id);
      if (!found) return null;
      return { title: t('as.moduleTest', { name: L(found.module.name) }), questions: moduleTestQuestions(id), kind: 'module' };
    }
    if (quizId.startsWith('exam:')) {
      const id = quizId.slice(5);
      const lv = levelById(id);
      if (!lv || !lv.exam) return null;
      return { title: t('as.levelExam', { n: lv.num, name: L(lv.name) }), questions: levelExamQuestions(id), kind: 'exam' };
    }
    if (quizId === 'final') return { title: t('as.finalExam'), questions: FINAL_EXAM_QUESTIONS, kind: 'final' };
    if (quizId.startsWith('project:')) {
      const pr = PROJECTS.find((x) => x.id === quizId.slice(8));
      if (!pr) return null;
      return { title: `${t('pr.assessment')} — ${L(pr.title)}`, questions: pr.assessment, kind: 'exam' };
    }
    return null;
  }, [quizId, t, L]);

  if (!cfg) return <div className="screen"><div className="screen-content"><Empty icon={ClipboardList} title="Not found" /></div></div>;
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row"><div className="screen-title">{cfg.title}</div></div></div>
      <div className="screen-content">
        <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>{t('as.saved')}</div>
        <QuizEngine
          title={cfg.title}
          questions={cfg.questions}
          kind={cfg.kind}
          onFinish={(score, total, pct) => { p.recordQuiz(quizId, cfg.kind, score, total); showToast(`${t('c.score')}: ${pct}%`); }}
          onExit={() => navigate(-1)}
        />
      </div>
    </div>
  );
}

// ================= PROJECTS =================
export function ProjectsScreen() {
  const { t, L } = usePrefs();
  const p = useProgress();
  const navigate = useNavigate();
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('pr.title')}</div><div className="header-count">{t('pr.sub')}</div></div>
      </div></div>
      <div className="screen-content fade-in">
        {PROJECTS.map((pr) => {
          const sub = p.state.projectSubmissions[pr.id];
          return (
            <Card key={pr.id} className="tap-card" onClick={() => navigate(`/projects/${pr.id}`)}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div className={`list-icon ${sub ? 'green' : 'violet'}`}>{sub ? <CheckCircle2 /> : <ClipboardList />}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 800 }}>{pr.num}. {L(pr.title)}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>{pr.tools.join(' · ')} · +{pr.xp} XP {sub && '· ' + t('c.completed')}</div>
                </div>
                <ChevronRight size={16} color="var(--muted)" />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectDetail() {
  const { t, L, lang } = usePrefs();
  const { projectId } = useParams();
  const p = useProgress();
  const navigate = useNavigate();
  const pr = PROJECTS.find((x) => x.id === projectId);
  const [tab, setTab] = useState('brief');
  const [solShown, setSolShown] = useState(false);
  if (!pr) return null;
  const s = p.state;
  const tasks = pr.tasks.map((_, i) => !!((s.projectTasks[pr.id] || [])[i]));
  const allDone = tasks.every(Boolean);
  const submitted = s.projectSubmissions[pr.id];
  const note = s.projectNotes[pr.id] || '';

  const dlCsv = () => {
    if (!pr.dataset.csv) return;
    const blob = new Blob([pr.dataset.csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${pr.id}_dataset.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate('/projects')}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{pr.num}. {L(pr.title)}</div>
      </div></div>
      <div className="screen-content fade-in">
        <Tabs active={tab} onChange={setTab} tabs={[
          { id: 'brief', label: t('pr.brief') },
          { id: 'tasks', label: t('pr.tasks') },
          { id: 'workspace', label: t('pr.workspace') },
          { id: 'solution', label: submitted ? t('pr.solution') : '🔒 ' + t('pr.solution') },
          { id: 'assessment', label: submitted ? t('pr.assessment') : '🔒 ' + t('pr.assessment') },
        ]} />

        {tab === 'brief' && (
          <>
            <Card>
              <div className="label">{t('pr.scenario')}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.7 }}>{L(pr.scenario)}</div>
              <div className="label" style={{ marginTop: 10 }}>{t('pr.problem')}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.7 }}>{L(pr.problem)}</div>
              <div className="label" style={{ marginTop: 10 }}>{t('pr.objectives')}</div>
              {pr.objectives.map((o, i) => <div key={i} style={{ fontSize: 13, marginInlineStart: 8 }}>• {L(o)}</div>)}
              <div style={{ marginTop: 10 }}><Tag color="blue">{t('pr.tools')}: {pr.tools.join(', ')}</Tag> <Tag color="green">+{pr.xp} XP</Tag></div>
            </Card>
            <Card>
              <div className="label">{t('pr.deliverables')}</div>
              <div style={{ fontSize: 13 }}>{L(pr.deliverables)}</div>
              <div className="label" style={{ marginTop: 8 }}>{t('pr.criteria')}</div>
              <div style={{ fontSize: 13 }}>{L(pr.criteria)}</div>
            </Card>
          </>
        )}

        {tab === 'tasks' && (
          <Card pad={false}>
            {pr.tasks.map((tk, i) => (
              <label key={i} className="list-item" style={{ cursor: 'pointer' }}>
                <input type="checkbox" checked={tasks[i]} onChange={(e) => p.setProjectTask(pr.id, i, e.target.checked)} style={{ width: 18, height: 18, flexShrink: 0 }} />
                <div className="list-main"><div className="list-title" style={{ whiteSpace: 'normal' }}>{L(tk)}</div></div>
              </label>
            ))}
            <div style={{ padding: 14 }}>
              {!submitted ? (
                <>
                  {!allDone && <div style={{ fontSize: 12, color: 'var(--warning)', marginBottom: 8 }}>{t('pr.submitLocked')}</div>}
                  <Btn className="btn-block" variant="btn-primary" disabled={!allDone}
                    onClick={() => { p.submitProject(pr.id, tasks.filter(Boolean).length, tasks.length, pr.xp); showToast(t('pr.submitted', { xp: pr.xp })); }}>
                    {t('pr.submitProject')}
                  </Btn>
                </>
              ) : (
                <div className="feedback" style={{ margin: 0 }}>✓ {t('c.completed')} · {new Date(submitted.at).toLocaleDateString(lang === 'ar' ? 'ar' : 'en')}</div>
              )}
            </div>
          </Card>
        )}

        {tab === 'workspace' && (
          <Card>
            <textarea className="textarea" style={{ minHeight: 180 }} placeholder={t('pr.workspacePh')} value={note} onChange={(e) => p.setProjectNote(pr.id, e.target.value)} />
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{lang === 'ar' ? 'يُحفظ تلقائياً على هذا الجهاز' : 'Autosaved on this device'}</div>
          </Card>
        )}

        {tab === 'solution' && (
          submitted ? (
            <Card>
              <div style={{ fontSize: 13.5, lineHeight: 1.8 }}>{L(pr.solution)}</div>
              <Btn className="btn-block" variant="btn-outline" style={{ marginTop: 12 }} onClick={() => setSolShown(!solShown)}>
                {solShown ? (lang === 'ar' ? 'إخفاء تفاصيل المهام' : 'Hide task details') : (lang === 'ar' ? 'تذكير بالمهام المطلوبة' : 'Show required tasks')}
              </Btn>
              {solShown && pr.tasks.map((tk, i) => <div key={i} style={{ fontSize: 12.5, color: 'var(--text-2)', marginInlineStart: 8 }}>• {L(tk)}</div>)}
            </Card>
          ) : (
            <Card><Empty icon={Lock} title={t('pr.submitLocked')} sub={lang === 'ar' ? 'أكمل المهام وأرسل محاولتك أولاً' : 'Complete the tasks and submit your attempt first'} /></Card>
          )
        )}

        {tab === 'assessment' && (
          submitted ? (
            <QuizEngine title={t('pr.assessment')} questions={pr.assessment} kind="exam"
              onFinish={(sc, tot, pct) => p.recordQuiz(`project:${pr.id}`, 'exam', sc, tot)} />
          ) : (
            <Card><Empty icon={Lock} title={t('pr.submitLocked')} /></Card>
          )
        )}

        {pr.dataset.csv && tab === 'brief' && (
          <Card>
            <div className="label">{t('pr.dataset')}</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-2)', marginBottom: 8 }}>{L(pr.dataset.info)}</div>
            <Btn size="btn-sm" variant="btn-accent" onClick={dlCsv}><Download size={14} /> {t('c.download')} CSV</Btn>
          </Card>
        )}
      </div>
    </div>
  );
}

// ================= PROFILE =================
export function ProfileScreen() {
  const { t, L, lang } = usePrefs();
  const p = useProgress();
  const navigate = useNavigate();
  const s = p.state;
  const rank = rankFor(s.xp, lang);
  const totalLessons = LEVELS.reduce((a, lv) => a + (lv.modules || []).reduce((b, m) => b + m.lessons.length, 0), 0);
  const doneLessons = Object.keys(s.completedLessons).length;
  const earned = Object.keys(s.achievements).filter((k) => s.achievements[k]);
  const nextXp = rank.next ? rank.next - s.xp : 0;
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div className="screen-title">{t('pf2.title')}</div>
        <button className="icon-btn" onClick={() => navigate('/settings')}><Cog size={17} /></button>
      </div></div>
      <div className="screen-content fade-in">
        <Card>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div className="avatar lg">{(s.name || (lang === 'ar' ? 'د' : 'D')).slice(0, 1)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{s.name || (lang === 'ar' ? 'متعلم DataPath' : 'DataPath Learner')}</div>
              <Tag color="blue">{t('pf2.levelTitle')}: {rank.name}</Tag>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <Bar value={rank.next ? ((s.xp - (rank.next ? rankFor(s.xp, lang).index >= 0 ? [0,150,350,600,900,1300,1800,2400,3000][rankFor(s.xp, lang).index] : 0 : 0)) / Math.max(1, rank.next - (rankFor(s.xp, lang).index >= 0 ? [0,150,350,600,900,1300,1800,2400,3000][rankFor(s.xp, lang).index] : 0))) * 100 : 100} thin />
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 4 }}>{rank.next ? t('pf2.xpToNext', { xp: nextXp }) : 'MAX 🎉'}</div>
          </div>
        </Card>

        <div className="stat-grid">
          <StatTile value={`${doneLessons}/${totalLessons}`} label={t('home.stats.lessons')} />
          <StatTile value={s.xp} label="XP" />
          <StatTile value={`🔥 ${s.streak.count}`} label={t('home.stats.streak')} />
          <StatTile value={`${earned.length}/${ACHIEVEMENTS.length}`} label={t('pf2.achievements')} />
        </div>

        <SectionTitle icon={Trophy}>{t('pf2.achievements')}</SectionTitle>
        <Card pad={false} className="tap-card" onClick={() => navigate('/achievements')}>
          <div className="list-item">
            <div className="list-icon amber"><Trophy /></div>
            <div className="list-main"><div className="list-title">{t('pf2.achEarned', { n: earned.length, m: ACHIEVEMENTS.length })}</div></div>
            <ChevronRight size={15} color="var(--muted)" />
          </div>
        </Card>

        <SectionTitle icon={FileText}>{t('pf2.examHistory')}</SectionTitle>
        <Card pad={false}>
          {s.quizResults.filter((r) => r.kind !== 'lesson').length === 0 && <Empty icon={FileText} title={t('pf2.noExams')} />}
          {s.quizResults.filter((r) => r.kind !== 'lesson').slice(0, 8).map((r, i) => (
            <div key={i} className="list-item" style={{ cursor: 'default' }}>
              <div className={`list-icon ${r.pct >= 70 ? 'green' : 'amber'}`}><FileText /></div>
              <div className="list-main">
                <div className="list-title">{r.quizId}</div>
                <div className="list-sub">{r.score}/{r.total} · {new Date(r.at).toLocaleDateString(lang === 'ar' ? 'ar' : 'en')}</div>
              </div>
              <Tag color={r.pct >= 70 ? 'green' : 'amber'}>{r.pct}%</Tag>
            </div>
          ))}
        </Card>

        <SectionTitle icon={Target}>{t('pf2.links')}</SectionTitle>
        <Card pad={false}>
          <div className="list-item" onClick={() => navigate('/readiness')}><div className="list-icon cyan"><FileText /></div><div className="list-main"><div className="list-title">{t('l10.readiness')}</div></div><ChevronRight size={15} color="var(--muted)" /></div>
          <div className="list-item" onClick={() => navigate('/install')}><div className="list-icon cyan"><Smartphone /></div><div className="list-main"><div className="list-title">{t('pf2.install')}</div></div><ChevronRight size={15} color="var(--muted)" /></div>
        </Card>
      </div>
    </div>
  );
}

// ================= ACHIEVEMENTS =================
export function AchievementsScreen() {
  const { t, L } = usePrefs();
  const p = useProgress();
  const navigate = useNavigate();
  const s = p.state;
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate(-1)}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{t('ach.title')}</div>
      </div></div>
      <div className="screen-content fade-in">
        <Card pad={false}>
          {ACHIEVEMENTS.map((a) => {
            const got = s.achievements[a.id];
            return (
              <div key={a.id} className={`ach-row ${got ? '' : 'locked'}`}>
                <div className="ach-emoji">{got ? a.icon : '🔒'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 13.5 }}>{L(a.name)}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-2)' }}>{L(a.desc)}</div>
                  {got && <div style={{ fontSize: 10.5, color: 'var(--success)', marginTop: 2 }}>{t('ach.unlockedAt')}: {new Date(got).toLocaleDateString()}</div>}
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}

// ================= SETTINGS =================
export function SettingsScreen() {
  const { t, lang, setLang, theme, setTheme, sound, setSound, reminders, setReminders } = usePrefs();
  const p = useProgress();
  const s = p.state;
  const navigate = useNavigate();
  const [name, setName] = useState(s.name);
  const [resetOpen, setResetOpen] = useState(false);

  const exportJson = () => {
    const blob = new Blob([p.exportJSON()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'datapath-academy-backup.json';
    a.click();
    URL.revokeObjectURL(a.href);
    showToast(t('pf2.exportProgress'));
  };
  const importJson = (file) => {
    const rd = new FileReader();
    rd.onload = async () => {
      const ok = await p.importJSON(String(rd.result));
      showToast(ok ? t('pf2.importOk') : t('pf2.importBad'), ok ? 'success' : 'error');
    };
    rd.readAsText(file);
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate(-1)}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{t('pf2.settings')}</div>
      </div></div>
      <div className="screen-content fade-in">
        <Card pad={false}>
          <div className="setting-row"><UserIcon size={16} color="var(--muted)" />
            <input className="input" style={{ marginInlineStart: 10 }} placeholder={t('pf2.namePh')} value={name}
              onChange={(e) => setName(e.target.value)} onBlur={() => { p.setName(name); showToast(t('pf2.savedName')); }} />
          </div>
          <div className="setting-row">
            <span style={{ fontSize: 13.5, fontWeight: 700, flex: 1 }}>{t('pf2.language')}</span>
            <button className={`chip ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>English</button>
            <button className={`chip ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')}>العربية</button>
          </div>
          <div className="setting-row">
            <span style={{ fontSize: 13.5, fontWeight: 700, flex: 1 }}>{t('pf2.theme')}</span>
            <button className={`chip ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}>{t('pf2.dark')}</button>
            <button className={`chip ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}>{t('pf2.light')}</button>
          </div>
          <div className="setting-row">
            <span style={{ fontSize: 13.5, fontWeight: 700, flex: 1 }}>{t('pf2.goal')}</span>
            <select className="select" style={{ maxWidth: 130 }} value={s.dailyGoal} onChange={(e) => p.setDailyGoal(Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} {t('pf2.goalUnit')}</option>)}
            </select>
          </div>
          <div className="setting-row">
            <span style={{ fontSize: 13.5, fontWeight: 700, flex: 1 }}>{t('pf2.sound')}</span>
            <div className={`switch ${sound ? 'on' : ''}`} onClick={() => { setSound(!sound); if (!sound) playSound('ok', true); }} />
          </div>
          <div className="setting-row">
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t('pf2.reminders')}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>{t('pf2.remindersSub')}</div>
            </div>
            <div className={`switch ${reminders ? 'on' : ''}`} onClick={() => {
              const nextVal = !reminders;
              setReminders(nextVal);
              if (nextVal && 'Notification' in window && Notification.permission === 'default') {
                Notification.requestPermission().then((perm) => showToast(perm === 'granted' ? t('sys.reminderEnabled') : t('sys.reminderDenied')));
              } else showToast(t('sys.reminderEnabled'));
            }} />
          </div>
        </Card>

        <SectionTitle icon={Download}>{t('pf2.backup')}</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gap: 9 }}>
            <Btn className="btn-block" onClick={exportJson}><Download size={15} /> {t('pf2.exportProgress')}</Btn>
            <label className="btn btn-block btn-outline" style={{ cursor: 'pointer' }}>
              <Upload size={15} /> {t('pf2.importProgress')}
              <input type="file" accept=".json,application/json" style={{ display: 'none' }} onChange={(e) => e.target.files[0] && importJson(e.target.files[0])} />
            </label>
            <Btn className="btn-block" variant="btn-danger" onClick={() => setResetOpen(true)}>{t('pf2.reset')}</Btn>
          </div>
        </Card>
        <ConfirmSheet open={resetOpen} onClose={() => setResetOpen(false)} title={t('sys.confirmTitle')}
          message={t('pf2.resetConfirm')} requireWord={t('pf2.resetWord')} confirmLabel={t('pf2.reset')}
          onConfirm={() => { p.resetAll(); setResetOpen(false); showToast(t('pf2.resetOk')); }} />
      </div>
    </div>
  );
}

// ================= INSTALL GUIDE =================
export function InstallGuideScreen() {
  const { t, lang } = usePrefs();
  const navigate = useNavigate();
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate(-1)}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{t('ig.title')}</div>
      </div></div>
      <div className="screen-content fade-in">
        <Card><div style={{ fontSize: 13, lineHeight: 1.8 }}>{t('ig.sub')}</div></Card>
        <Card><div className="card-title">🤖 {t('ig.android')}</div><div style={{ fontSize: 13, lineHeight: 1.8 }}>{t('ig.androidSteps')}</div></Card>
        <Card><div className="card-title">🍎 {t('ig.ios')}</div><div style={{ fontSize: 13, lineHeight: 1.8 }}>{t('ig.iosSteps')}</div></Card>
        <Card><div className="card-title">💻 {t('ig.desktop')}</div><div style={{ fontSize: 13, lineHeight: 1.8 }}>{t('ig.desktopSteps')}</div></Card>
        <div className="callout">{t('ig.note')}</div>
      </div>
    </div>
  );
}

// ================= READINESS REPORT =================
export function ReadinessScreen() {
  const { t, L, lang } = usePrefs();
  const p = useProgress();
  const navigate = useNavigate();
  const s = p.state;
  const reqs = [
    { label: { en: 'Level 1 — Data Entry Specialist (lessons)', ar: 'المستوى 1 — أخصائي إدخال البيانات' }, ok: isLevelLessonsDoneFn(s, 'L1') },
    { label: { en: 'Level 2 — Microsoft Excel (lessons)', ar: 'المستوى 2 — Microsoft Excel' }, ok: isLevelLessonsDoneFn(s, 'L2') },
    { label: { en: 'Level 3 — Data Cleaning (lessons)', ar: 'المستوى 3 — تنظيف البيانات' }, ok: isLevelLessonsDoneFn(s, 'L3') },
    { label: { en: 'Level 4 — Data Management (lessons)', ar: 'المستوى 4 — إدارة البيانات' }, ok: isLevelLessonsDoneFn(s, 'L4') },
    { label: { en: 'Level 5 — Statistics (lessons)', ar: 'المستوى 5 — الإحصاء' }, ok: isLevelLessonsDoneFn(s, 'L5') },
    { label: { en: 'Level 6 — SQL (lessons)', ar: 'المستوى 6 — SQL' }, ok: isLevelLessonsDoneFn(s, 'L6') },
    { label: { en: 'Level 7 — Power BI (lessons)', ar: 'المستوى 7 — Power BI' }, ok: isLevelLessonsDoneFn(s, 'L7') },
    { label: { en: 'Level 8 — Python (lessons)', ar: 'المستوى 8 — Python' }, ok: isLevelLessonsDoneFn(s, 'L8') },
    { label: { en: 'Level 9 — at least 3 projects submitted', ar: 'المستوى 9 — إرسال 3 مشاريع على الأقل' }, ok: Object.keys(s.projectSubmissions).length >= 3 },
    { label: { en: 'Level 10 lessons completed', ar: 'إكمال دروس المستوى 10' }, ok: isLevelLessonsDoneFn(s, 'L10') },
    { label: { en: 'Final Comprehensive Exam passed (≥70%)', ar: 'اجتياز التقييم الشامل النهائي (≥70%)' }, ok: (s.examResults.find((r) => r.quizId === 'final') || {}).bestPct >= 70 },
    { label: { en: 'Portfolio entry documented', ar: 'إدخال موثق في معرض الأعمال' }, ok: s.portfolioEntries.length >= 1 },
  ];
  const ready = reqs.every((r) => r.ok);
  const doneCount = reqs.filter((r) => r.ok).length;
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <button className="icon-btn" onClick={() => navigate(-1)}><ChevronRight style={{ transform: 'scaleX(-1)' }} size={17} /></button>
        <div className="screen-title">{t('l10.readiness')}</div>
      </div></div>
      <div className="screen-content fade-in">
        <Card>
          <div style={{ textAlign: 'center' }}>
            <Ring value={(doneCount / reqs.length) * 100} size={110} stroke={11} color={ready ? 'var(--success)' : 'var(--accent)'} label={`${doneCount}/${reqs.length}`} />
            <div style={{ fontSize: 14.5, fontWeight: 800, marginTop: 10 }}>{ready ? t('l10.finalReady') : t('l10.notReady')}</div>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 4 }}>{t('l10.readinessSub')}</div>
          </div>
        </Card>
        <Card pad={false}>
          {reqs.map((r, i) => (
            <div key={i} className="list-item" style={{ cursor: 'default' }}>
              <div className={`list-icon ${r.ok ? 'green' : 'amber'}`}>{r.ok ? <CheckCircle2 /> : <Lock />}</div>
              <div className="list-main"><div className="list-title" style={{ whiteSpace: 'normal' }}>{L(r.label)}</div></div>
              <Tag color={r.ok ? 'green' : 'amber'}>{r.ok ? '✓' : '—'}</Tag>
            </div>
          ))}
        </Card>
        <Btn className="btn-block" variant="btn-primary" onClick={() => navigate('/quiz/final')}><FileText size={16} /> {t('as.finalExam')}</Btn>
        <div style={{ height: 8 }} />
        <Btn className="btn-block" variant="btn-outline" onClick={() => window.print()}><Download size={15} /> {t('l10.export')}</Btn>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, textAlign: 'center' }}>{t('pf.printHint')}</div>
      </div>
    </div>
  );
}
