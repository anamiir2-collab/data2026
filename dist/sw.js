/* DataPath Academy service worker.
 * Strategy:
 *  - Precache: app shell (index.html, offline.html, manifest, icons, sql.js WASM).
 *  - Same-origin GET assets: cache-first with background refresh (stale-while-revalidate).
 *  - Google Fonts: cache-first (fonts are immutable per URL).
 *  - Navigations: network-first, fall back to cache, then offline.html.
 */
const VERSION = 'datapath-v1.0.0';
const SHELL_CACHE = `${VERSION}-shell`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
const FONT_CACHE = `${VERSION}-fonts`;

const SHELL_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './icons/icon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './sqljs/sql-wasm.js',
  './sqljs/sql-wasm.wasm',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // Cache one by one so one missing icon never breaks the whole install.
      await Promise.allSettled(SHELL_ASSETS.map((a) => cache.add(new Request(a, { cache: 'reload' }))));
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

function isFontRequest(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // App shell for navigations: network-first → cache → offline page.
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(SHELL_CACHE);
          cache.put('./index.html', fresh.clone());
          return fresh;
        } catch (err) {
          const cache = await caches.open(SHELL_CACHE);
          return (
            (await cache.match('./index.html')) ||
            (await cache.match('./')) ||
            (await cache.match('./offline.html')) ||
            new Response('<h1>Offline</h1>', { headers: { 'Content-Type': 'text/html' } })
          );
        }
      })()
    );
    return;
  }

  if (isFontRequest(url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(FONT_CACHE);
        const hit = await cache.match(req);
        if (hit) return hit;
        try {
          const res = await fetch(req);
          if (res.ok) cache.put(req, res.clone());
          return res;
        } catch (err) {
          return new Response('', { status: 504 });
        }
      })()
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_CACHE);
        const shell = await caches.open(SHELL_CACHE);
        const hit = (await cache.match(req)) || (await shell.match(req));
        const fetchAndCache = fetch(req)
          .then((res) => {
            if (res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => hit || Response.error());
        return hit || fetchAndCache;
      })()
    );
  }
});
