/**
 * Filename:    directive.js
 * Package:     Nav
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     23/02/2015.
 */

angular.module("expApp")
    .directive("navTop", function(SetupConfig){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/nav/nav.html',
            controller: function() {
                this.siteName = SetupConfig.siteName;
                this.search = SetupConfig.search;
                this.users = SetupConfig.users;
                var pages = [];
                angular.forEach(SetupConfig.pages, function (page) {
                    if (page.nav) {
                        pages.push(page);
                    }
                });
                this.pages = pages;
            },
            controllerAs: 'nav'
        };
    });