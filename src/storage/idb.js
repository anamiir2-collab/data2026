// Tiny IndexedDB key-value store with a localStorage fallback.
// Used for: learning progress, project work, portfolio, bookmarks, notes.
const DB_NAME = 'datapath-academy';
const STORE = 'kv';
let dbPromise = null;
let idbBroken = false;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    try {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    } catch (e) {
      reject(e);
    }
  });
  return dbPromise;
}

async function lsKey(key) {
  const raw = localStorage.getItem('dpa:idb:' + key);
  return raw ? JSON.parse(raw) : undefined;
}
async function lsSet(key, val) {
  try {
    localStorage.setItem('dpa:idb:' + key, JSON.stringify(val));
  } catch (e) {
    /* storage full */
  }
}

export async function idbGet(key) {
  if (idbBroken) return lsKey(key);
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    idbBroken = true;
    return lsKey(key);
  }
}

export async function idbSet(key, value) {
  if (idbBroken) return lsSet(key, value);
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    idbBroken = true;
    return lsSet(key, value);
  }
}

export async function idbDel(key) {
  if (idbBroken) {
    localStorage.removeItem('dpa:idb:' + key);
    return;
  }
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    idbBroken = true;
    localStorage.removeItem('dpa:idb:' + key);
  }
}

// ---- Preferences (localStorage, simple values) ----
export const prefs = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem('dpa:' + key);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem('dpa:' + key, JSON.stringify(value));
    } catch (e) {
      /* ignore */
    }
  },
};

export function todayStr(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export function daysBetween(d1, d2) {
  // d1, d2 as 'YYYY-MM-DD'
  const a = new Date(d1 + 'T00:00:00');
  const b = new Date(d2 + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}
