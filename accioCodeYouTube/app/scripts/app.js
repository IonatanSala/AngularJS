'use strict';

/**
 * @ngdoc overview
 * @name directivesApp
 * @description
 * # directivesApp
 *
 * Main module of the application.
 */
angular
  .module('directivesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/directive', {
        templateUrl: 'views/directive.html',
        controller: 'DirectiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
