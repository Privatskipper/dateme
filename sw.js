/* =========================================================
   DateMe Service Worker
   Macht die App offline-fähig und ladbar wie eine native App.
   ========================================================= */

const CACHE_NAME = 'dateme-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

// Installieren: Wichtigste Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Aktivieren: Alte Caches wegräumen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: Erst Cache versuchen, dann Netzwerk
self.addEventListener('fetch', (event) => {
  // Nur GET-Requests cachen, andere durchreichen
  if (event.request.method !== 'GET') return;

  // Google Fonts und externe Bilder beim ersten Mal cachen
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // Nur erfolgreiche Responses cachen
        if (!response || response.status !== 200) return response;

        // Klone für Cache (Response ist Stream)
        const cloned = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, cloned).catch(() => {});
        });
        return response;
      }).catch(() => {
        // Offline-Fallback: wenn HTML angefragt, gib die Hauptseite zurück
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
