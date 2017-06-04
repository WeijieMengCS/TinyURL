var app = angular.module("tinyurlApp", ["ngRoute", "ngResource"]);

app.config(function($routeProvider) { //$-> 仅区分用
  $routeProvider
    .when("/", {
      templateUrl: "./public/views/home.html",
      controller: "homeController"
    })
    .when("/urls/:shortUrl", {
      templateUrl: "./public/views/url.html",
      controller: "urlController"
    });
});
