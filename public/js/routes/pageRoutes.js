/**
 * Created by Anthony on 27/02/2015.
 */

angular.module("expApp")
    .config(function(setupConfig, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('/home', {
                url: "/home",
                templateUrl: "/html/partial/home.html"
            })
            .state('/contact', {
                url: "/contact",
                templateUrl: "/html/partial/contact.html"
            })
            .state('/about', {
                url: "/about",
                templateUrl: "/html/partial/about.html"
            });

        console.log(setupConfig);
    });