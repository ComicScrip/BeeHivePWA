var CACHE = 'cache';
self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed.');
    evt.waitUntil(precache());
  });

  self.addEventListener('fetch', function(evt) {
    console.log('The service worker is serving the asset.');
    evt.respondWith(fromCache(evt.request));
    evt.waitUntil(update(evt.request));
});