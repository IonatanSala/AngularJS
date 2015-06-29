'use strict';

(function() {

  angular
    .module('uiRouterApp',['ui.router'])

    .controller('myCtrl', [function() {
      this.title = "Learning About ui-router";
    }])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('settings', {
          url: "/settings",
          templateUrl: "templates/settings.html"
        })
        .state("settings.profile", {
          url: "/profile",
          templateUrl: "templates/profile.html"
        })
        .state('settings.account', {
          url: "/account",
          templateUrl: "templates/account.html"
        })
        .state('settings.account.test', {
          url: "/test",
          templateUrl: "templates/test.html"
        });

      $urlRouterProvider.otherwise('/settings/profile')


    }]);

}());
