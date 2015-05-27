/**
* Services give your Controller additional functionality, like:
*   Fetching JSON data from a web service with $http
*   Loggin message to the JavaScript console with $Log
*   Filterning an array with $filter
*
* The $http Service is how me make an async request to a server...
*   By using $http as a function with an options object:
*     $http({method: 'GET', url: '/products.json'});
*   Or using one of the shortcut methods:
*     $http.get('/products.json', {apiKey: 'myApiKey' });
*   Both return a Promise object with .success() and .error()
*   If we tell $http to fetch JSON , the result will be automatically decoded
*   into JavaScript objects and arrays
*/

angular.module('myApp', [])
  .controller('myCtrl', ['$http', function($http) {
    var store = this;

    store.products = {};
    $http
      .get('https://api.github.com/users/ionatansala')
      .success(function(data) {
        store.products = data;
      })

  }]);
