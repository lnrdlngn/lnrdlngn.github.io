console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
    // Cache HTML files
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    // Cache JS files
    /\.js$/,
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    // Cache CSS files
    /\.css$/,
    new workbox.strategies.NetworkFirst()
);
