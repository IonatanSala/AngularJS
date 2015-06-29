var app = angular.module("myApp", []);

// directive

app.directive("test", function(){
	 return function() {
	 	console.log("Hi");
	 }
	
});