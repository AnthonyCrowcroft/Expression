/**
 * Created by Anthony on 23/02/2015.
 */

angular.module("expApp")
    .directive("navPanel", function(){
        return {
            restrict: 'E',
            templateUrl: '/html/nav-panel.html',
            controller: function(){

            },
            controllerAs: 'nav'
        };
    });

