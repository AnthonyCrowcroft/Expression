/**
 * Created by Anthony on 27/02/2015.
 */

angular.module("expApp")
    .config(function(SetupConfig, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        // home needs to always exist and has its own template
        $stateProvider
            .state('/home', {
                url: "/home",
                templateUrl: "/html/partial/home.html",
                resolve:{
                    homeData: function($http) {
                        var location = "/pages/home";
                        return $http.get(location);
                    }
                },
                controller: "HomeController as home"
            });

        angular.forEach(SetupConfig.pages, function(page) {
            $stateProvider.state("/" + page.url, {
                url: "/" + page.url,
                templateUrl: "/html/partial/" + page.type + ".html",
                resolve:{
                    pageData: function($http) {
                        var location = "/pages/" + page.url;
                        return $http.get(location);
                    }
                },
                controller: 'PageController as page'
            })
        });
    });