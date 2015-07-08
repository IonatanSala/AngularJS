 var myApp = angular.module('MyApp', ['satellizer'])

  myApp.config(function($authProvider) {

    $authProvider.facebook({
      clientId: '624059410963642'
    });

    $authProvider.google({
      clientId: '1019435527113-231sqmu51jsmu65v9ekmst18v1mg0me9.apps.googleusercontent.com'
    });


    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

  });


  myApp.controller('LoginCtrl', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

  });
