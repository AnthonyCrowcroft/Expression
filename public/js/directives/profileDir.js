/**
 * Created by Anthony on 12/03/2015.
 */

angular.module("expApp")
    .directive("profilePanel", function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/html/profile-panel.html',
            controller: function($http, $rootScope) {
                this.logout = function() {
                    console.log("getting here");
                    $rootScope.user = undefined;
                    $rootScope.alerts.push({msg:"You are now logged out see you next time.", type:"info"});

                };
            },
            controllerAs: 'profile'
        };
    });