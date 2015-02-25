/**
 * Created by Anthony on 25/02/2015.
 */

angular.module("expApp")
    .directive("loginPanel", function(){
        return {
            restrict: 'E',
            templateUrl: '/html/login-panel.html',
            controller: function(){

            },
            controllerAs: 'login'
        };
    });