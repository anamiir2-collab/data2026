import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Shuffle, Table2, Database, Eraser, Play, Download, Undo2, CheckCircle2, ArrowDown } from 'lucide-react';
import { usePrefs, showToast } from '../state/PrefsContext.jsx';
import { useProgress } from '../state/ProgressContext.jsx';
import { Card, SectionTitle, Btn, Tabs, Tag, Empty } from '../components/ui.jsx';

// ================= HUB =================
export function LabsHub() {
  const { t, lang } = usePrefs();
  const navigate = useNavigate();
  const labs = [
    { to: '/labs/conversion', icon: Shuffle, title: t('labs.conversion'), desc: t('labs.conversionDesc'), color: '' },
    { to: '/labs/excel', icon: Table2, title: t('labs.excel'), desc: t('labs.excelDesc'), color: 'green' },
    { to: '/labs/sql', icon: Database, title: t('labs.sql'), desc: t('labs.sqlDesc'), color: 'violet' },
    { to: '/labs/cleaning', icon: Eraser, title: t('labs.cleaning'), desc: t('labs.cleaningDesc'), color: 'amber' },
  ];
  const wf = ['cv.wf.raw', 'cv.wf.clean', 'cv.wf.structured', 'cv.wf.numeric', 'cv.wf.analysis', 'cv.wf.insights'];
  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('labs.title')}</div><div className="header-count">{t('labs.sub')}</div></div>
      </div></div>
      <div className="screen-content fade-in">
        <div className="lab-grid">
          {labs.map((lb) => (
            <Card key={lb.to} className="lab-card tap-card" onClick={() => navigate(lb.to)}>
              <div className={`list-icon ${lb.color}`}><lb.icon /></div>
              <div style={{ fontWeight: 800, fontSize: 13 }}>{lb.title}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, lineHeight: 1.5 }}>{lb.desc}</div>
            </Card>
          ))}
        </div>
        <SectionTitle>{t('cv.wf.title')}</SectionTitle>
        <Card>
          <div className="workflow">
            {wf.map((k, i) => (
              <React.Fragment key={k}>
                <div className={`workflow-step ${i === 0 ? 'active' : ''}`}>{t(k)}</div>
                {i < wf.length - 1 && <div className="workflow-arrow"><ArrowDown size={14} /></div>}
              </React.Fragment>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ================= CONVERSION LAB =================
function stepsOut(lines) { return lines.join('\n'); }

export function ConversionLab() {
  const { t, lang } = usePrefs();
  const p = useProgress();
  const [tab, setTab] = useState('extract');
  const [input, setInput] = useState('');
  const [out, setOut] = useState('');
  const [steps, setSteps] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const run = (fn) => {
    try {
      const r = fn(input);
      setOut(r.out);
      setSteps(r.steps || '');
      p.bumpLabStat('conversions');
    } catch (e) {
      setOut(lang === 'ar' ? 'خطأ: ' + e.message : 'Error: ' + e.message);
      setSteps('');
    }
  };

  const extractNumbers = (txt) => {
    const nums = (txt.match(/-?\d[\d,]*(?:\.\d+)?/g) || []).map((x) => parseFloat(x.replace(/,/g, '')));
    return { out: nums.join('\n') || '—', steps: `${lang === 'ar' ? 'تم العثور على' : 'Found'} ${nums.length} ${lang === 'ar' ? 'رقماً في النص' : 'numbers in the text'}` };
  };
  const extractCodes = (txt) => {
    const codes = txt.match(/\b[A-Z]{2,}[-_]?\d+(?:[-_]\d+)*\b/g) || [];
    return { out: codes.join('\n') || '—', steps: `${codes.length} ${lang === 'ar' ? 'كوداً بنمط ABC-123' : 'codes matching ABC-123 pattern'}` };
  };
  const splitTextNum = (txt) => {
    const rows = txt.split('\n').filter(Boolean).map((l) => {
      const nums = l.match(/-?\d[\d,]*(?:\.\d+)?/g) || [];
      const text = l.replace(/-?\d[\d,]*(?:\.\d+)?/g, '').replace(/[,\s]+$/, '').trim();
      return `${text} | ${nums.join(', ')}`;
    });
    return { out: rows.join('\n'), steps: lang === 'ar' ? 'فصلنا النص عن الأرقام في كل سطر (النص | الأرقام)' : 'Separated text and numbers per line (text | numbers)' };
  };
  const textToNum = (txt) => {
    const vals = txt.split('\n').filter(Boolean).map((l) => {
      const cleaned = l.replace(/[^\d.,-]/g, '').replace(/,(?=\d{3}\b)/g, '');
      const n = parseFloat(cleaned);
      return `${l.trim()} → ${Number.isNaN(n) ? 'NaN' : n}`;
    });
    return { out: vals.join('\n'), steps: lang === 'ar' ? 'أزلنا الرموز (العملة/المسافات) ثم حوّلنا لرقم' : 'Stripped currency/spaces then parsed to number' };
  };
  const dates = (txt) => {
    const rows = txt.split('\n').filter(Boolean).map((l) => {
      const s = l.trim();
      let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      if (m) return `${s} → ${m[1]}-${String(m[2]).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`;
      m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
      if (m) return `${s} → ${m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')} (MM/DD/YYYY)`;
      m = s.match(/^(\d{1,2})\s+[A-Za-z]{3,}\s+(\d{4})$/);
      if (m) { const d = new Date(s); if (!isNaN(d)) return `${s} → ${d.toISOString().slice(0, 10)}`; }
      return `${s} → ?`;
    });
    return { out: rows.join('\n'), steps: lang === 'ar' ? 'حوّلنا كل صيغة إلى ISO (YYYY-MM-DD)' : 'Converted every format to ISO (YYYY-MM-DD)' };
  };
  const calc = (kind) => {
    const a = parseFloat(num1), b = parseFloat(num2);
    if (Number.isNaN(a) || Number.isNaN(b)) { setOut(lang === 'ar' ? 'أدخل رقماً صحيحاً' : 'Enter valid numbers'); setSteps(''); return; }
    let r, st;
    if (kind === 'percent') { r = (a / b) * 100; st = [`(${a} ÷ ${b}) × 100 = ${r.toFixed(2)}%`]; }
    else if (kind === 'avg') { r = (a + b) / 2; st = [`(${a} + ${b}) ÷ 2 = ${r}`]; }
    else if (kind === 'total') { r = a + b; st = [`${a} + ${b} = ${r}`]; }
    else if (kind === 'growth') { r = ((b - a) / a) * 100; st = [`(${b} − ${a}) ÷ ${a} × 100 = ${r.toFixed(2)}%`]; }
    else if (kind === 'ratio') { r = a / b; st = [`${a} ÷ ${b} = ${r.toFixed(3)}`]; }
    else if (kind === 'margin') { r = ((a - b) / a) * 100; st = [`((${a} − ${b}) ÷ ${a}) × 100 = ${r.toFixed(2)}% ${lang === 'ar' ? 'هامش ربح' : 'profit margin'}`]; }
    setOut(String(Number(r.toFixed(3))));
    setSteps(stepsOut(st.map((s) => `${lang === 'ar' ? 'خطوة' : 'Step'}: ${s}`)));
    p.bumpLabStat('conversions');
  };

  const samples = {
    extract: 'Invoice INV-2025-0042 total was 14,800 SAR and invoice INV-2025-0043 was 9,250 SAR on 12/03/2025',
    dates: '2025-03-14\n3/5/2025\n14 Mar 2025',
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('labs.conversion')}</div><div className="header-count">{t('labs.conversionDesc')}</div></div>
      </div></div>
      <div className="screen-content fade-in">
        <Tabs active={tab} onChange={setTab} tabs={[
          { id: 'extract', label: t('cv.tab.extract') },
          { id: 'calc', label: t('cv.tab.calc') },
        ]} />
        {tab === 'extract' && (
          <>
            <Card>
              <div className="label">{t('cv.input')}</div>
              <textarea className="textarea mono" value={input} onChange={(e) => setInput(e.target.value)} placeholder={samples.extract} />
              <div style={{ display: 'flex', gap: 8, marginTop: 9, flexWrap: 'wrap' }}>
                <Btn size="btn-sm" onClick={() => setInput(samples.extract)}>{t('c.load')}</Btn>
                <Btn size="btn-sm" variant="btn-outline" onClick={() => setInput('')}>{t('c.clear')}</Btn>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
                <Btn size="btn-sm" onClick={() => run(extractNumbers)}>{t('cv.t.extractNum')}</Btn>
                <Btn size="btn-sm" onClick={() => run(extractCodes)}>{t('cv.t.extractCodes')}</Btn>
                <Btn size="btn-sm" onClick={() => run(splitTextNum)}>{t('cv.t.splitTextNum')}</Btn>
                <Btn size="btn-sm" onClick={() => run(textToNum)}>{t('cv.t.textToNum')}</Btn>
                <Btn size="btn-sm" style={{ gridColumn: '1/-1' }} onClick={() => run(dates)}>{t('cv.t.dates')}</Btn>
              </div>
            </Card>
            <ResultBox t={t} out={out} steps={steps} />
          </>
        )}
        {tab === 'calc' && (
          <Card>
            <div style={{ display: 'flex', gap: 8 }}>
              <input className="input" style={{ direction: 'ltr' }} type="number" placeholder="A" value={num1} onChange={(e) => setNum1(e.target.value)} />
              <input className="input" style={{ direction: 'ltr' }} type="number" placeholder="B" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
              <Btn size="btn-sm" onClick={() => calc('percent')}>{t('cv.t.percent')} A÷B</Btn>
              <Btn size="btn-sm" onClick={() => calc('avg')}>{t('cv.t.avg')}</Btn>
              <Btn size="btn-sm" onClick={() => calc('total')}>{t('cv.t.total')}</Btn>
              <Btn size="btn-sm" onClick={() => calc('growth')}>{t('cv.t.growth')} A→B</Btn>
              <Btn size="btn-sm" onClick={() => calc('ratio')}>{t('cv.t.ratio')} A÷B</Btn>
              <Btn size="btn-sm" onClick={() => calc('margin')}>{t('cv.t.margin')} (A−B)</Btn>
            </div>
            <div style={{ marginTop: 10 }}><ResultBox t={t} out={out} steps={steps} /></div>
          </Card>
        )}
      </div>
    </div>
  );
}

function ResultBox({ t, out, steps }) {
  return (
    <>
      {out && (
        <Card>
          <div className="label">{t('cv.result')}</div>
          <div className="result-box mono">{out}</div>
          <div style={{ marginTop: 8 }}>
            <Btn size="btn-sm" variant="btn-outline" onClick={() => { navigator.clipboard && navigator.clipboard.writeText(out); showToast(t('c.copied')); }}>{t('c.copy')}</Btn>
          </div>
        </Card>
      )}
      {steps && (
        <Card>
          <div className="label">{t('cv.steps')}</div>
          <div className="result-box" style={{ whiteSpace: 'pre-wrap' }}>{steps}</div>
        </Card>
      )}
    </>
  );
}

// ================= EXCEL LAB =================
const GRID_ROWS = 12, GRID_COLS = 6;
const SAMPLE = {
  A1: 'OrderID', B1: 'Product', C1: 'Units', D1: 'Price', E1: 'Total',
  A2: 1001, B2: 'Keyboard', C2: 2, D2: 200, E2: '=C2*D2',
  A3: 1002, B3: 'Monitor', C3: 1, D3: 850, E3: '=C3*D3',
  A4: 1004, B4: 'Keyboard', C4: 1, D4: 300, E4: '=C4*D4',
  A5: 1005, B5: 'Laptop', C5: 1, D5: 1800, E5: '=C5*D5',
  A6: 1006, B6: 'Mouse', C6: 4, D6: 25, E6: '=C6*D6',
  A7: 1007, B7: 'Monitor', C7: 1, D7: 450, E7: '=C7*D7',
  A8: 1008, B8: 'USB Hub', C8: 3, D8: 50, E8: '=C8*D8',
};

// Minimal formula engine (subset of Excel used in the curriculum)
export function evalFormula(raw, getCell) {
  function tokenize(s) {
    const toks = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (/[0-9.]/.test(c)) { let n = ''; while (i < s.length && /[0-9.]/.test(s[i])) n += s[i++]; toks.push({ t: 'num', v: parseFloat(n) }); continue; }
      if (c === '"') { let str = ''; i++; while (i < s.length && s[i] !== '"') str += s[i++]; i++; toks.push({ t: 'str', v: str }); continue; }
      if (/[A-Za-z_]/.test(c)) {
        let id = '';
        while (i < s.length && /[A-Za-z0-9_.:]/.test(s[i])) id += s[i++];
        toks.push({ t: 'id', v: id }); continue;
      }
      if ('<>'.includes(c) && s[i + 1] === '=') { toks.push({ t: 'op', v: c + '=' }); i += 2; continue; }
      if ('+-*/^&(),<>=!%'.includes(c)) { toks.push({ t: 'op', v: c }); i++; continue; }
      throw new Error('Unexpected char: ' + c);
    }
    return toks;
  }
  let toks, pos = 0;
  const peek = () => toks[pos];
  const next = () => toks[pos++];
  function parseExpr() { return parseCmp(); }
  function parseCmp() {
    let left = parseConcat();
    while (peek() && peek().t === 'op' && ['=', '<>', '<', '>', '<=', '>='].includes(peek().v)) { const op = next().v; const right = parseConcat(); left = cmp(left, right, op); }
    return left;
  }
  function parseConcat() { let l = parseAdd(); while (peek() && peek().v === '&') { next(); l = String(toScalar(l)) + String(toScalar(parseAdd())); } return l; }
  function parseAdd() { let l = parseMul(); while (peek() && peek().t === 'op' && ['+', '-'].includes(peek().v)) { const op = next().v; const r = parseMul(); l = op === '+' ? toNum(l) + toNum(r) : toNum(l) - toNum(r); } return l; }
  function parseMul() { let l = parsePow(); while (peek() && peek().t === 'op' && ['*', '/'].includes(peek().v)) { const op = next().v; const r = parsePow(); if (op === '*') l = toNum(l) * toNum(r); else { const d = toNum(r); if (d === 0) throw new Error('#DIV/0!'); l = toNum(l) / d; } } return l; }
  function parsePow() { let l = parseUnary(); while (peek() && peek().v === '^') { next(); l = Math.pow(toNum(l), toNum(parseUnary())); } return l; }
  function parseUnary() { if (peek() && peek().v === '-') { next(); return -toNum(parseUnary()); } if (peek() && peek().v === '+') { next(); return parseUnary(); } return parsePostfix(); }
  function parsePostfix() { let v = parseAtom(); while (peek() && peek().v === '%') { next(); v = toNum(v) / 100; } return v; }
  function parseAtom() {
    const tk = next();
    if (!tk) throw new Error('#VALUE!');
    if (tk.t === 'num') return tk.v;
    if (tk.t === 'str') return tk.v;
    if (tk.v === '(') { const v = parseExpr(); if (peek() && peek().v === ')') next(); return v; }
    if (/^(TRUE|FALSE)$/i.test(tk.v)) return tk.v.toUpperCase() === 'TRUE';
    if (/^[A-Za-z]+\d+$/.test(tk.v)) return getCell(tk.v);
    if (/^[A-Za-z]+\d+:[A-Za-z]+\d+$/.test(tk.v)) return rangeValues(tk.v, getCell);
    if (peek() && peek().v === '(') {
      next();
      const args = [];
      if (peek() && peek().v !== ')') { args.push(parseExpr()); while (peek() && peek().v === ',') { next(); args.push(parseExpr()); } }
      if (peek() && peek().v === ')') next();
      return callFn(tk.v.toUpperCase(), args);
    }
    throw new Error('#NAME? ' + tk.v);
  }
  function cmp(a, b, op) {
    const x = toScalar(a), y = toScalar(b);
    const nx = typeof x === 'number' ? x : parseFloat(x), ny = typeof y === 'number' ? y : parseFloat(y);
    const numeric = !Number.isNaN(nx) && !Number.isNaN(ny) && x !== '' && y !== '';
    const A = numeric ? nx : String(x).toLowerCase(), B = numeric ? ny : String(y).toLowerCase();
    switch (op) { case '=': return A === B; case '<>': return A !== B; case '<': return A < B; case '>': return A > B; case '<=': return A <= B; case '>=': return A >= B; default: throw new Error('#VALUE!'); }
  }
  function toScalar(v) { return Array.isArray(v) ? (v.length && v[0].length ? v[0][0] : v[0]) : v; }
  function toNum(v) { const x = toScalar(v); if (typeof x === 'number') return x; if (typeof x === 'boolean') return x ? 1 : 0; const n = parseFloat(String(x).replace(/,/g, '')); if (Number.isNaN(n)) throw new Error('#VALUE!'); return n; }
  function flat(v) { return Array.isArray(v) ? v.flat() : [v]; }
  function rangeValues(ref, getCell) {
    const [a, b] = ref.split(':');
    const c1 = a.match(/[A-Z]+/i)[0].toUpperCase(), r1 = parseInt(a.match(/\d+/)[0]);
    const c2 = b.match(/[A-Z]+/i)[0].toUpperCase(), r2 = parseInt(b.match(/\d+/)[0]);
    const colIdx = (c) => c.split('').reduce((acc, ch) => acc * 26 + (ch.charCodeAt(0) - 64), 0);
    const out = [];
    for (let r = Math.min(r1, r2); r <= Math.max(r1, r2); r++) {
      const row = [];
      for (let ci = Math.min(colIdx(c1), colIdx(c2)); ci <= Math.max(colIdx(c1), colIdx(c2)); ci++) {
        let col = ''; let x = ci; while (x > 0) { col = String.fromCharCode(65 + ((x - 1) % 26)) + col; x = Math.floor((x - 1) / 26); }
        row.push(getCell(col + r));
      }
      out.push(row);
    }
    return out;
  }
  function matchCriteria(val, crit) {
    const c = String(crit);
    const m = c.match(/^(>=|<=|<>|>|<|=)(.*)$/);
    if (m) { const op = m[1], target = m[2].trim(); const nv = parseFloat(val), nt = parseFloat(target); const a = !Number.isNaN(nv) && !Number.isNaN(nt) && target !== '' ? nv : String(val ?? '').toLowerCase(); const b = !Number.isNaN(nt) && target !== '' ? nt : target.toLowerCase(); switch (op) { case '>': return a > b; case '<': return a < b; case '>=': return a >= b; case '<=': return a <= b; case '<>': return a != b; case '=': return a == b; } }
    if (c.includes('*') || c.includes('?')) { const rx = new RegExp('^' + c.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i'); return rx.test(String(val ?? '')); }
    return String(val ?? '').toLowerCase() === c.toLowerCase();
  }
  function callFn(name, args) {
    const f = flat;
    switch (name) {
      case 'SUM': return f(args).reduce((a, x) => a + toNumOrZero(x), 0);
      case 'AVERAGE': { const xs = f(args).filter((x) => x !== '' && x !== null && typeof toNumSafe(x) === 'number'); if (!xs.length) throw new Error('#DIV/0!'); return xs.reduce((a, x) => a + toNum(x), 0) / xs.length; }
      case 'MIN': { const xs = f(args).filter((x) => typeof toNumSafe(x) === 'number'); return xs.length ? Math.min(...xs.map(toNum)) : 0; }
      case 'MAX': { const xs = f(args).filter((x) => typeof toNumSafe(x) === 'number'); return xs.length ? Math.max(...xs.map(toNum)) : 0; }
      case 'COUNT': return f(args).filter((x) => typeof toNumSafe(x) === 'number').length;
      case 'COUNTA': return f(args).filter((x) => x !== '' && x !== null && x !== undefined).length;
      case 'PRODUCT': return f(args).reduce((a, x) => a * toNum(x), 1);
      case 'ROUND': { const d = args.length > 1 ? toNum(args[1]) : 0; const m = Math.pow(10, d); return Math.round(toNum(args[0]) * m + Number.EPSILON) / m; }
      case 'IF': return toBool(args[0]) ? toScalar(args[1]) : toScalar(args[2]);
      case 'IFS': { for (let i = 0; i + 1 < args.length; i += 2) { if (toBool(args[i])) return toScalar(args[i + 1]); } throw new Error('#N/A'); }
      case 'AND': return f(args).every(toBool);
      case 'OR': return f(args).some(toBool);
      case 'IFERROR': { try { return toScalar(evalArg(args[0])); } catch (e) { return toScalar(args[1]); } }
      case 'COUNTIF': { const range = f(args[0]).filter((x) => x !== '' && x !== null); return range.filter((x) => matchCriteria(x, toScalar(args[1]))).length; }
      case 'COUNTIFS': { let rows = f(args[0]).map((x, i) => i); for (let i = 0; i + 1 < args.length; i += 2) { const arr = f(args[i]); rows = rows.filter((ri) => matchCriteria(arr[ri], toScalar(args[i + 1]))); } return rows.length; }
      case 'SUMIF': { const cond = f(args[0]), crit = toScalar(args[1]); const sums = args.length > 2 ? f(args[2]) : cond; return cond.reduce((a, x, i) => (matchCriteria(x, crit) ? a + toNumOrZero(sums[i]) : a), 0); }
      case 'SUMIFS': { const sums = f(args[0]); let rows = sums.map((x, i) => i); for (let i = 1; i + 1 < args.length; i += 2) { const arr = f(args[i]); rows = rows.filter((ri) => matchCriteria(arr[ri], toScalar(args[i + 1]))); } return rows.reduce((a, ri) => a + toNumOrZero(sums[ri]), 0); }
      case 'AVERAGEIF': { const cond = f(args[0]), crit = toScalar(args[1]); const vals = args.length > 2 ? f(args[2]) : cond; const picked = cond.map((x, i) => (matchCriteria(x, crit) ? vals[i] : null)).filter((x) => x !== null && typeof toNumSafe(x) === 'number'); if (!picked.length) throw new Error('#DIV/0!'); return picked.reduce((a, x) => a + toNum(x), 0) / picked.length; }
      case 'AVERAGEIFS': { const vals = f(args[0]); let rows = vals.map((x, i) => i); for (let i = 1; i + 1 < args.length; i += 2) { const arr = f(args[i]); rows = rows.filter((ri) => matchCriteria(arr[ri], toScalar(args[i + 1]))); } const picked = rows.map((ri) => vals[ri]).filter((x) => typeof toNumSafe(x) === 'number'); if (!picked.length) throw new Error('#DIV/0!'); return picked.reduce((a, x) => a + toNum(x), 0) / picked.length; }
      case 'VLOOKUP': { const key = toScalar(args[0]), table = args[1], col = toNum(args[2]), exact = args[3] === undefined ? true : !toBool(args[3]); const rows = table; for (const row of rows) { const hit = exact ? String(row[0]).toLowerCase() === String(key).toLowerCase() : true; if (hit) { const v = row[col - 1]; if (v === undefined) throw new Error('#REF!'); return v; } } throw new Error('#N/A'); }
      case 'INDEX': { const arr = args[0]; const r = toNum(args[1]); if (Array.isArray(arr[0])) { if (args.length > 2) { const c = toNum(args[2]); return arr[r - 1][c - 1]; } return Array.isArray(arr[r - 1]) ? arr[r - 1][0] : arr[r - 1]; } return arr[r - 1]; }
      case 'MATCH': { const key = toScalar(args[0]); const arr = f(args[1]); for (let i = 0; i < arr.length; i++) { if (String(arr[i]).toLowerCase() === String(key).toLowerCase()) return i + 1; } throw new Error('#N/A'); }
      case 'LEFT': return String(toScalar(args[0])).slice(0, args.length > 1 ? toNum(args[1]) : 1);
      case 'RIGHT': { const s = String(toScalar(args[0])); const n = args.length > 1 ? toNum(args[1]) : 1; return s.slice(Math.max(0, s.length - n)); }
      case 'MID': { const s = String(toScalar(args[0])); return s.substr(toNum(args[1]) - 1, toNum(args[2])); }
      case 'LEN': return String(toScalar(args[0])).length;
      case 'TRIM': return String(toScalar(args[0])).trim().replace(/\s+/g, ' ');
      case 'CLEAN': return String(toScalar(args[0])).replace(/[\x00-\x1F]/g, '');
      case 'CONCAT': case 'CONCATENATE': return f(args).map((x) => String(toScalar(x))).join('');
      case 'TEXTJOIN': { const d = String(toScalar(args[0])); const skip = toBool(args[1]); return f(args.slice(2)).map((x) => String(toScalar(x))).filter((x) => !skip || x !== '').join(d); }
      case 'SUBSTITUTE': return String(toScalar(args[0])).split(String(toScalar(args[1]))).join(String(toScalar(args[2])));
      case 'UPPER': return String(toScalar(args[0])).toUpperCase();
      case 'LOWER': return String(toScalar(args[0])).toLowerCase();
      case 'PROPER': return String(toScalar(args[0])).replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
      case 'TODAY': { const d = new Date(); return serial(d); }
      case 'NOW': { const d = new Date(); return serial(d); }
      case 'YEAR': return parseDate(toScalar(args[0])).getFullYear();
      case 'MONTH': return parseDate(toScalar(args[0])).getMonth() + 1;
      case 'DAY': return parseDate(toScalar(args[0])).getDate();
      case 'DATE': { const d = new Date(toNum(args[0]), toNum(args[1]) - 1, toNum(args[2])); return serial(d); }
      case 'DATEDIF': { const a = parseDate(toScalar(args[0])), b = parseDate(toScalar(args[1])); const u = String(toScalar(args[2])).toUpperCase(); if (u === 'D') return Math.floor((b - a) / 86400000); if (u === 'Y') { let y = b.getFullYear() - a.getFullYear(); if (b < new Date(b.getFullYear(), a.getMonth(), a.getDate())) y--; return y; } if (u === 'M') return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()); throw new Error('#VALUE!'); }
      case 'EOMONTH': { const d = parseDate(toScalar(args[0])); const m = toNum(args[1]); return serial(new Date(d.getFullYear(), d.getMonth() + m + 1, 0)); }
      default: throw new Error('#NAME? ' + name);
    }
  }
  function evalArg(a) { return a; }
  function toBool(v) { if (typeof v === 'boolean') return v; if (typeof v === 'number') return v !== 0; const s = String(toScalar(v)).toUpperCase(); if (s === 'TRUE') return true; if (s === 'FALSE') return false; const n = parseFloat(s); if (!Number.isNaN(n)) return n !== 0; return Boolean(s); }
  function toNumOrZero(x) { const n = toNumSafe(x); return typeof n === 'number' ? n : 0; }
  function toNumSafe(x) { if (typeof x === 'number') return x; if (x === '' || x === null || x === undefined) return null; const n = parseFloat(String(x).replace(/,/g, '')); return Number.isNaN(n) ? null : n; }
  function parseDate(v) { if (typeof v === 'number') return new Date(Math.round((v - 25569) * 86400000)); const d = new Date(v); if (isNaN(d)) throw new Error('#VALUE!'); return d; }
  function serial(d) { return Math.floor((d.getTime() / 86400000)) + 25569; }

  const s = String(raw);
  const body = s.startsWith('=') ? s.slice(1) : s;
  toks = tokenize(body);
  const v = parseExpr();
  if (pos < toks.length) throw new Error('#VALUE!');
  return typeof v === 'number' ? Math.round(v * 1e9) / 1e9 : v;
}

export function ExcelLab() {
  const { t, lang } = usePrefs();
  const p = useProgress();
  const [tab, setTab] = useState('library');
  const [grid, setGrid] = useState(() => ({ ...SAMPLE }));
  const [sel, setSel] = useState('E2');
  const [editVal, setEditVal] = useState('');
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');
  const [openFn, setOpenFn] = useState(null);
  const [chDone, setChDone] = useState({});

  // gather functions from the curriculum for the library
  const allFns = useMemo(() => {
    const seen = {}; const out = [];
    for (const lv of requireLevels()) for (const m of lv.modules || []) for (const ls of m.lessons) for (const fn of ls.functions || []) { if (!seen[fn.name]) { seen[fn.name] = true; out.push({ ...fn, lesson: ls.id }); } }
    return out;
  }, []);

  const evaluated = useMemo(() => {
    const cache = {};
    const getCell = (ref) => {
      if (cache[ref] !== undefined) return cache[ref];
      const raw = grid[ref];
      if (raw === undefined || raw === '') return '';
      if (typeof raw === 'string' && raw.startsWith('=')) {
        try { const v = evalFormula(raw, getCell); cache[ref] = v; return v; }
        catch (e) { cache[ref] = String(e.message || '#ERROR'); return cache[ref]; }
      }
      cache[ref] = raw;
      return raw;
    };
    const res = {};
    for (let r = 1; r <= GRID_ROWS; r++) for (let c = 0; c < GRID_COLS; c++) {
      const ref = colName(c) + r;
      try { res[ref] = getCell(ref); } catch (e) { res[ref] = '#ERROR'; }
    }
    return res;
  }, [grid]);

  const cats = [
    { id: 'all', label: t('c.all') },
    { id: 'math', label: lang === 'ar' ? 'حساب' : 'Math' },
    { id: 'logic', label: lang === 'ar' ? 'منطق' : 'Logical' },
    { id: 'lookup', label: lang === 'ar' ? 'بحث' : 'Lookup' },
    { id: 'text', label: lang === 'ar' ? 'نصوص' : 'Text' },
    { id: 'date', label: lang === 'ar' ? 'تواريخ' : 'Date' },
  ];
  const catOf = (name) => {
    if (['SUM', 'AVERAGE', 'MIN', 'MAX', 'COUNT', 'COUNTA', 'PRODUCT', 'ROUND', 'COUNTIF', 'COUNTIFS', 'SUMIF', 'SUMIFS', 'AVERAGEIF', 'AVERAGEIFS'].includes(name)) return 'math';
    if (['IF', 'IFS', 'AND', 'OR', 'IFERROR'].includes(name)) return 'logic';
    if (['VLOOKUP', 'XLOOKUP', 'INDEX', 'MATCH'].includes(name)) return 'lookup';
    if (['LEFT', 'RIGHT', 'MID', 'TRIM', 'CLEAN', 'LEN', 'CONCAT', 'TEXTJOIN', 'SUBSTITUTE', 'UPPER', 'LOWER', 'PROPER'].includes(name)) return 'text';
    return 'date';
  };
  const filtered = allFns.filter((f) => (cat === 'all' || catOf(f.name) === cat) && (!search || f.name.toLowerCase().includes(search.toLowerCase())));

  const challenges = [
    { id: 'ch1', cell: 'E10', prompt: { en: 'Compute the TOTAL of the Total column (E2:E9) using SUM.', ar: 'احسب إجمالي عمود Total (E2:E9) باستخدام SUM.' }, need: ['SUM'], expect: 4200 },
    { id: 'ch2', cell: 'F2', prompt: { en: 'Compute the AVERAGE of column E.', ar: 'احسب متوسط عمود E.' }, need: ['AVERAGE'], expect: 525 },
    { id: 'ch3', cell: 'F3', prompt: { en: 'Compute the MAX of column E.', ar: 'احسب أكبر قيمة في عمود E.' }, need: ['MAX'], expect: 1800 },
    { id: 'ch4', cell: 'F4', prompt: { en: 'Count how many orders exceed 500 SAR: use COUNTIF on E2:E9 with ">500".', ar: 'عدّ الطلبات فوق 500 ريال: استخدم COUNTIF على E2:E9 بالمعيار ">500".' }, need: ['COUNTIF'], expect: 3 },
    { id: 'ch5', cell: 'F5', prompt: { en: 'Total Keyboard sales: SUMIF Product column for "Keyboard" summing column E.', ar: 'إجمالي مبيعات Keyboard: استخدم SUMIF على عمود Product بمعيار "Keyboard" والجمع من عمود E.' }, need: ['SUMIF'], expect: 700 },
    { id: 'ch6', cell: 'F6', prompt: { en: 'Use IF in F6: show "HIGH" if E5 (the Laptop row) is >= 1000, otherwise "LOW".', ar: 'استخدم IF في F6: أظهر "HIGH" إذا كانت E5 أكبر أو تساوي 1000 وإلا "LOW".' }, need: ['IF'], expect: 'HIGH' },
  ];

  const checkCh = (ch) => {
    const rawF = String(grid[ch.cell] || '');
    const value = evaluated[ch.cell];
    const okNeed = ch.need.every((n) => rawF.toUpperCase().includes(n.toUpperCase()));
    const okVal = typeof ch.expect === 'number' ? Math.abs(parseFloat(value) - ch.expect) < 0.01 : String(value).toUpperCase() === String(ch.expect).toUpperCase();
    if (okNeed && okVal) {
      setChDone((d) => ({ ...d, [ch.id]: true }));
      p.setExcelChallenge(ch.id);
      showToast(t('xl.chCorrect', { xp: 15 }));
    } else {
      showToast(t('xl.chWrong'), 'error');
    }
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('labs.excel')}</div><div className="header-count">{t('labs.excelDesc')}</div></div>
      </div></div>
      <div className="screen-content fade-in">
        <Tabs active={tab} onChange={setTab} tabs={[{ id: 'library', label: t('xl.tab.library') }, { id: 'sheet', label: t('xl.tab.sheet') }, { id: 'challenges', label: t('xl.tab.challenges') }]} />

        {tab === 'library' && (
          <>
            <input className="input" style={{ marginBottom: 9 }} placeholder={t('xl.searchPh')} value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="chip-row">
              {cats.map((c) => <button key={c.id} className={`chip ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)}>{c.label}</button>)}
            </div>
            {filtered.length === 0 && <Empty icon={Table2} title={t('dc.noResults')} />}
            {filtered.map((f) => (
              <Card key={f.name}>
                <div className="tap-card" onClick={() => setOpenFn(openFn === f.name ? null : f.name)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 800, direction: 'ltr' }}>{f.name}</div>
                    <Tag color="blue">{catOf(f.name)}</Tag>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 3 }}>{f.ar}</div>
                </div>
                {openFn === f.name && (
                  <div style={{ borderTop: '1px solid var(--border)', marginTop: 9, paddingTop: 9, fontSize: 12.8 }}>
                    <div><b>{t('xl.syntax')}:</b> <code style={{ direction: 'ltr', display: 'inline-block', background: 'var(--surface-3)', padding: '2px 7px', borderRadius: 6 }}>{f.syntax}</code></div>
                    {f.args.map((a, i) => <div key={i} style={{ marginInlineStart: 10, color: 'var(--text-2)' }}><span className="kbd">{a.name}</span> — {t.L(a.desc)}</div>)}
                    <div style={{ marginTop: 6 }}><b>{t('xl.example')}:</b> <code style={{ direction: 'ltr', background: 'var(--surface-3)', padding: '2px 7px', borderRadius: 6 }}>{f.example}</code></div>
                    <div><b>{t('xl.result')}:</b> {t.L(f.result)}</div>
                    <div style={{ marginTop: 6 }}><b>{t('xl.mistakes')}:</b>{f.mistakes.map((m, i) => <div key={i} style={{ color: 'var(--text-2)' }}>• {t.L(m)}</div>)}</div>
                  </div>
                )}
              </Card>
            ))}
          </>
        )}

        {tab === 'sheet' && (
          <>
            <Card pad>
              <div className="formula-bar">
                <span className="fx">{sel}</span>
                <input value={editVal} onChange={(e) => setEditVal(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { setGrid((g) => ({ ...g, [sel]: e.target.value })); } }} placeholder="=SUM(E2:E9)" />
              </div>
              <div className="sheet-wrap">
                <table className="sheet">
                  <thead><tr><th className="corner"></th>{Array.from({ length: GRID_COLS }, (_, c) => <th key={c}>{colName(c)}</th>)}</tr></thead>
                  <tbody>
                    {Array.from({ length: GRID_ROWS }, (_, r) => (
                      <tr key={r}>
                        <td className="rowhead">{r + 1}</td>
                        {Array.from({ length: GRID_COLS }, (_, c) => {
                          const ref = colName(c) + (r + 1);
                          const v = evaluated[ref];
                          const isErr = typeof v === 'string' && v.startsWith('#');
                          return (
                            <td key={ref} className={`${sel === ref ? 'sel' : ''} ${isErr ? 'err' : ''} ${typeof v === 'number' ? 'num' : ''}`}
                              onClick={() => { setSel(ref); setEditVal(grid[ref] !== undefined ? String(grid[ref]) : ''); }}>
                              {typeof v === 'number' ? (Math.abs(v) >= 1000 ? v.toLocaleString('en-US') : v) : String(v)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 9 }}>
                <Btn size="btn-sm" onClick={() => setGrid({ ...SAMPLE })}>{t('xl.sample')}</Btn>
                <Btn size="btn-sm" variant="btn-outline" onClick={() => setGrid({})}>{t('c.clear')}</Btn>
              </div>
              <div className="callout tip" style={{ marginTop: 10, fontSize: 12 }}>{t('xl.notesTitle')}: {t('xl.notesBody')}</div>
            </Card>
          </>
        )}

        {tab === 'challenges' && (
          <>
            <Card>
              <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>{t('xl.chTarget')} · {t('xl.chUse')}</div>
            </Card>
            {challenges.map((ch) => (
              <Card key={ch.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t.L(ch.prompt)}</div>
                  {chDone[ch.id] && <CheckCircle2 size={18} color="var(--success)" />}
                </div>
                <div style={{ marginTop: 6, fontSize: 12 }}>
                  <Tag color="blue">{t('xl.chTarget')}: {ch.cell}</Tag>{' '}
                  <Tag>{t('xl.chUse')}: {ch.need.join(', ')}</Tag>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, direction: 'ltr', textAlign: 'start' }}>
                  = formula in {ch.cell} → current: <b>{String(evaluated[ch.cell] ?? '')}</b>
                </div>
                {!chDone[ch.id] && <Btn size="btn-sm" className="btn-block" style={{ marginTop: 9 }} variant="btn-accent" onClick={() => checkCh(ch)}>{t('xl.chCheck')}</Btn>}
              </Card>
            ))}
            <Btn className="btn-block" variant="btn-outline" onClick={() => { setTab('sheet'); }}>{t('xl.tab.sheet')} →</Btn>
          </>
        )}
      </div>
    </div>
  );
}
function colName(i) { let s = ''; let x = i + 1; while (x > 0) { s = String.fromCharCode(65 + ((x - 1) % 26)) + s; x = Math.floor((x - 1) / 26); } return s; }
function requireLevels() { return LEVELS_REF; }
import { LEVELS as LEVELS_REF } from '../curriculum/index.js';

// ================= SQL LAB =================
const DB_SCRIPT = `
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, city TEXT, phone TEXT, joined TEXT);
CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, dept TEXT, salary REAL, hire_date TEXT);
CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, category TEXT, price REAL, stock INTEGER);
CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER, order_date TEXT, status TEXT, total REAL, FOREIGN KEY (customer_id) REFERENCES customers(id));
CREATE TABLE sales (id INTEGER PRIMARY KEY, month TEXT, region TEXT, amount REAL);
CREATE TABLE inventory (id INTEGER PRIMARY KEY, product_id INTEGER, warehouse TEXT, qty INTEGER, FOREIGN KEY (product_id) REFERENCES products(id));
INSERT INTO customers VALUES (1,'Ahmad Ali','Riyadh','0501234567','2024-01-15'),(2,'Sara Hassan','Jeddah','0509887766','2024-02-20'),(3,'Khaled Nasser','Dammam','0555443322','2024-03-05'),(4,'Nora Salem','Riyadh','0561112233','2024-05-11'),(5,'Omar Faisal','Jeddah','0577778899','2024-06-30'),(6,'Laila Mustafa','Makkah','0503332211','2024-08-14');
INSERT INTO employees VALUES (1,'Fahad Al-Otaibi','Sales',8500,'2023-01-10'),(2,'Maha Al-Harbi','Finance',9200,'2023-03-22'),(3,'Yousef Al-Qahtani','Sales',7800,'2023-06-01'),(4,'Hind Al-Anzi','Operations',7000,'2023-09-15'),(5,'Saleh Al-Dosari','Finance',10500,'2022-11-01');
INSERT INTO products VALUES (1,'Keyboard','Accessories',200,45),(2,'Monitor','Displays',850,22),(3,'Mouse','Accessories',50,120),(4,'Laptop','Computers',1800,8),(5,'USB Hub','Accessories',50,60),(6,'Webcam','Accessories',150,30);
INSERT INTO orders VALUES (1,1,'2025-01-10','Paid',1450),(2,2,'2025-01-18','Paid',850),(3,1,'2025-02-05','Pending',2200),(4,3,'2025-02-14','Paid',375),(5,4,'2025-02-20','Paid',1800),(6,2,'2025-03-02','Cancelled',450),(7,5,'2025-03-09','Paid',1250),(8,1,'2025-03-15','Paid',690),(9,6,'2025-03-21','Pending',1850),(10,4,'2025-04-02','Paid',240);
INSERT INTO sales VALUES (1,'2025-01','Riyadh',48200),(2,'2025-01','Jeddah',39750),(3,'2025-01','Dammam',22300),(4,'2025-02','Riyadh',51300),(5,'2025-02','Jeddah',35400),(6,'2025-02','Dammam',19800),(7,'2025-03','Riyadh',46900),(8,'2025-03','Jeddah',41200),(9,'2025-03','Dammam',21600);
INSERT INTO inventory VALUES (1,1,'Riyadh WH',30),(2,2,'Riyadh WH',15),(3,3,'Jeddah WH',80),(4,4,'Riyadh WH',5),(5,5,'Jeddah WH',40),(6,6,'Dammam WH',25);
`;

let sqlPromise = null;
function getSQL() {
  if (!sqlPromise) {
    sqlPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = './sqljs/sql-wasm.js';
      s.onload = () => {
        initSqlJs({ locateFile: (f) => './sqljs/' + f }).then(resolve).catch(reject);
      };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return sqlPromise;
}

const SQL_EXERCISES = [
  { id: 'sq1', level: 'beginner', prompt: { en: 'Show all columns of the customers table.', ar: 'اعرض جميع أعمدة جدول العملاء.' }, solution: 'SELECT * FROM customers;', check: (r) => r && r.length === 1 && r[0].columns.length === 5 },
  { id: 'sq2', level: 'beginner', prompt: { en: 'Show only name and city of customers.', ar: 'اعرض فقط الاسم والمدينة للعملاء.' }, solution: 'SELECT name, city FROM customers;', check: (r) => r && r[0] && r[0].columns.join(',').toLowerCase() === 'name,city' },
  { id: 'sq3', level: 'beginner', prompt: { en: 'Show customers whose city is Riyadh.', ar: 'اعرض العملاء الذين مدينتهم الرياض.' }, solution: 'SELECT * FROM customers WHERE city = \'Riyadh\';', check: (r) => r && r[0] && r[0].values.length === 2 },
  { id: 'sq4', level: 'beginner', prompt: { en: 'Show products with price greater than 100, sorted by price descending.', ar: 'اعرض المنتجات بسعر أكبر من 100 مرتبة تنازلياً بالسعر.' }, solution: 'SELECT * FROM products WHERE price > 100 ORDER BY price DESC;', check: (r) => r && r[0] && r[0].values.length === 3 && r[0].values[0][3] >= r[0].values[1][3] },
  { id: 'sq5', level: 'beginner', prompt: { en: 'Show the first 3 orders with LIMIT.', ar: 'اعرض أول 3 طلبات باستخدام LIMIT.' }, solution: 'SELECT * FROM orders LIMIT 3;', check: (r) => r && r[0] && r[0].values.length === 3 },
  { id: 'sq6', level: 'beginner', prompt: { en: 'Show DISTINCT cities of customers.', ar: 'اعرض المدن المميزة (بدون تكرار) للعملاء.' }, solution: 'SELECT DISTINCT city FROM customers;', check: (r) => r && r[0] && r[0].values.length === 4 },
  { id: 'sq7', level: 'intermediate', prompt: { en: 'Count the total number of orders.', ar: 'احسب العدد الكلي للطلبات.' }, solution: 'SELECT COUNT(*) FROM orders;', check: (r) => r && r[0] && r[0].values[0][0] === 10 },
  { id: 'sq8', level: 'intermediate', prompt: { en: 'Show the SUM of totals for Paid orders.', ar: 'اعرض مجموع إجماليات الطلبات المدفوعة.' }, solution: 'SELECT SUM(total) FROM orders WHERE status = \'Paid\';', check: (r) => r && r[0] && Math.abs(r[0].values[0][0] - 8405) < 0.01 },
  { id: 'sq9', level: 'intermediate', prompt: { en: 'Show total sales per region using GROUP BY.', ar: 'اعرض إجمالي المبيعات لكل منطقة باستخدام GROUP BY.' }, solution: 'SELECT region, SUM(amount) FROM sales GROUP BY region;', check: (r) => r && r[0] && r[0].values.length === 3 },
  { id: 'sq10', level: 'intermediate', prompt: { en: 'Show regions whose total sales exceed 100,000 (HAVING).', ar: 'اعرض المناطق التي يتجاوز إجمالي مبيعاتها 100,000 (باستخدام HAVING).' }, solution: 'SELECT region, SUM(amount) FROM sales GROUP BY region HAVING SUM(amount) > 100000;', check: (r) => r && r[0] && r[0].values.length === 3 },
  { id: 'sq11', level: 'intermediate', prompt: { en: 'Join customers and orders: show order id, customer name, total.', ar: 'اربط العملاء بالطلبات: اعرض رقم الطلب واسم العميل والإجمالي.' }, solution: 'SELECT orders.id, customers.name, orders.total FROM orders INNER JOIN customers ON orders.customer_id = customers.id;', check: (r) => r && r[0] && r[0].columns.length === 3 },
  { id: 'sq12', level: 'intermediate', prompt: { en: 'Use CASE WHEN to label orders: Paid → "Done", otherwise "Open".', ar: 'استخدم CASE WHEN لتصنيف الطلبات: مدفوع ← "Done"، غير ذلك "Open".' }, solution: 'SELECT id, CASE WHEN status = \'Paid\' THEN \'Done\' ELSE \'Open\' END AS label FROM orders;', check: (r) => r && r[0] && r[0].columns.some((c) => String(c).toLowerCase() === 'label') },
];

export function SqlLab() {
  const { t, lang } = usePrefs();
  const p = useProgress();
  const [db, setDb] = useState(null);
  const [err, setErr] = useState('');
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState('SELECT * FROM customers;');
  const [ms, setMs] = useState(0);
  const [openEx, setOpenEx] = useState(null);
  const [schemaTable, setSchemaTable] = useState(null);
  const [schemaData, setSchemaData] = useState(null);

  useEffect(() => {
    getSQL().then((SQL) => {
      const d = new SQL.Database();
      d.run(DB_SCRIPT);
      setDb(d);
    }).catch(() => setErr(lang === 'ar' ? 'تعذر تحميل محرك SQL' : 'Failed to load SQL engine'));
  }, [lang]);

  const run = (text) => {
    if (!db) return;
    const q = text !== undefined ? text : query;
    try {
      const t0 = performance.now();
      const res = db.exec(q);
      setMs(Math.round(performance.now() - t0));
      setResults(res);
      setErr('');
      p.bumpLabStat('sqlOk');
    } catch (e) {
      setErr(String(e.message || e));
      setResults(null);
    }
  };

  const runExercise = (ex, text) => {
    try {
      const res = db.exec(text);
      p.bumpLabStat('sqlOk');
      setResults(res); setErr('');
      if (ex.check(res)) { p.markSqlSolved(ex.id); showToast(lang === 'ar' ? 'محلولة ✓' : 'Solved ✓'); }
      else showToast(lang === 'ar' ? 'الاستعلام يعمل لكن النتيجة غير مطابقة للمطلوب' : 'Query runs but does not match the expected result', 'error');
    } catch (e) { setErr(String(e.message || e)); setResults(null); }
  };

  const tables = ['customers', 'employees', 'products', 'orders', 'sales', 'inventory'];
  const showTable = (name) => {
    setSchemaTable(name);
    const cols = db.exec(`PRAGMA table_info(${name})`)[0].values.map((v) => v[1]);
    const rows = db.exec(`SELECT * FROM ${name} LIMIT 5`)[0];
    setSchemaData({ cols, rows });
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('labs.sql')}</div><div className="header-count">{t('labs.sqlDesc')}</div></div>
      </div></div>
      <div className="screen-content fade-in">
        <SectionTitle>{t('sq.showDb')}</SectionTitle>
        <div className="chip-row">
          {tables.map((tb) => <button key={tb} className={`chip schema-chip ${schemaTable === tb ? 'active' : ''}`} onClick={() => showTable(tb)}>{tb}</button>)}
        </div>
        {schemaData && (
          <Card>
            <div className="card-title">{schemaTable} <span style={{ fontSize: 11, color: 'var(--muted)' }}>({schemaData.cols.length} {t('sq.columns')})</span></div>
            <div className="data-scroll">
              <table className="data-table">
                <thead><tr>{schemaData.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                <tbody>{schemaData.rows && schemaData.rows.values.map((r, i) => <tr key={i}>{r.map((v, j) => <td key={j}>{String(v)}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </Card>
        )}

        <SectionTitle>{t('sq.editor')}</SectionTitle>
        <textarea className="sql-editor" value={query} onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') run(); }} />
        <div style={{ display: 'flex', gap: 8, marginTop: 9, alignItems: 'center' }}>
          <Btn variant="btn-primary" disabled={!db} onClick={() => run()}><Play size={15} /> {t('c.run')}</Btn>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>{t('sq.runHint')}</span>
          <Btn size="btn-sm" variant="btn-outline" onClick={() => setQuery('')}>{t('c.clear')}</Btn>
        </div>
        {err && <div className="sql-err" style={{ marginTop: 10 }}>{err}</div>}
        {results && results.length === 0 && <Card><div style={{ fontSize: 13 }}>✓ {t('sq.ok')}</div></Card>}
        {results && results.length > 0 && results.map((r, i) => (
          <Card key={i}>
            <div className="label">{t('sq.results')} · {t('sq.rowsReturned', { n: r.values.length, ms })}</div>
            <div className="data-scroll">
              <table className="data-table">
                <thead><tr>{r.columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
                <tbody>{r.values.map((row, ri) => <tr key={ri}>{row.map((v, vi) => <td key={vi}>{v === null ? 'NULL' : String(v)}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </Card>
        ))}

        <SectionTitle>{t('sq.exercise')}</SectionTitle>
        {SQL_EXERCISES.map((ex) => (
          <Card key={ex.id}>
            <div className="tap-card" onClick={() => setOpenEx(openEx === ex.id ? null : ex.id)} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {p.state.sqlSolved.includes(ex.id) && <CheckCircle2 size={16} color="var(--success)" />}
              <div style={{ flex: 1, fontSize: 13, fontWeight: 700 }}>{t.L(ex.prompt)}</div>
              <Tag color={ex.level === 'beginner' ? 'green' : 'violet'}>{ex.level === 'beginner' ? t('sq.beginner') : t('sq.intermediate')}</Tag>
            </div>
            {openEx === ex.id && (
              <div style={{ borderTop: '1px solid var(--border)', marginTop: 9, paddingTop: 9 }}>
                <textarea className="sql-editor" style={{ minHeight: 70 }} value={p.state.sqlQueries[ex.id] || ''} onChange={(e) => p.saveSqlQuery(ex.id, e.target.value)} />
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <Btn size="btn-sm" variant="btn-primary" disabled={!db} onClick={() => runExercise(ex, p.state.sqlQueries[ex.id] || '')}>{t('c.check')}</Btn>
                  <Btn size="btn-sm" variant="btn-outline" onClick={() => p.saveSqlQuery(ex.id, ex.solution)}>{t('c.showSolution')}</Btn>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

// ================= CLEANING LAB =================
const DIRTY_CSV = `Name,City,Phone,Email,Age,TotalSAR
Ahmad Ali,Riyadh,0501234567,ahmad@mail.com,34,12500
sara hassan,Jeddah, 0509887766 ,Sara@Mail.com,28,9800
Ahmad Ali,Riyadh,0501234567,ahmad@mail.com,34,12500
Khaled Nasser,Dammam,0555443322,khaled@mail,41,15200
Nora Salem,riyadh,,nora@mail.com,29,
Omar Faisal ,Jeddah,0577778899,omar@mail.com,150,4300
Laila Mustafa,Makkah,0503332211,laila@mail.com,38,7600
Yousef Ahmad,Riyadh,0512341234,,45,21000
Hind Salem,jeddah,0506665544,hind@mail.com,,5200
Faisal Omar,Dammam,0533334444,faisal@mail.com,33,8900`;

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map((h) => h.trim());
  return lines.slice(1).filter(Boolean).map((l) => {
    const cells = l.split(',');
    const row = {};
    headers.forEach((h, i) => (row[h] = cells[i] !== undefined ? cells[i].trim() : ''));
    return row;
  });
}
function toCSV(rows) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  return [headers.join(','), ...rows.map((r) => headers.map((h) => r[h] ?? '').join(','))].join('\n');
}

export function CleaningLab() {
  const { t, lang } = usePrefs();
  const p = useProgress();
  const [headers, setHeaders] = useState([]);
  const [original, setOriginal] = useState([]);
  const [rows, setRows] = useState([]);
  const [history, setHistory] = useState([]);
  const [log, setLog] = useState([]);
  const [fixedTotal, setFixedTotal] = useState(0);
  const [onlyIssues, setOnlyIssues] = useState(false);
  const [fillCol, setFillCol] = useState('');
  const [fillVal, setFillVal] = useState('N/A');

  const load = (csv) => {
    const parsed = parseCSV(csv);
    setHeaders(Object.keys(parsed[0] || {}));
    setOriginal(parsed);
    setRows(parsed.map((r) => ({ ...r })));
    setHistory([]); setLog([]); setFixedTotal(0);
  };
  useEffect(() => { load(DIRTY_CSV); }, []);

  const issueRows = useMemo(() => rows.map((r) => {
    const issues = [];
    for (const h of headers) {
      const v = String(r[h] ?? '');
      if (v === '') issues.push(h);
      else if (v !== v.trim()) issues.push(h);
      if (h === 'Email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) issues.push(h);
      if ((h === 'Age' || h === 'TotalSAR') && v) { const n = parseFloat(v); if (Number.isNaN(n) || n < 0 || (h === 'Age' && n > 120)) issues.push(h); }
    }
    return issues;
  }), [rows, headers]);
  const dupRows = useMemo(() => {
    const seen = new Set(); const dups = [];
    rows.forEach((r) => { const k = JSON.stringify(r); if (seen.has(k)) dups.push(true); else { seen.add(k); dups.push(false); } });
    return dups;
  }, [rows]);
  const counts = useMemo(() => ({
    missing: rows.reduce((a, r, i) => a + headers.filter((h) => String(r[h] ?? '') === '').length, 0),
    dups: dupRows.filter(Boolean).length,
    invalid: rows.reduce((a, r, i) => a + issueRows[i].filter((h) => (h === 'Email' || h === 'Age' || h === 'TotalSAR') && String(r[h] ?? '') !== '').length, 0),
    ws: rows.reduce((a, r) => a + headers.filter((h) => String(r[h] ?? '') !== String(r[h] ?? '').trim()).length, 0),
    case: rows.reduce((a, r) => a + headers.filter((h) => h === 'City' && String(r[h] ?? '') && String(r[h]) !== 'Riyadh' && String(r[h]) === String(r[h]).toLowerCase()).length, 0),
  }), [rows, headers, issueRows, dupRows]);
  const totalIssues = counts.missing + counts.dups + counts.invalid + counts.ws + counts.case;

  const push = (labelEn, labelAr, fn) => {
    setHistory((h) => [...h, rows]);
    const [newRows, fixed] = fn(rows);
    setRows(newRows);
    setFixedTotal((f) => f + fixed);
    setLog((l) => [{ at: new Date().toLocaleTimeString(lang === 'ar' ? 'ar' : 'en'), label: lang === 'ar' ? labelAr : labelEn, fixed }, ...l]);
    if (fixed > 0) p.bumpLabStat('cleanFixed', fixed);
    showToast(`${lang === 'ar' ? 'تم إصلاح' : 'Fixed'} ${fixed}`);
  };
  const undo = () => {
    if (!history.length) { showToast(t('cl.undoEmpty'), 'error'); return; }
    setRows(history[history.length - 1]);
    setHistory((h) => h.slice(0, -1));
  };
  const ops = {
    trim: () => push('Trim whitespace', 'إزالة المسافات الزائدة', (rs) => {
      let fixed = 0;
      const out = rs.map((r) => { const n = { ...r }; for (const h of headers) { const v = String(n[h] ?? ''); if (v !== v.trim()) { n[h] = v.trim(); fixed++; } } return n; });
      return [out, fixed];
    }),
    proper: () => push('Title Case City', 'توحيد حالة المدينة', (rs) => {
      let fixed = 0;
      const out = rs.map((r) => { const n = { ...r }; const v = String(n.City ?? ''); const p2 = v.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()); if (v && p2 !== v) { n.City = p2; fixed++; } return n; });
      return [out, fixed];
    }),
    dedup: () => push('Remove duplicate rows', 'إزالة الصفوف المكررة', (rs) => {
      const seen = new Set(); const out = []; let fixed = 0;
      rs.forEach((r) => { const k = JSON.stringify(r); if (!seen.has(k)) { seen.add(k); out.push(r); } else fixed++; });
      return [out, fixed];
    }),
    fill: () => push('Fill missing values', 'تعبئة القيم المفقودة', (rs) => {
      if (!fillCol) return [rs, 0];
      let fixed = 0;
      const out = rs.map((r) => { const n = { ...r }; if (String(n[fillCol] ?? '') === '') { n[fillCol] = fillVal; fixed++; } return n; });
      return [out, fixed];
    }),
    dropMissing: () => push('Drop rows with missing values', 'حذف الصفوف الناقصة', (rs) => {
      const out = rs.filter((r) => headers.every((h) => String(r[h] ?? '') !== ''));
      return [out, rs.length - out.length];
    }),
  };

  const exportCsv = () => {
    const blob = new Blob([toCSV(rows)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'cleaned_dataset.csv';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="screen">
      <div className="screen-header"><div className="screen-header-row">
        <div><div className="screen-title">{t('labs.cleaning')}</div><div className="header-count">{t('labs.cleaningDesc')}</div></div>
      </div></div>
      <div className="screen-content fade-in">
        <Card>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <Btn size="btn-sm" onClick={() => load(DIRTY_CSV)}>{t('c.load')}</Btn>
            <label className="btn btn-sm btn-outline" style={{ cursor: 'pointer' }}>
              {t('c.upload')}
              <input type="file" accept=".csv,text/csv" style={{ display: 'none' }} onChange={(e) => {
                const f = e.target.files[0]; if (!f) return;
                const rd = new FileReader();
                rd.onload = () => load(String(rd.result));
                rd.readAsText(f);
              }} />
            </label>
            <Tag color="red">{t('cl.issues')}: {totalIssues}</Tag>
            {fixedTotal > 0 && <Tag color="green">{t('cl.fixedCount', { n: fixedTotal })}</Tag>}
          </div>
        </Card>

        <SectionTitle>{t('cl.report')}</SectionTitle>
        <div className="stat-grid three">
          <div className="stat-tile"><div className="stat-value">{counts.missing}</div><div className="stat-label">{t('cl.missing')}</div></div>
          <div className="stat-tile"><div className="stat-value">{counts.dups}</div><div className="stat-label">{t('cl.duplicates')}</div></div>
          <div className="stat-tile"><div className="stat-value">{counts.invalid}</div><div className="stat-label">{t('cl.invalid')}</div></div>
        </div>

        <SectionTitle>{t('cl.tools')}</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <Btn size="btn-sm" onClick={ops.trim}>{t('cl.trim')}</Btn>
            <Btn size="btn-sm" onClick={ops.proper}>{t('cl.title')} (City)</Btn>
            <Btn size="btn-sm" onClick={ops.dedup}>{t('cl.dedup')}</Btn>
            <Btn size="btn-sm" variant="btn-danger" onClick={ops.dropMissing}>{t('cl.dropMissing')}</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <select className="select" style={{ maxWidth: 130 }} value={fillCol} onChange={(e) => setFillCol(e.target.value)}>
              <option value="">{t('cl.chooseCol')}</option>
              {headers.map((h) => <option key={h} value={h}>{h}</option>)}
            </select>
            <input className="input" style={{ maxWidth: 110 }} value={fillVal} onChange={(e) => setFillVal(e.target.value)} />
            <Btn size="btn-sm" onClick={ops.fill}>{t('cl.fill')}</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 9 }}>
            <Btn size="btn-sm" variant="btn-outline" onClick={undo}><Undo2 size={14} /> {t('cl.undo')}</Btn>
            <Btn size="btn-sm" variant="btn-accent" onClick={exportCsv}><Download size={14} /> {t('cl.exportCsv')}</Btn>
          </div>
        </Card>

        <SectionTitle>{t('cl.original')} ({original.length}) → {t('cl.working')} ({rows.length})</SectionTitle>
        <Card>
          <label style={{ display: 'flex', gap: 8, fontSize: 12.5, marginBottom: 9, cursor: 'pointer' }}>
            <input type="checkbox" checked={onlyIssues} onChange={(e) => setOnlyIssues(e.target.checked)} style={{ width: 16, height: 16 }} />
            {t('cl.rowsWithIssues')}
          </label>
          <div className="data-scroll">
            <table className="data-table">
              <thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {rows.map((r, i) => {
                  const hasIssue = issueRows[i] && issueRows[i].length > 0;
                  if (onlyIssues && !hasIssue && !dupRows[i]) return null;
                  return (
                    <tr key={i} style={{ background: hasIssue || dupRows[i] ? 'rgba(239,68,68,0.05)' : undefined }}>
                      {headers.map((h) => {
                        const v = String(r[h] ?? '');
                        const bad = (issueRows[i] || []).includes(h);
                          const wasFixed = history.length > 0 && String((original[i] && original[i][h]) ?? '') !== v && v !== '';
                        return <td key={h} className={bad ? 'issue-missing' : wasFixed ? 'fixed' : ''}>{v === '' ? '—' : v}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {totalIssues === 0 && <div className="feedback" style={{ marginTop: 10 }}>✓ {t('cl.noIssues')}</div>}
        </Card>

        <SectionTitle>{t('cl.log')}</SectionTitle>
        <Card pad={false}>
          {log.length === 0 && <Empty icon={Eraser} title={t('cl.log')} sub={lang === 'ar' ? 'ستظهر عمليات التنظيف هنا' : 'Cleaning operations will appear here'} />}
          {log.map((l, i) => (
            <div key={i} className="list-item" style={{ cursor: 'default' }}>
              <div className="list-icon green"><CheckCircle2 /></div>
              <div className="list-main">
                <div className="list-title">{l.label}</div>
                <div className="list-sub">{l.at} · +{l.fixed}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
