/**
 * Filename:    directive.js
 * Package:     Modals > Contents > Create
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     06/07/2015.
 */

angular.module("expApp")
    .directive("contentCreate", function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/modals/contents/create/create.html'

        }});