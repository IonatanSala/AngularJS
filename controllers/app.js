/**
* Controllers are where we define our app's behavior by defiing
* functions and values
*
*/

// Wrapping your Javascript into a closure is a good habbit
(function() {

  var app = angular.module('myApp', []);

  app.controller('exampleCtrl', function() {
     this.person = user;
  });

  var user = {
    name: "Jonatan",
    age: 19,
    gender: "male"
  };

})();
