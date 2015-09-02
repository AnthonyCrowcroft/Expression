/**
 * Filename:    config.js
 * Package:     Pages
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     27/02/2015.
 */

angular.module("expApp")
    .config(function(SetupConfig, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('/home', {
            url: "/home",
            template: require("./home/home.html"),
            resolve:{
                homeData: function($http) {
                    var location = "/pages/home";
                    return $http.get(location);
                }
            },
            controller: "HomeController as home"
        });

        if (SetupConfig.contact) {
            $stateProvider.state('/contact', {
                url: "/contact",
                template: require("./contact/contact.html"),
                resolve: {
                    contactData: function ($http) {
                        var location = "/pages/contact";
                        return $http.get(location);
                    }
                },
                controller: "ContactController as contact"
            });
        }
        angular.forEach(SetupConfig.pages, function(page) {
             if (page.type != 'home' && page.type != 'contact') {
                $stateProvider.state("/" + page.url, {
                    url: "/" + page.url,
                    template: require("./" + page.type + "/" + page.type +  ".html"),
                    resolve:{
                        pageData: function($http) {
                            var location = "/pages/" + page.url;
                            return $http.get(location);
                        }
                    },
                    controller: 'PageController as page'
                });
        }
        });
    });