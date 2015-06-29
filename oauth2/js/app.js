angular
  .module('myApp',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/login.html',
        controller: 'testCtrl as test'
      })
      .when('/login', {
        templateUrl: 'templates/secure.html'
      })
      .otherwise({
        redirectTo: '/'
      })

  })
