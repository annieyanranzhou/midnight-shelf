// Midnight Shelf service worker: makes the app installable and caches the page for offline use
const CACHE = "shelf-v1";
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.add("./")).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Network first, falling back to cache when offline
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(m => m || caches.match("./")))
  );
});
