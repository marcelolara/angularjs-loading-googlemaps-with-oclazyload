angular.module('map1', [])
  .controller("Map1Ctrl", ['$window', function ($window) {
    $window.initialize = initializeMap;

    function initializeMap() {
      if (typeof google.maps.LatLng == 'function') {
        var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644)
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);
      }
    }

    initializeMap();
  }]
);
