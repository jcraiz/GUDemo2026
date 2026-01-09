var staticCaches = ["mobirise-cache-v1"];

function inArray(a, c) {
    return 0 < a.filter(function(b) { return b === c }).length ? !0 : !1;
}

self.addEventListener("install", function(a) {
    console.log("SW: Installed and updated");
    self.skipWaiting();
});

self.addEventListener("activate", function(a) {
    console.log("SW: Activate");
    a.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (!inArray(staticCaches, cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            console.log("SW: First time caching ...");
            return caches.open(staticCaches[0]).then(function(cache) {
                return fetch("/sw-resources.json")
                    .then(function(response) { return response.json(); })
                    .then(function(resources) {
                        resources = resources.reduce(function(acc, url) {
                            /(?:json|html|mobirise)/i.test(url.split(".").pop()) || acc.push(url);
                            return acc;
                        }, ["/", "manifest.json"]);

                        return Promise.all(
                            resources.map(function(url) {
                                return fetch(url, { mode: "no-cors" }).then(function(response) {
                                    return cache.put(url, response);
                                });
                            })
                        );
                    });
            }).catch(function(err) {
                console.error("Error during precaching:", err);
            });
        })
    );
});

self.addEventListener("fetch", function(event) {
    if (!event.request.url.startsWith("http")) {
        return;
    }

    // EXCLUSIÓN ESPECÍFICA: Solo para el video de fondo decorativo (ajusta la ruta si es diferente)
    if (event.request.url.includes("background-video.mp4") || event.request.url.includes("Logo_Reveal03.mp4")) {
        // Siempre usa red para este video (no cachea → evita 206)
        event.respondWith(
            fetch(event.request).catch(function() {
                return new Response("", { status: 200 });  // Fallback vacío offline
            })
        );
        return;
    }

    // Para TODOS LOS DEMÁS RECURSOS (incluidos videos educativos): NetworkFirst + cache
    event.respondWith(
        fetch(event.request).then(function(response) {
            if (response && response.status === 200) {
                var responseClone = response.clone();
                caches.open(staticCaches[0]).then(function(cache) {
                    cache.matchAll(event.request, { ignoreSearch: true }).then(function(matches) {
                        return Promise.all(matches.map(function(match) {
                            return cache.delete(match);
                        }));
                    }).then(function() {
                        cache.put(event.request, responseClone);
                    });
                });
            }
            return response;
        }).catch(function() {
            console.log("Offline mode.");
            return caches.match(event.request).then(function(cachedResponse) {
                return cachedResponse || new Response("Offline - No cached version", { status: 503 });
            });
        })
    );
});