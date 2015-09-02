/**
 * Filename:    directive.js
 * Package:     Users > Profile
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     12/03/2015.
 */


angular.module("expApp")
    .directive("profilePanel", function(){
        return {
            restrict: 'E',
            replace: true,
            template: require('./profile.html'),
            controller: function($http, $rootScope) {
                this.logout = function() {
                    $http.post('/local/logout').then(function(response){
                        if(response) {
                            $rootScope.user = undefined;
                        }
                    });
                };
            },
            controllerAs: 'profile'
        };
    });