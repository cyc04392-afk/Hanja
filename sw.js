const V='mukbit-03bfcb97c3';const CORE=[".deploy", "apple-touch-icon.png", "data/chars.json", "data/content.json", "data/hw.json", "data/illu.json", "fonts/nunito.woff2", "fonts/serif-han.woff2", "hanzi-writer.min.js", "icon-192.png", "icon-512.png", "index.html", "manifest.json"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp))}return res})))});
