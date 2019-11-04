                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"1db96ac1c45d8909be09e11ed031e830"},{"url":"/recognizing-patterns","revision":"8743e8293cb745eee13dc3d3e01af04a"},{"url":"/stickers","revision":"bdbd85788664fc1ab0c31ac7061e6882"},{"url":"/first-week-feels","revision":"1f9d5fa739dc56eeb937c6f188b678c5"},{"url":"/goal-completed","revision":"ecd90892ec03d549ff31236ef5b11f4f"},{"url":"/burnout-health-and-starting-over","revision":"9a898008d108dd1a6bad8fa2b5fb4604"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'tiffany-white-blog',
    suffix: 'v9.5',
    precache: 'precache',
    runtime: 'runtime-cache'
  });

  // let Service Worker take control of pages ASAP
  workbox.skipWaiting();
  workbox.clientsClaim();

  // let Workbox handle our precache list
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // use `networkFirst` strategy for `*.html`, like all my posts
  workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
  );

  workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
    return articleHandler.handle(args).then(response => {
      if (!response) {
        return caches.match('pages/offline.html');
      } else if (response.status === 404) {
        return caches.match('pages/404.html');
      }
      return response;
    });
  });

  // use `cacheFirst` strategy for images
  workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
  );

  // third party files
  workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
  )

