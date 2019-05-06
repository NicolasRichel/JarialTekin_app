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
  console.log(`Service Worker activated.`);
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

    // Use default behavior in other cases.
    return fetch(req);
  }());

};
