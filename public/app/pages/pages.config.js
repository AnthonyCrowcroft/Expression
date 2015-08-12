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

        angular.forEach(SetupConfig.pages, function(page) {
            if (page.type == "home"){
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

            } else{
                $stateProvider.state("/" + page.url, {
                    url: "/" + page.url,
                    templateUrl: "/html/pages/" + page.type + ".html",
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