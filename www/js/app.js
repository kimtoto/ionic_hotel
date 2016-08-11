'use strict';
angular.module('App', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'views/home/home.html'
            })
            .state('reservation', {
              url: '/reservation',
              controller: 'ReservationController',
              templateUrl: 'views/reservation/reservation.html'
            })
            .state('weather', {
              url:  '/weather',
              controller:  'WeatherController',
              templateUrl: 'views/weather/weather.html'
            })
            .state('restaurant', {
              url:  '/restaurant',
              controller:  'RestaurantController',
              templateUrl: 'views/restaurant/restaurant.html'
            });

          $urlRouterProvider.otherwise('/home');
    })
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
