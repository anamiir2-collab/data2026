import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { PrefsProvider } from './state/PrefsContext.jsx';
import { ProgressProvider } from './state/ProgressContext.jsx';
import './styles/base.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrefsProvider>
      <ProgressProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ProgressProvider>
    </PrefsProvider>
  </React.StrictMode>
);

// Register the service worker (PWA install + offline support)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((reg) => {
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          if (!nw) return;
          nw.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) {
              window.dispatchEvent(new CustomEvent('dpa-update'));
            }
          });
        });
      })
      .catch(() => {});
  });
}
