/**
 * Created by Anthony on 27/02/2015.
 */

angular.module("expApp")
    .config(function(setupConfig, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        // home needs to always exist and has its own template
        $stateProvider
            .state('/home', {
                url: "/home",
                templateUrl: "/html/partial/home.html"
            });

        angular.forEach(setupConfig.pages, function(page) {
            $stateProvider.state("/" + page.url, {
                url: "/" + page.url,
                templateUrl: "/html/partial/" + page.type + ".html"
            })
        });
    });