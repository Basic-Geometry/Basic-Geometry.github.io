// Cache important resources during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        
        '/BasicGeometry.html',
     'geometry.jpeg',
     'square.png',
     'cubeMarkup.jpeg',
     'trigonometry.png',
     'pentagon.png',
     'areaOfACircle.jpg',
     'circleSegment.jpg',
     'circumference.jpg',
     'sphereAndCubeMarkup.jpeg',
     'sphericalCap.jpg',
     'coneAndSphere.jpeg',
     'sphereAndCone.jpeg',
     'eighthSphereQuarterCone.jpeg',
     'coneAndSphere.png',
     'coneMarkup.jpeg',
     'frustumConeMarkup.png',
     'conePyramidVolumeMarkup.jpeg',
     'tetrahedronInCube.jpeg'
      ]);
    })
  );
});

// Serve cached content or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Return the offline page if fetch fails
        return caches.match('/BasicGeometry.html');
      });
    })
  );
});
