console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// Force development builds
workbox.setConfig({ debug: true });



workbox.routing.registerRoute(
    // Cache HTML files
    new RegExp('.+\\.html$'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    // Cache JS files
    new RegExp('.+\\.js$'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    // Cache CSS files
    new RegExp('.+\\.css$'),
    new workbox.strategies.NetworkFirst()
);
