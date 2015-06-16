angular.module('map2', [])
  .controller("Map2Ctrl", ['$window', function ($window) {
    $window.initialize = initializeMap;

    function initializeMap() {
      if (typeof google.maps.LatLng == 'function') {
        var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-33.4369414, -70.6343993)
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);
      }
    }
    initializeMap();
  }]
);
