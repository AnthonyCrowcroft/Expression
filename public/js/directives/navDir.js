/**
 * Created by Anthony on 23/02/2015.
 */

angular.module("expApp")
    .directive("navPanel", function(SetupConfig){
        return {
            restrict: 'E',
            templateUrl: '/html/nav-panel.html',
            controller: function(){
                this.siteName = SetupConfig.siteName;
                this.search = SetupConfig.search;
                this.users = SetupConfig.users;
            },
            controllerAs: 'nav'
        };
    });

