/**
 * Created by Anthony on 23/02/2015.
 */

angular.module("expApp")
    .directive("navPanel", function(setupConfig){
        return {
            restrict: 'E',
            templateUrl: '/html/nav-panel.html',
            controller: function(){
                this.siteName = setupConfig.siteName;
                this.search = setupConfig.search;
                this.users = setupConfig.users;
            },
            controllerAs: 'nav'
        };
    });

