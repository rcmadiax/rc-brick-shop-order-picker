const CACHE='rcbs-order-picker-v0.9.5-marketplace-orders';
const ASSETS=['./','./index.html','./picker.css','./picker.js','./jszip.min.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/management-icon.png','./icons/icon-192.png?v=0.9.5','./icons/icon-512.png?v=0.9.5','./manifest.webmanifest?v=0.9.5'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method==='GET') e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
