/**
 * Filename:    directive.js
 * Package:     Nav
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     23/02/2015.
 */

angular
    .module("expApp")
    .directive("navTop", function(SetupConfig){
        return {
            restrict: 'E',
            //TODO replace: true,
            template: require('./nav.html'),
            controller: function() {
                this.siteName = SetupConfig.siteName;
                this.search = SetupConfig.search;
                this.contact = SetupConfig.contact;
                this.users = SetupConfig.users;
                var pages = [];
                angular.forEach(SetupConfig.pages, function (page) {if (page.nav) pages.push(page)});
                this.pages = pages;
                this.autoClose = function() { return $rootScope.windowSize.width > 767 };
                this.navCollapsed = true;
                this.userCollapsed = true;

            },
            controllerAs: 'nav'
        };
    });