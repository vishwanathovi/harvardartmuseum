const staticAssets = [
	'./',
	'./assets/js/cacheImages.js',
	'./assets/js/fetch.js',
	'./assets/js/main.js',
	'./assets/js/updateDom.js',
	'./assets/stylesheet/main.css',
	'./assets/stylesheet/reset.css',
	'./assets/stylesheet/dark-mode.css',
	'./assets/media/backgroundSmall.png',
	'./assets/media/darkmode.png',
	'./assets/media/harvardlogo.png',
	'./assets/media/harvardlogo2.png',
	'./assets/media/js-disabled.png',
	'./assets/media/light-mode.png',
	];

self.addEventListener('install', async e=>{
	const cache = await caches.open('harvard-static');
	cache.addAll(staticAssets)
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(req){
	const cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
}

async function networkFirst(request) {
  const dynamicCache = await caches.open('news-dynamic');
  try {
    const networkResponse = await fetch(request);
    dynamicCache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (err) {
    const cachedResponse = await dynamicCache.match(request);
    return cachedResponse || await caches.match('./fallback.json');
  }
}
