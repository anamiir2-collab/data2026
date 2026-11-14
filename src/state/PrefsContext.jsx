import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { prefs } from '../storage/idb.js';
import { makeT } from '../i18n/translations.js';

const PrefsCtx = createContext(null);

export function PrefsProvider({ children }) {
  const [lang, setLangState] = useState(() => prefs.get('lang', 'en'));
  const [theme, setThemeState] = useState(() => prefs.get('theme', 'dark'));
  const [sound, setSoundState] = useState(() => prefs.get('sound', true));
  const [reminders, setRemindersState] = useState(() => prefs.get('reminders', false));

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', dir);
    root.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a1628' : '#eaf1fa');
  }, [lang, dir, theme]);

  const value = useMemo(() => {
    const t = makeT(lang);
    const isAr = lang === 'ar';
    return {
      lang,
      dir,
      isAr,
      t,
      theme,
      sound,
      reminders,
      setLang: (l) => {
        setLangState(l);
        prefs.set('lang', l);
      },
      setTheme: (th) => {
        setThemeState(th);
        prefs.set('theme', th);
      },
      setSound: (v) => {
        setSoundState(v);
        prefs.set('sound', v);
      },
      setReminders: (v) => {
        setRemindersState(v);
        prefs.set('reminders', v);
      },
      // Localized field picker for bilingual data objects
      L: (obj) => (obj ? obj[lang] || obj.en || '' : ''),
    };
  }, [lang, dir, theme, sound, reminders]);

  return <PrefsCtx.Provider value={value}>{children}</PrefsCtx.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsCtx);
  if (!ctx) throw new Error('usePrefs outside provider');
  return ctx;
}

// Toast bus (simple, no circular imports)
export function showToast(message, type = 'success') {
  window.dispatchEvent(new CustomEvent('dpa-toast', { detail: { message, type } }));
}

// Simple WebAudio feedback for quiz answers
let audioCtx = null;
export function playSound(kind, enabled) {
  if (!enabled) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g);
    g.connect(audioCtx.destination);
    o.type = 'sine';
    const now = audioCtx.currentTime;
    if (kind === 'ok') {
      o.frequency.setValueAtTime(660, now);
      o.frequency.setValueAtTime(880, now + 0.1);
      g.gain.setValueAtTime(0.08, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      o.start(now);
      o.stop(now + 0.26);
    } else {
      o.frequency.setValueAtTime(300, now);
      o.frequency.setValueAtTime(220, now + 0.12);
      g.gain.setValueAtTime(0.07, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      o.start(now);
      o.stop(now + 0.31);
    }
  } catch (e) {
    /* audio unavailable */
  }
}
