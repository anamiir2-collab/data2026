import React, { useEffect, useState } from 'react';
import { ChevronRight, CheckCircle2, AlertCircle, X } from 'lucide-react';

// ---------- Card ----------
export function Card({ children, className = '', onClick, pad = true }) {
  return (
    <div className={`card ${onClick ? 'tap-card' : ''} ${pad ? 'card-pad' : ''} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

// ---------- Button ----------
export function Btn({ children, variant = '', size = '', className = '', ...props }) {
  return (
    <button className={`btn ${variant} ${size} ${className}`} {...props}>
      {children}
    </button>
  );
}

// ---------- Section title ----------
export function SectionTitle({ icon: Icon, children, action }) {
  return (
    <div className="section-title">
      {Icon && <Icon />}
      <span>{children}</span>
      {action}
    </div>
  );
}

// ---------- Progress bar ----------
export function Progress({ value = 0, thin = false }) {
  return (
    <div className={`progress ${thin ? 'thin' : ''}`}>
      <div className="progress-fill" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

// ---------- Progress ring (SVG) ----------
export function Ring({ value = 0, size = 74, stroke = 8, label, sub, color = 'var(--accent)' }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className="ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <div className="ring-label" style={{ width: size - stroke * 2 }}>
        <div style={{ fontSize: 15, fontWeight: 800 }}>{label !== undefined ? label : `${Math.round(pct)}%`}</div>
        {sub && <div style={{ fontSize: 9, color: 'var(--muted)' }}>{sub}</div>}
      </div>
    </div>
  );
}

// ---------- Stat tile ----------
export function StatTile({ icon: Icon, value, label }) {
  return (
    <div className="stat-tile">
      {Icon && <Icon />}
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ---------- List item ----------
export function ListItem({ icon: Icon, iconColor = '', title, sub, right, onClick, chevron = true }) {
  return (
    <div className="list-item" onClick={onClick}>
      {Icon && (
        <div className={`list-icon ${iconColor}`}>
          <Icon />
        </div>
      )}
      <div className="list-main">
        <div className="list-title">{title}</div>
        {sub && <div className="list-sub">{sub}</div>}
      </div>
      {right}
      {chevron && (
        <div className="list-chev">
          <ChevronRight style={{ transform: 'scaleX(var(--chev, 1))' }} />
        </div>
      )}
    </div>
  );
}

// ---------- Empty state ----------
export function Empty({ icon: Icon, title, sub }) {
  return (
    <div className="empty">
      {Icon && <Icon />}
      <div className="empty-title">{title}</div>
      {sub && <div className="empty-sub">{sub}</div>}
    </div>
  );
}

// ---------- Tabs ----------
export function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((tb) => (
        <button key={tb.id} className={`tab ${active === tb.id ? 'active' : ''}`} onClick={() => onChange(tb.id)}>
          {tb.label}
        </button>
      ))}
    </div>
  );
}

// ---------- Bottom sheet modal ----------
export function Sheet({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <div className="modal-grab" />
        <div className="modal-head">
          <div className="modal-title">{title}</div>
          <button className="icon-btn" onClick={onClose} aria-label="close">
            <X size={17} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </>
  );
}

// ---------- Toast host ----------
export function ToastHost() {
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    const handler = (e) => {
      const id = Date.now() + Math.random();
      setToasts((ts) => [...ts, { id, ...e.detail }]);
      setTimeout(() => setToasts((ts) => ts.filter((t) => t.id !== id)), 3400);
    };
    window.addEventListener('dpa-toast', handler);
    return () => window.removeEventListener('dpa-toast', handler);
  }, []);
  return (
    <div className="toast-wrap">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type || ''}`}>
          {t.type === 'error' ? <AlertCircle /> : <CheckCircle2 />}
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}

// ---------- Select field ----------
export function Field({ label, children }) {
  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      {children}
    </div>
  );
}

// ---------- Difficulty / status chip ----------
export function Tag({ children, color = '' }) {
  return <span className={`tag ${color}`}>{children}</span>;
}

// ---------- Confirm dialog via Sheet ----------
export function ConfirmSheet({ open, onClose, title, message, confirmLabel, onConfirm, requireWord }) {
  const [word, setWord] = useState('');
  useEffect(() => {
    if (!open) setWord('');
  }, [open]);
  const ok = !requireWord || word === requireWord;
  return (
    <Sheet open={open} onClose={onClose} title={title}>
      <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.8 }}>{message}</p>
      {requireWord && (
        <Field>
          <input className="input" value={word} onChange={(e) => setWord(e.target.value)} placeholder={requireWord} style={{ direction: 'ltr' }} />
        </Field>
      )}
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <Btn variant="btn-outline btn-block" onClick={onClose}>
          <span data-i18n="c.cancel">Cancel</span>
        </Btn>
        <Btn variant="btn-danger btn-block" disabled={!ok} onClick={onConfirm}>
          {confirmLabel}
        </Btn>
      </div>
    </Sheet>
  );
}
