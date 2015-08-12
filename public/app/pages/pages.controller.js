/**
 * Filename:    controller.js
 * Package:     Pages
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     03/03/2015.
 */

angular.module("expApp")
    .controller("PageController", function($location, $http, pageData){

        this.data = pageData.data;

    });