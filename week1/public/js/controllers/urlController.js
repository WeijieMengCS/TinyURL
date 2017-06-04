angular.module("tinyurlApp")
  .controller("urlController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
    $http.get("/api/v1/urls/" + $routeParams.shortUrl).then(function successCallback(response) {

      $scope.longUrl = response.data.longUrl;
      $scope.shortUrl = response.data.shortUrl;
      $scope.shortUrlToShow = "http://localhost:3000/" + response.data.shortUrl;
    }, function errorCallback(response) {

    });
  }]);
