var app = angular.module('App');
    app.controller('WeatherController', function($scope, $http, $ionicLoading) {
        var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        $ionicLoading.show();
        $http.get('https://ionic-in-action-api.herokuapp.com/weather')
              .success(function(weather) {
                  $scope.weather = weather;
                  $ionicLoading.hide();
              })
              .error(function(exception) {
                  $scope.err = exception;

                  $ionicLoading.show({
                      template: 'Could note load weather. Please try agin later.',
                      duration: 3000
                  });
              });
        /**
         *
         * @param  {[type]} degree [description]
         * @return {[type]}        [description]
         * @description : current Wind mph value(풍향계산)
         *
         */
        $scope.getDirection = function (degree) {
            if (degree > 338) {
                degree - 360 - degree;
            }

            var index = Math.floor((degree + 22) / 45);
            return directions[index];;
        };
    });
