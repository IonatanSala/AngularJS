'use strict';

/**
 * @ngdoc directive
 * @name directivesApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('directivesApp')
  .directive('myDirective', function () {
    return {
      //template: '<h1>AngularJS Directives are Awesome!</h1>', 
      restrict: 'E',
      transclude: true,
      link: function(scope, element, attrs) {
				console.log(scope);
				console.log(element);
				console.log(attrs.info);
      }
    };
  });
