/**
* Modules are simple containers for various pieces of your application.
*
* angular.module('ExampleApp', ['allYouDependencies'])
* <body ng-app="ExampleApp">
*/
angular.module('ExampleApp',[])


/**
* Controller that connects business logic to the view
*/
.controller('ExampleCtrl', ['$scope', 'ExampleFactory', function($scope, ExampleFactory) {
  $scope.exampleFactory = new ExampleFactory();
}])

/**
* Services are basically just a constructor
*
* ExampleService.getFonts()
*/
.service('ExampleService', [function() {
  var fonts = ['Helvetica', 'Georgia'];

  return {
    getFonts: function() {
      return fonts;
    }
  }
}])

/**
* Factories return an object where you can run some code beforehand
*
* var example = new ExampleFactory();
* example.modifyingfonts(somehow);
*/
.factory('ExampleFactory', ['ExampleService', function(ExampleService) {
  return function() {
    var self = {
      fonts: []
    };

    self.modifyingFonts = function() {

    };

    // Init values
    self.fonts = ExampleService.getFonts();

    return self;
  };
}])


/**
* Filters format the value of an expresion for display to the user.
*
* {{ product.price | currency}}
*/
.filter('exampleFilter', [function() {
  return function(value) {
    return '[FILTERED]' + value + '[/FILTERED]'
  }
}])

/**
* Directives are markers on a DOM element that attach new
* behaviour to that DOM element or even transform
* the DOM element and it's children.
*
* Custom directives allow you to write HTML that expresses the behaviour
* of your application
*
* <tags-input ng-model="tags">
*   <auto-complete source="loadItems($query)"></auto-complete>
* </tags-input>
*/
.directive('exampleDirective', [function() {
  return {
    scope: {
      fontName: '=exampleDirective'
    },
    template: 'My {{ fontName }} is Here',
    link: function(scope, element, attrs) {
      element.css('background-color', 'red');
    }
  }
}]);
