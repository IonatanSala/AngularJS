




!function() {
    
    'use strict'
    angular
        .module('myApp', [])
        
        .controller('MainCtrl', ['$scope', 'arrayFactory', function($scope, arrayFactory) {
          
            $scope.add = function(el) {
                
                arrayFactory.addElement(el);
            };
            
            $scope.elements = arrayFactory.getElements();
            
            $scope.remove = function() {
                
                arrayFactory.removeLastElement(); // function() { msgs.pop() } so then when you call remove(), it executes the function
                
            }
                
            
        }])
    
        .controller('AnotherCtrl', ['$scope', 'arrayFactory', function($scope, arrayFactory) {
            
            $scope.add = function(el) {
                
                arrayFactory.addElement(el);
            };
            
            $scope.elements = arrayFactory.getElements();
            
            $scope.remove = function() {
                
            arrayFactory.removeLastElement(); // function() { msgs.pop() } so then when you call remove(), it executes the function
                
            }
            
        }])
    
        .factory('arrayFactory', [function(win) {
            var msgs = [];
            
            return {
                
                addElement: function(msg) {
                   msgs.push(msg);
                },
                
                getElements: function() {
                    return msgs;   
                },
                
                removeLastElement: function() {
                    msgs.pop();
                }
            
            };
            
        }]);
}();