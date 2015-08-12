/**
 * Filename:    directive.js
 * Package:     Modals > Contents > Delete
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     06/07/2015.
 */

angular.module("expApp")
    .directive("contentDelete", function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/modals/contents/delete/delete.html'

        }});