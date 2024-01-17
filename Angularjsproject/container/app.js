var app = angular.module('realEstateApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'container/component/home/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'container/component/about/about.html',
      controller: 'AboutController'
    })
    .when('/header', {
      templateUrl: 'container/component/header/header.html',
      controller: 'headerController'
    })
    .when('/login', {
      templateUrl: 'container/component/login/login.html',
      controller: 'loginController'
    })
    .otherwise({ redirectTo: '/' });    
});
