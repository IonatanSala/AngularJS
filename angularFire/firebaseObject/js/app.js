(function() {
	'use strict'
	var myApp = angular.module('myApp', ['firebase']);

	myApp.controller('MyCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
		var ref = new Firebase('https://tryingout.firebaseIO.com');

		// obj holds the data at the provided Firebase.
		var obj = $firebaseObject(ref);

		// to take action after the data loads, use the $loaded() promise
		obj.$loaded()
			.then(function(data) {
				console.log(data.users);
				angular.forEach(data.users, function(key, value) {
					console.log('key: value:', key, value);
				})
				console.log('loaded record: ', obj.$id, obj.users)
			}, function(error) {
				console.error(error);
			});

	}]);

}());

