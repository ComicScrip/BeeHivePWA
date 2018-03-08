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

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      './controlled.html',
      './asset'
    ]);
  });
}

function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {
    var timeoutId = setTimeout(reject, timeout);
    fetch(request).then(function (response) {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}