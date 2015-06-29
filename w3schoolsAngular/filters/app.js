angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope) {
		$scope.people = [{
			name: "Jonatan",
			age: 19,
			gender: "male"
		}, 
		{
			name: "Solomon",
			age: 17,
			gender: "male"
		}
		];
		$scope.money = [10, 20, 30, 40];
	}]);