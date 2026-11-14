import React, { useMemo, useState } from 'react';
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { usePrefs, playSound } from '../state/PrefsContext.jsx';
import { Btn, Progress, Ring } from './ui.jsx';

export function normalizeText(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.。؟?!]+$/g, '')
    .trim();
}

export function isAnswerCorrect(q, given) {
  if (given === null || given === undefined) return false;
  if (q.type === 'num') {
    const g = parseFloat(String(given).replace(/,/g, ''));
    if (Number.isNaN(g)) return false;
    const tol = q.tolerance !== undefined ? q.tolerance : 0.01;
    return Math.abs(g - q.answer) <= Math.max(tol, Math.abs(q.answer) * 1e-9);
  }
  if (q.type === 'mcq' || q.type === 'tf' || q.type === 'error' || q.type === 'scenario') {
    return Number(given) === Number(q.answer);
  }
  // fill / formula
  const g = normalizeText(given);
  const accepts = (q.accept || [String(q.answer)]).map(normalizeText);
  return accepts.includes(g);
}

function displayAnswer(q, t) {
  if (q.type === 'num') return String(q.answer);
  if (q.type === 'mcq' || q.type === 'tf' || q.type === 'error' || q.type === 'scenario') {
    const opt = q.options && q.options[q.answer];
    return opt ? (t.L(opt)) : '';
  }
  return (q.accept && q.accept[0]) || String(q.answer ?? '');
}

// Reusable assessment runner. kind: 'lesson' | 'module' | 'exam' | 'final'
export default function QuizEngine({ title, questions, kind = 'module', compact = false, onFinish, onExit }) {
  const { t, L, sound } = usePrefs();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [finished, setFinished] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  const q = questions[idx];
  const total = questions.length;
  const score = useMemo(() => answers.reduce((acc, a, i) => acc + (a !== null && isAnswerCorrect(questions[i], a) ? 1 : 0), 0), [answers, questions]);
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

  const record = (value) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  const submit = () => {
    const value = q.type === 'fill' || q.type === 'formula' || q.type === 'num' ? textInput : null;
    record(value);
    const ok = isAnswerCorrect(q, value);
    playSound(ok ? 'ok' : 'bad', sound);
    setSubmitted(true);
  };

  const submitChoice = (i) => {
    if (submitted) return;
    record(i);
    const ok = isAnswerCorrect(q, i);
    playSound(ok ? 'ok' : 'bad', sound);
    setSubmitted(true);
  };

  const next = () => {
    setSubmitted(false);
    setTextInput('');
    if (idx + 1 < total) {
      setIdx(idx + 1);
    } else {
      setFinished(true);
    }
  };

  const finishAndReport = () => {
    const finalPct = Math.round((score / total) * 100);
    if (onFinish) onFinish(score, total, finalPct);
    if (!onFinish) setFinished(true);
  };

  // ----- result screen -----
  if (finished) {
    return (
      <div className="fade-in">
        <Card>
          <div className="quiz-score-hero">
            <Ring value={pct} size={110} stroke={11} label={`${pct}%`} color={passed ? 'var(--success)' : 'var(--danger)'} />
            <div style={{ fontSize: 16, fontWeight: 800, marginTop: 10 }}>
              {passed ? t('q.passed') : t('q.failed')}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--text-2)', marginTop: 4 }}>
              {t('c.score')}: {score} / {total} · {t('q.passing')}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Btn className="btn-block" variant="btn-outline" onClick={() => { setIdx(0); setAnswers([]); setSubmitted(false); setFinished(false); setTextInput(''); }}>
              <RotateCcw size={15} /> {t('q.retake')}
            </Btn>
            <Btn className="btn-block" variant="btn-accent" onClick={() => setReviewMode(!reviewMode)}>
              {t('q.reviewAnswers')}
            </Btn>
          </div>
        </Card>
        {reviewMode && (
          <Card>
            <div className="card-title">{t('q.reviewAnswers')}</div>
            {questions.map((qq, i) => {
              const given = answers[i];
              const ok = given !== null && given !== undefined && isAnswerCorrect(qq, given);
              return (
                <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    {ok ? <CheckCircle2 size={16} color="var(--success)" /> : <XCircle size={16} color="var(--danger)" />}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{t.L(qq.q)}</div>
                      {!ok && (
                        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>
                          {t('q.correctAnswer', { a: displayAnswer(qq, t) })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Card>
        )}
        {onExit && (
          <Btn className="btn-block" variant="btn-outline" onClick={onExit}>
            {t('c.back')}
          </Btn>
        )}
      </div>
    );
  }

  // ----- question screen -----
  const typeKey = `q.types.${q.type === 'error' || q.type === 'scenario' ? (q.type === 'error' ? 'error' : 'scenario') : q.type}`;
  const given = answers[idx];
  const correct = given !== null && given !== undefined && isAnswerCorrect(q, given);

  return (
    <div className="fade-in">
      {!compact && (
        <div className="quiz-progress-row">
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>
            {t('q.question', { n: idx + 1, m: total })}
          </span>
          <div style={{ flex: 1 }}>
            <Progress value={((idx + (submitted ? 1 : 0)) / total) * 100} thin />
          </div>
          <span className="tag">{t(typeKey)}</span>
        </div>
      )}
      <Card>
        <div className="quiz-q-card">{L(q.q)}</div>

        {/* MCQ-like */}
        {(q.type === 'mcq' || q.type === 'tf' || q.type === 'error' || q.type === 'scenario') && (
          <div>
            {q.options.map((opt, i) => {
              let cls = 'option';
              if (submitted) {
                if (i === Number(q.answer)) cls += ' correct';
                else if (i === Number(given)) cls += ' wrong';
              } else if (given === i) cls += ' selected';
              return (
                <button key={i} className={cls} disabled={submitted} onClick={() => submitChoice(i)}>
                  <span className="opt-key">{String.fromCharCode(65 + i)}</span>
                  <span style={{ flex: 1 }}>{L(opt)}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Text input types */}
        {(q.type === 'fill' || q.type === 'formula' || q.type === 'num') && (
          <div>
            <input
              className="fill-input"
              style={{ direction: 'ltr', textAlign: 'start', fontFamily: q.type === 'formula' ? 'ui-monospace, monospace' : undefined }}
              placeholder={t('q.typeAnswer')}
              value={textInput}
              disabled={submitted}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !submitted && textInput.trim()) submit(); }}
            />
            {!submitted && (
              <Btn className="btn-block" style={{ marginTop: 10 }} variant="btn-primary" disabled={!textInput.trim()} onClick={submit}>
                {t('c.check')}
              </Btn>
            )}
          </div>
        )}

        {submitted && (
          <div className={`feedback ${correct ? '' : 'bad'}`}>
            <b>{correct ? '✓ ' + t('c.correct') : '✗ ' + t('c.incorrect')}</b>
            <div>{L(q.explain)}</div>
            {q.mistake && (
              <div style={{ marginTop: 6 }}>
                <b style={{ display: 'block', marginTop: 4 }}>{t('q.mistake')}:</b>
                <div>{L(q.mistake)}</div>
              </div>
            )}
            {q.similar && (
              <div style={{ marginTop: 6 }}>
                <b style={{ display: 'block', marginTop: 4 }}>{t('q.similar')}:</b>
                <div>{L(q.similar)}</div>
              </div>
            )}
          </div>
        )}
      </Card>

      {submitted && (
        <Btn className="btn-block btn-lg" variant="btn-primary" onClick={next}>
          {idx + 1 < total ? (
            <>
              {t('q.next')} {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </>
          ) : (
            t('q.finish')
          )}
        </Btn>
      )}
    </div>
  );
}
