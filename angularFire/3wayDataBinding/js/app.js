!function() {

  var app = angular.module('sampleApp', ['firebase']);

  app.controller('SampleCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {

    var ref = new Firebase('https://tryingout.firebaseio.com');

    // download the data into a loca object
    var syncObject = $firebaseObject(ref);

    // synchronize the object with a three-way data binding
    syncObject.$bindTo($scope, 'data');
  }]);

}();
