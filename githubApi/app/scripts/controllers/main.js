'use strict';

/**
 * @ngdoc function
 * @name githubApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubApiApp
 */
angular.module('githubApiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
