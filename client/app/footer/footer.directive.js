/**
 * Filename:    directive.js
 * Package:     Footer
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     12/08/2015.
 */

angular.module("expApp")
    .directive("footerBar", function(){
        return {
            restrict: 'E',
            //TODO replace: true,
            template: require('./footer.html')
        };
    });