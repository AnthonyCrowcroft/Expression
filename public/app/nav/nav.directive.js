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
                this.contact = SetupConfig.contact;
                this.users = SetupConfig.users;
                var pages = [];
                angular.forEach(SetupConfig.pages, function (page) {
                    if (page.nav) {
                        pages.push(page);
                    }
                });
                this.pages = pages;
                this.navCollapsed = true;
                this.userCollapsed = true;
                this.autoClose = function() {
                    if($rootScope.windowSize.width > 767) {
                        this.userCollapsed = true;
                        return true;
                    }
                    else {
                        return false;
                    }
                };
            },
            controllerAs: 'nav'
        };
    });