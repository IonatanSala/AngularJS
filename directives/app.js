/**
* Directives are markers on a DOM element that attach new
* behaviour to that DOM element or even transform
* the DOM element and it's children.
*
* Whe you're writing an Angular JS application
* , you should be able to understand the behaviour and intent from just the HTML
*
* And you're likely using custom directives to write expressive HTML
*
* Custom directives allow you to write HTML that expresses the behaviour
* of your application
*
*/

(function() {


  angular.module('myApp',[])

/**
* Writing Custom Directives
*
* Template-expanding Directives are the simplest:
*   define a custom tag of attribute that is expanded or replaced
*   can include Controller logic, if needed
*
* Directives  ca also be used for:
*   Expressing complex UI
*   Calling events and registering event handlers
*   Reusing common components
*
* In your HTML the name of the directive would be
* <example-directive></example-directive> because the dash translates
* to camelCase in JavaScript.
*
* Use Element Directives for UI widgets and Attributes Directives
* for mixin behaviours.......... like a tooltip
*/
  .directive('exampleDirective',function(){
    return {
      restrict: 'E',  // type of directive 'E', for element
      templateUrl: 'templates/example.html',  // specifies the template for this direcitve
      controller: function() {
        this.title = "This is the example.html page";
      },
      controllerAs: 'example' // Alias to use in this directive to refer to this controller
    };
})

})(); // end closure
