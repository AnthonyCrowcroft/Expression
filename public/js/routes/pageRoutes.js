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
                controller: "PageController as content"
            });

        angular.forEach(SetupConfig.pages, function(page) {
            $stateProvider.state("/" + page.url, {
                url: "/" + page.url,
                templateUrl: "/html/partial/" + page.type + ".html",
                controller: "PageController as content"
            })
        });
    });