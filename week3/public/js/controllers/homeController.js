angular.module("tinyurlApp")
    .controller("homeController", ["$scope", "$http", "$location", function($scope, $http, $location) {
        $scope.submit = function() {
            $http.post("/api/v1/urls", {
                longUrl: $scope.longUrl
            }).then(function successCallback(response) {
                $location.path("/urls/" + response.data.shortUrl);
                console.log(response.data.shortUrl);
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    }]);
