const CACHE_NAME = "nosavewa-cache-v3";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/icon-192.png",
  "/icon-512.png",
  "/manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"
];

// Install Event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching shell assets");
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Message event to skip waiting
self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") {
    self.skipWaiting();
  }
});

// Fetch Event - Network First with Cache Fallback for online-priority updates
self.addEventListener("fetch", (e) => {
  if (!e.request.url.startsWith('http')) return;

  // Don't intercept API routes (like stats calls) so we don't cache live statistics
  if (e.request.url.includes('/api/')) {
    return e.respondWith(fetch(e.request));
  }

  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        if (e.request.method === "GET" && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fall back to cache if network fails (offline mode)
        return caches.match(e.request, { ignoreSearch: true });
      })
  );
});
