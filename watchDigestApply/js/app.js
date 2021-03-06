/* 
	Understanding $watch, $digest and $apply

	When you create a data binding from somewhere in your view to a variable on the $scope object, AngularJS creates a "watch" internally. A watch means that AngularJS watches changes in the variable on the $scope object. The framework is "watching" the variable. Watches are created using the $scope.$watch() function which I will cover later in this text.

	At key points in your application AngularJS calls the $scope.$digest() function. This function iterates through all watches and checks if any of the watched variables have changed. If a watched variable has changed, a corresponding listener function is called. The listener function does whatever work it needs to do, for instance changing an HTML text to reflect the new value of the watched variable. Thus, the $digest() function is what triggers the data binding to update.

	Most of the time AngularJS will call the $scope.$watch() and $scope.$digest() functions for you, but in some situations you may have to call them yourself. Therefore it is really good to know how they work.

	The $scope.$apply() function is used to execute some code, and then call $scope.$digest() after that, so all watches are checked and the corresponding watch listener functions are called. The $apply() function is useful when integrating AngularJS with other code.




*/


(function() {
	'use strict'

	angular.module('myApp', [])

	.controller('MyCtrl', ['$scope','Users', function($scope, Users) {
		

		$scope.user = Users;

		

		$scope.$watch('user', function(newValue, oldValue) {
			console.log('New value: ' + newValue);
			console.log('Old value: ' + oldValue);
		})

	}])

	.factory('Users', [function() {

		var user = [];

		return user;
		
	}])


})();