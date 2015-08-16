/**
 * Filename:    directive.js
 * Package:     Users > Login
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     14/08/2015.
 */

angular.module('expApp')
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });