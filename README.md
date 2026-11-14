# DataPath Academy 📱

**From Data Entry to Data Analysis — من إدخال البيانات إلى تحليل البيانات**

A complete, installable, bilingual (English/Arabic) PWA learning application that takes a complete beginner step by step to Junior Data Analyst readiness. It behaves like a native mobile app: bottom navigation, standalone mode, offline lessons, and it deploys free on GitHub Pages.

> ⚠️ Honest note: DataPath Academy is a **PWA (Progressive Web App)**, not a native APK. Installing it means the browser adds a real app icon to your home screen that opens fullscreen without browser bars — installation is done by the browser itself, safely. The codebase is structured so it can later be wrapped into a native Android app with Capacitor.

---

## 1. Project Overview

- **10 learning levels** · **85 bilingual lessons** · **300+ quiz questions** · **12 real-world projects**
- Sequential lesson unlocking, module tests, level exams, a Final Comprehensive Exam and a Junior Data Analyst Readiness Report.
- Four working laboratories: Data Conversion, Excel Practice, SQL Playground, Data Cleaning.
- XP, ranks, streaks, daily goals and 14 achievement badges — all computed from real activity, never fake progress.
- Arabic RTL / English LTR with preserved English technical terms inside Arabic lessons.
- All progress is stored locally (IndexedDB + localStorage). No account, no backend.

## 2. Main Features

| Area | What works |
| --- | --- |
| Home | Real dashboard: streak, XP, quiz average, daily-goal ring, weekly XP chart (Chart.js), MY LEARNING JOURNEY roadmap, recommended lessons, upcoming tasks |
| Academy | Levels → modules → lessons with progressive unlocking, bookmarks, per-lesson summaries, module tests, level exams |
| Lessons | Objectives, bilingual explanation (mini-markdown), key terms, examples, steps, Excel function reference cards, interactive exercise, knowledge check (70% to pass), summary notes |
| Labs | Conversion Lab (extraction + step-by-step calculators), Excel Lab (43-function library + live spreadsheet with a JavaScript formula engine + graded challenges), SQL Playground (real sql.js SQLite with 6 sample tables + 12 guided exercises), Cleaning Lab (CSV import/export, detection report, cleaning tools, undo, cleaning log) |
| Projects | 12 business projects with brief, dataset (CSV download), task checklist, autosaved workspace notes — the model solution and assessment unlock only after you submit an attempt |
| Profile | Rank progress, exam history, achievements, settings, JSON backup/import, reset with typed confirmation |
| Career/Readiness | Junior Data Analyst Readiness Report auto-generated from real activity, printable |

## 3. Technologies

React 18 · Vite 5 · react-router-dom (HashRouter — GitHub Pages friendly) · IndexedDB + localStorage · Service Worker (hand-written) · Chart.js · sql.js (SQLite/WASM bundled locally) · lucide-react · custom formula engine (no Excel library needed).

## 4. Installation (for developers)

```bash
git clone https://github.com/<your-username>/datapath-academy.git
cd datapath-academy
npm install
```

## 5. Local Development

```bash
npm run dev        # http://localhost:5173
```

## 6. Production Build

```bash
npm run build      # outputs dist/
npm run preview    # serve dist/ locally (service worker + PWA work here)
```

## 7. GitHub Repository Setup

1. Create a repository named `datapath-academy` (or any name).
2. Push all files (including `.github/workflows/deploy.yml` and the `public/` folder).
3. Make sure `main` is your default branch.

## 8. GitHub Pages Deployment

- The included GitHub Action builds and deploys automatically on every push to `main`.
- In your repo: **Settings → Pages → Source → GitHub Actions**.
- Your app will be live at `https://<username>.github.io/datapath-academy/`.
- No configuration needed for sub-paths: `vite.config.js` uses `base: './'` and the router uses hash routing, so asset paths always resolve correctly.

## 9. PWA Installation (on your phone)

Open the deployed HTTPS URL, then:

- **Android (Chrome):** ⋮ menu → **Install app / Add to Home screen** → confirm. The icon appears in your launcher and opens fullscreen (standalone mode).
- **iPhone/iPad (Safari):** Share icon (□↑) → **Add to Home Screen** → Add. Runs standalone from the home screen.
- **Desktop:** install icon in the address bar (Chrome/Edge).
- A step-by-step guide also lives inside the app: **Profile → Install the app**.

## 10. Offline Functionality

The service worker precaches the app shell, icons and the sql.js engine, and caches pages, assets and Google Fonts at runtime. Once you have visited lessons, they open without internet. An offline banner appears when you are disconnected. Navigations fall back to a cached page or `offline.html`.

## 11. Future Development

- Supabase integration for accounts and cloud sync (the storage layer is isolated in `src/storage/`).
- Capacitor wrapper for a native Android APK/iOS build from the same codebase.
- More levels/lessons: educational content is pure data in `src/curriculum/levelXX.js` — new levels plug in without touching UI code.

## Project Structure

```
datapath-academy/
├── public/
│   ├── icons/                  # PWA icons (generated)
│   ├── sqljs/                  # sql.js engine + WASM (offline SQL)
│   ├── manifest.webmanifest
│   ├── offline.html
│   └── sw.js                   # service worker
├── src/
│   ├── components/             # UI kit, Markdown renderer, QuizEngine
│   ├── screens/                # Home, Academy, Labs, Misc screens
│   ├── navigation/             # bottom navigation
│   ├── curriculum/             # ⭐ all educational content (pure data)
│   ├── data/                   # projects, achievements, samples
│   ├── state/                  # Prefs (theme/lang) + Progress (XP/streaks/achievements)
│   ├── storage/                # IndexedDB wrapper + preferences
│   ├── i18n/                   # full bilingual UI dictionary
│   ├── styles/                 # design system (RTL-aware)
│   ├── App.jsx
│   └── main.jsx
├── index.html                  # splash screen + PWA meta
├── vite.config.js              # base './' for GitHub Pages
├── .github/workflows/deploy.yml
└── package.json
```

## Testing performed

- `npm run build` production build passes (1,605 modules).
- All 10 curriculum files import and validate (85 lessons, 300+ questions, 43 Excel function cards).
- Arithmetic in exercises/exams verified programmatically where generated.
- Run `npm run preview` to test the PWA locally (service worker requires localhost or HTTPS).
