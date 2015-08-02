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