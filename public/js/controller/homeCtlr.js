/**
 * Created by Anthony on 4/03/2015.
 */

angular.module("expApp")
    .controller("HomeController", function($location, $http, homeData){

        this.data = homeData.data;

    });