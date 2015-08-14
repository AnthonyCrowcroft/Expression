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
                    templateUrl: "./app/pages/home/home.html",
                    resolve:{
                        homeData: function($http) {
                            var location = "/pages/home";
                            return $http.get(location);
                        }
                    },
                    controller: "HomeController as home"
                });
        console.log(SetupConfig);
        angular.forEach(SetupConfig.pages, function(page) {
             if (page.type != 'home') {
                $stateProvider.state("/" + page.url, {
                    url: "/" + page.url,
                    templateUrl: "./app/pages/" + page.type + "/" + page.type +  ".html",
                    resolve:{
                        pageData: function($http) {
                            console.log( "./app/pages/" + page.type + "/" + page.type +  ".html");
                            var location = "/pages/" + page.url;
                            return $http.get(location);
                        }
                    },
                    controller: 'PageController as page'
                });
        }
        });
    });