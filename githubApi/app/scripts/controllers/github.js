'use strict';

/**
 * @ngdoc function
 * @name githubApiApp.controller:GithubCtrl
 * @description
 * # GithubCtrl
 * Controller of the githubApiApp
 */
angular.module('githubApiApp')
  .controller('GithubCtrl', ['myUsers',function (myUsers) {
    this.user = myUsers.contents;

    this.name = myUsers.name;
    console.log(this.user);
}]);
