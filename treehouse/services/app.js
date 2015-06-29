/**
*
* $http - A service for making ajax calls and handling their responses
* It also utilazies promises
*
*/


angular.module('myApp', [])

  .factory('People', function($http) {
    var task = this;
    var people = [];

    $http.get('example.json')
      .success(function(response) {
        task.people = response;
      })
      .error(function(err) {
        alert(err);
      });

      return {
        get: function() {
          if(people.length === 0) {
            $http.get('people.json')
              .success(function(response) {
                œ
              })
          }
          return people;
        }
      };
  })
  .controller('stageCtrl', ['People', function(People) {


    this.people = People.get();

    }]);
