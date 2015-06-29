angular.module('myApp',[])
  .controller('mainCtrl',['$scope', function($scope) {
    $scope.title = "AngularJS is GREAT!";

    $scope.users = [];
    $scope.addUser = function() {
      $scope.users.push({name: $scope.name, age: $scope.age});
      $scope.name = '';
      $scope.age = '';
    }


}]);
