/**
 * JarialTekin App Service Worker
 * Version 1.0
 */

// Caches names
const STATIC_CACHE = 'jarialtekin-static';
const DYNAMIC_CACHE = 'jarialtekin-dynamic';

// List of URLs to cache during service worker installation
const toCache = [];

// On Install
self.oninstall = (event) => {
  event.waitUntil(async function() {
    const cache = await caches.open(STATIC_CACHE);
    return cache.addAll( toCache );
  }());
};

// On Activate
self.onactivate = (event) => {
  console.log(`Service Worker activated. [ ${Date.now()} ]`);
};

// On Fetch
self.onfetch = (event) => {

  const req = event.request;
  const url = new URL(req.url);

  // Use default behavior for non-GET requests.
  if (req.method !== 'GET') return;

  event.respondWith(async function() {
    // Use 'Cache, falling back to Network' strategy
    // for requests of static assets and libraries.
    if (/\/static\/|\/lib\//.test(url.pathname)) {
      const cache = await caches.open(STATIC_CACHE);
      return (await cache.match(req)) || fetch(req);
    }
    // Use 'Cache then Network' strategy
    // (or 'Cache, Update and Refresh' strategy)
    // for requests to the API.
    if (/^\/api\//.test(url.pathname)) {
      const cache = await caches.open(DYNAMIC_CACHE);
      event.waitUntil(async function() {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return clients.get(event.clientId).then((client) => {
          const msg = {};
          client.postMessage(JSON.stringify(msg));
        });
      }());
      return cache.match(req);
    }
  }());

  // Use 'Cache, falling back to Network' strategy
  // for the requests of static assets.
  // if (/^\/static\//.test(url.pathname)) {
  //   event.respondWith(
  //     caches.open(STATIC_CACHE).then((cache)=> {
  //       return cache.match(req).then((res) => {
  //         return res || fetch(res);
  //       });
  //     });
  //   );
  // }
  // Use 'Cache then Network' strategy
  // (or 'Cache, Update and Refresh' strategy)
  // for the requests to the API.
  // if (/^\/api\//.test(url.pathname)) {
  //   event.respondWith(
  //     caches.open(DYNAMIC_CACHE).then((cache) => {
  //       return cache.match(req);
  //     });
  //   );
  //   event.waitUntil(
  //     caches.open(DYNAMIC_CACHE).then((cache) => {
  //       return fetch(req).then((res) => {
  //         return cache.put(req, res.clone()).then(() => {
  //           return res;
  //         });
  //       });
  //     }).then((res) => {
  //       return self.clients.get(event.clientId).then((client) => {
  //         const msg = {};
  //         client.postMessage(JSON.stringify(msg));
  //       });
  //     });
  //   );
  // }
};
