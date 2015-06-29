var app = angular.module('myApp',[]);

app.controller('personCtrl', ['$scope', function($scope) {
	$scope.people = [{
		name: "Jonatan",
		age: 19,
		gender: "male"
	},
	{
		name: "Solomon",
		age: 17,
		gender: "male"
	}];
}]);