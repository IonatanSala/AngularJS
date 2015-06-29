'use strict';

/**
 * @ngdoc service
 * @name githubApiApp.myUsers
 * @description
 * # myUsers
 * Service in the githubApiApp.
 */
angular.module('githubApiApp')
  .service('myUsers', ['$http',function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var user = this;
    this.name = 'Jonatan';
    user.contents = {};

      $http.get('https://api.github.com/users/IonatanSala')
        .then(function(data) {
          user.contents = data;
        });
  }]);
