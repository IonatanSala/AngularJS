'use strict';

/**
 * @ngdoc function
 * @name githubApiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubApiApp
 */
angular.module('githubApiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
