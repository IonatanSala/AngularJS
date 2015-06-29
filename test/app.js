var app = angular.module("myApp", []);

app.controller("MainCtrl", ['$scope', function($scope) {
	$scope.title = "To-do List";
	$scope.todos = ["This is the first todo"];
	$scope.newItem = "";

	$scope.add = function(item) {
		if($scope.newItem.length === 0) {

		} else {
			$scope.todos.push(item); 
		console.log($scope.todos);
		$scope.newItem = "";
		}
		
	};

	$scope.remove = function(item) {

		var indexOfItem = $scope.todos.indexOf(item);
		console.log(indexOfItem);

		$scope.todos.splice(indexOfItem, 1);
	}

	
}]);