
!function() {
	'use strict';
	angular
		.module('sampleApp', ['firebase']) // injecting the firebase gives us access to $firebaseObject, $firebaseArray and	$firebaseAuth

		.controller('SampleController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
			
		}])


}();




