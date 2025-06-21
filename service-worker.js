
const CACHE_NAME = "los-rudos-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/service-worker.js",
  "/assets/Menuu.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
