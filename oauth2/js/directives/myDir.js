angular
  .module('myApp',['ngRoute'])
  .directive('myDir', function() {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        scope.fullName = attrs.first + ' ' + attrs.last;
      },
      template: "<h1> {{fullname}} </h1>"
    }
  })
