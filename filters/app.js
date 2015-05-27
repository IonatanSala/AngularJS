/**
* The pipe says take the result from the first expression and send it into the second expression
* Filters work as follows
* Our recipe {{ data* | filter:otions* }}
*
* e.g uppercase & lowercase
* {{ 'jonatan' | uppercase }}   JONATAN
*
* limitTo
* {{ 'My Description' | limitTo:8 }}  My Descr
* <li ng-repeat="product in store.products | limitTo:3" >
*
* orderBy
* <li ng-repeat="prodcut in store.product | orderBy:'-price'">
* The minus infront of the price tells angular to order by
* price in descending order, from top to bottom
*
*/



(function() {

  var app = angular.module('myApp', []);

  // custom filter
  app.filter('valueTimesTwo', [function() {
    return function(value) {
      return value + value;
    }
  }]);



})();
