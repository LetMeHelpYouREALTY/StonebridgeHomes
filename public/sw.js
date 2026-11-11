/**
 * Network-first service worker. HTML and listing data always try the network
 * so visitors never see a stale price; static assets fall back to cache when
 * offline. Bump CACHE_NAME whenever precached files change.
 */
const CACHE_NAME = 'stonebridge-lv-v2';
const PRECACHE = ['/', '/manifest.json', '/images/logo.svg', '/images/logo-light.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.allSettled(PRECACHE.map((url) => cache.add(url))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && (request.destination === 'image' || request.destination === 'style' || request.destination === 'script')) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match('/'))),
  );
});
