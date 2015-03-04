/**
 * Created by Anthony on 3/03/2015.
 */

angular.module("expApp")
    .controller("PageController", function($location, $http, pageData){
        this.data = pageData.data;

    });