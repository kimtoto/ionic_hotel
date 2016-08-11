var app = angular.module('App');
    app.controller('RestaurantController', function($scope, $http) {

        $scope.page = 0;
        $scope.total = 1;
        $scope.restaurants = [];

        $scope.getRestaurants = function() {
            $scope.page++;
            $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?page=' + $scope.page)
                 .success(function(response) {
                      angular.forEach(response.restaurants, function(restaurant) {
                          $scope.restaurants.push(restaurant);
                      });
                      $scope.total = response.totalPages; //전체 페이지수를 저장
                      $scope.$broadcast('scroll.infiniteScrollComplete');
                 })
                 .error(function(error) {
                      $scope.$broadcast('scroll.infiniteScrollComplete');
                      console.log(err);
                 });
        };
        // 페이지 로딩시에 이벤트를 발생시켜야 한다.(무한 스크롤)
        $scope.getRestaurants();
    });
