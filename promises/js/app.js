/*

	The $q service provides us with deferred and promise implementations.

	Deferred represents a task that will finish in the future. 
	var deferred = $q.defer();

	The deferred object has 2 methods:
		1. resolve, is used to signal that the task has succeded
			deferred.resolve('Cool');
		2. reject, is used to signal that thte task has failed.
			deferred.reject(new Error('A terrible error has occured'));

	The deferred object has a property called promise which represents the promise:
		var promise = deferred.promise;
		promise.then(function(result) {
			console.log('Success: ' + result);
		}, function(error) {	
			console.error('Error: ' + error);
		});
*/

(function() {

	'use strict'
	var app = angular.module('myApp', []);

	app.controller('MyCtrl', ['$scope','$q', function($scope, $q) {
		$scope.fail = false;

		$scope.test = function() {
			var deferred = $q.defer();

			var promise = deferred.promise;
			promise.then(function(result) {
				alert('Success: ' + result);
			}, function(error) {
				alert('Error: ' + error);
			});

			if($scope.fail) {
				deferred.reject('sorry');
			} else {
				deferred.resolve('Cool');
			}
		};

		$scope.fail2 = false;

		$scope.test2 = function() {
			var deferred = $q.defer();
			var promise = deferred.promise;

			promise.then(function(result) {

				$scope.status2 = 'success pass 1 - ' + result;
				// need to propagate result to following promises
				return result + ' hussa!';
			}, function(error) {

				$scope.status2 = 'failure pass 1';
				return error;

			}).then(function(result) {
				alert('Success: ' + result);
			}, function(error) {
				alert('Error: ' + error);
			});

			if($scope.fail2) 
				deferred.reject('Bad luck');
			else
				deferred.resolve('Hurray');
		};

	}]);

}());