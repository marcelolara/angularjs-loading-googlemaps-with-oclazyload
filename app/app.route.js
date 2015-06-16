app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "app/components/home/homeView.html"
    })
    .state("map1", {
      url: "/map1",
      templateUrl: "app/components/map1/map1View.html",
      controller: "Map1Ctrl",
      resolve: {
        section2: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'map1',
            serie: true,
            files: [
              {type: 'js', path: '//maps.google.com/maps/api/js?sensor=false&callback=initialize' },
              'app/components/map1/map1Ctrl.js'
            ]
          })
        }]
      }
    })
    .state("map2", {
      url: "/map2",
      templateUrl: "app/components/map2/map2View.html",
      controller: "Map2Ctrl",
      resolve: {
        section2: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'map2',
            serie: true,
            files: [
              {type: 'js', path: '//maps.google.com/maps/api/js?sensor=false&callback=initialize' },
              'app/components/map2/map2Ctrl.js'
            ]
          })
        }]
      }
    })
  });

