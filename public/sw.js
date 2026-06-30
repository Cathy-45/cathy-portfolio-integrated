const CACHE_NAME = "v3";
const STATIC_ASSETS = [
  "/favicon.ico",
  "/assets/logo-192.png",
  "/assets/logo-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Always fetch index.html and JS/CSS fresh from network (never cache HTML or hashed bundles)
  if (
    url.pathname === "/" ||
    url.pathname === "/index.html" ||
    url.pathname.startsWith("/assets/index") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css")
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache-first for static assets (images, icons)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});