var C="mYm-v310",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;var u=new URL(e.request.url);if(u.origin!==location.origin||u.pathname.indexOf("/tess/")>=0)return;
 e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(n){if(n.ok&&n.type==="basic"){var cp=n.clone();caches.open(C).then(function(c){c.put(e.request,cp)})}return n}).catch(function(){return e.request.mode==="navigate"?caches.match("index.html"):Response.error()})}))});
