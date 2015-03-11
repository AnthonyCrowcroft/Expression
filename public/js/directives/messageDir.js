/**
 * Created by Anthony on 23/02/2015.
 */

angular.module("expApp")
    .directive("messagePanel", function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/html/message-panel.html',
            controller: function($rootScope) {
                $rootScope.alerts = [];

                this.close = function(index) {
                    console.log(index);
                    $rootScope.alerts.splice(index, 1);
                };
            },
            controllerAs: 'message'
        };
    });
