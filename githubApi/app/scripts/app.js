'use strict';

/**
 * @ngdoc overview
 * @name githubApiApp
 * @description
 * # githubApiApp
 *
 * Main module of the application.
 */
angular
  .module('githubApiApp', [
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
      .when('/github', {
        templateUrl: 'views/github.html',
        controller: 'GithubCtrl',
        controllerAs: 'person'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
