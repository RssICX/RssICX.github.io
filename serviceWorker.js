const staticDevCoffee = 'dev-coffee-site-v1';
const assets = [
    '/',
    '/index.html',
    '/css/style.css',
    '/JS/app.js',
    '/images/maca.png',
    '/JS/current-device.min.js',
    '/JS/main.js',
    '/styles/Font-Faiml/HarmonyOS_Sans_SC_Light.ttf',
    '/styles/main.d.l.css',
    '/styles/media.css',
    '/styles/svg.css',
    '/styles/window.css'
];
self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});