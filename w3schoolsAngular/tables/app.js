var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope','$http', function($scope,$http) {
	var get = $http.get("http://www.w3schools.com/angular/customers.php");
	get.success(function(response) {
		$scope.names = response.records;
	});
}]);