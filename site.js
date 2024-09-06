// Cache important resources during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/offline.html',
'/Images/circleToSquare1200x960.jpg',
'/Images/circleSegment1200x960.jpg',
'/Images/sphereVolume.jpeg',
'/Images/sphereSlice1200x960.jpg',
'/Images/sphereInTetra1200x960.jpg',
'/Images/cone.jpeg',
'/Images/frustumCone.png',
'/Images/triangleArea1200x960.jpg',
'/Images/conePyramidVolume.jpeg',
'/Images/rightAngle1200x960.jpg',
'/Images/sine1200x960.jpg',
'/Images/equilateral1200x960.jpg',
'/Images/regularPolygons1200x960.jpg',
'/Images/square1200x960.jpg',
'/Images/cube1200x960.jpg'
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
        return caches.match('/offline.html');
      });
    })
  );
});
