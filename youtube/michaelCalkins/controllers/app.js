
/**
 * Modules are simple containers for various pieces of your application.
 *
 * angular.module('ExampleApp', ['angular-loading-bar'])
 * <body ng-app='ExampleApp'>
 */
angular.module('ExampleApp', [])


/**
 * Controller that connects business logic to the view.
 */
.controller('ExampleCtrl', ['$scope', function($scope) {

  $scope.toggleShowHideBoolean = true;

  $scope.checkboxBoolean = true

  $scope.singleValue = 'default';

  $scope.arrayOfValues = [
    'simple',
    'explanations',
    'rock'
  ];

  $scope.arrayOfObjects = [
    {
      name: 'Rick James',
      value: '#$%@ yo couch!'
    },
    {
      name: 'Mr. James Brown',
      value: 'get on up'
    },
  ];

  $scope.runFunction = function() {
    $scope.functionValue = new Date();
  };

}]);
