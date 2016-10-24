(function () {
    'use strict';

    var app = angular.module('mtgApp');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', function($routeProvider, routes) {

      routes.forEach(function (r) {
          $routeProvider.when(r.url, r.config);
      });
      $routeProvider.otherwise({ redirectTo: '/' });

    }]);

    // Define the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/startScreen/startScreen.html',
                    title: 'home',
                    settings: {
                        content: 'Home'
                    }
                }
            }, {
                url: '/draftsim',
                config: {
                    title: 'draftsim',
                    templateUrl: 'app/draftsim/draftsim.html',
                    settings: {
                        content: 'Draft Simulator'
                    }
                }
            }, {
                url: '/sealedsim',
                config: {
                    title: 'sealedsim',
                    templateUrl: 'app/sealedsim/sealedsim.html',
                    settings: {
                        content: 'Sealed Simulator'
                    }
                }
            }, {
                url: '/browsecards',
                config: {
                    title: 'browsecards',
                    templateUrl: 'app/browsecards/browsecards.html',
                    settings: {
                        content: 'Browse Cards'
                    }
                }
            }, {
                url: '/boostersim',
                config: {
                    title: 'boostersim',
                    templateUrl: 'app/boostersim/boostersim.html',
                    settings: {
                        content: 'Booster Simulator'
                    }
                }
            }, {
                url: '/news',
                config: {
                    title: 'news',
                    templateUrl: 'app/news/news.html',
                    settings: {
                        content: 'News'
                    }
                }
            }, {
                url: '/about',
                config: {
                    title: 'about',
                    templateUrl: 'app/about/about.html',
                    settings: {
                        content: 'About'
                    }
                }
            }
        ];
    }
})();
