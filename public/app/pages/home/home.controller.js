/**
 * Filename:    controller.js
 * Package:     Pages > Home
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     04/03/2015.
 */

angular.module("expApp")
    .controller("HomeController", function($location, $http, homeData){

        this.data = homeData.data;

    });