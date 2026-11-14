import React from 'react';

// Mini markdown renderer for lesson bodies.
// Supports: paragraphs, ### headings, **bold**, `code`, - bullets, 1. ordered,
// ``` fenced code, | tables |, > TIP:/WARN: callouts, \n newlines.
function inline(text, keyBase) {
  const parts = [];
  let rest = text;
  let k = 0;
  const push = (node) => parts.push(<React.Fragment key={`${keyBase}-${k++}`}>{node}</React.Fragment>);
  // tokenize **bold** and `code`
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m;
  while ((m = re.exec(rest)) !== null) {
    if (m.index > last) push(rest.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) push(<b>{tok.slice(2, -2)}</b>);
    else push(<code>{tok.slice(1, -1)}</code>);
    last = m.index + tok.length;
  }
  if (last < rest.length) push(rest.slice(last));
  return parts;
}

function renderBlocks(md, lang) {
  const out = [];
  const lines = String(md).split('\n');
  let i = 0;
  let key = 0;
  const K = () => `b${key++}`;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    if (line.startsWith('### ')) {
      out.push(<h3 key={K()}>{inline(line.slice(4), K())}</h3>);
      i++;
      continue;
    }
    if (line.startsWith('> TIP:') || line.startsWith('> WARN:') || line.startsWith('> ')) {
      const isWarn = line.startsWith('> WARN:');
      const buf = [line.replace(/^> (TIP|WARN):\s*/, '')];
      i++;
      while (i < lines.length && lines[i].startsWith('> ')) { buf.push(lines[i].slice(2)); i++; }
      out.push(
        <div key={K()} className={`callout ${isWarn ? 'warn' : 'tip'}`}>
          <b>{isWarn ? (lang === 'ar' ? 'تحذير' : 'Warning') : lang === 'ar' ? 'نصيحة' : 'Tip'}</b>
          {buf.map((t, j) => <div key={j}>{inline(t, K())}</div>)}
        </div>
      );
      continue;
    }
    if (line.startsWith('```')) {
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) { buf.push(lines[i]); i++; }
      i++;
      out.push(
        <pre key={K()}>
          <code>{buf.join('\n')}</code>
        </pre>
      );
      continue;
    }
    if (line.startsWith('| ')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i++; }
      const parsed = rows
        .filter((r) => !/^\|[\s\-|]+\|$/.test(r))
        .map((r) => r.split('|').slice(1, -1).map((c) => c.trim()));
      if (parsed.length) {
        out.push(
          <table key={K()}>
            <thead>
              <tr>{parsed[0].map((c, j) => <th key={j}>{inline(c, K())}</th>)}</tr>
            </thead>
            <tbody>
              {parsed.slice(1).map((row, r) => (
                <tr key={r}>{row.map((c, j) => <td key={j}>{inline(c, K())}</td>)}</tr>
              ))}
            </tbody>
          </table>
        );
      }
      continue;
    }
    if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) { items.push(lines[i].slice(2)); i++; }
      out.push(<ul key={K()}>{items.map((t, j) => <li key={j}>{inline(t, K())}</li>)}</ul>);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, '')); i++; }
      out.push(<ol key={K()}>{items.map((t, j) => <li key={j}>{inline(t, K())}</li>)}</ol>);
      continue;
    }
    // paragraph: gather until blank line or block start
    const buf = [line];
    i++;
    while (
      i < lines.length && lines[i].trim() &&
      !lines[i].startsWith('### ') && !lines[i].startsWith('- ') &&
      !lines[i].startsWith('```') && !lines[i].startsWith('| ') && !lines[i].startsWith('> ') &&
      !/^\d+\. /.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    out.push(<p key={K()}>{inline(buf.join(' '), K())}</p>);
  }
  return out;
}

export default function Markdown({ text, lang = 'en' }) {
  if (!text) return null;
  return <div className="lesson-body fade-in">{renderBlocks(text, lang)}</div>;
}
