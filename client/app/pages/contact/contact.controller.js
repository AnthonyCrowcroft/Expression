/**
 * Filename:    controller.js
 * Package:     Pages > Contact
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     14/08/2015.
 */

angular.module("expApp")
    .controller("ContactController", function($location, $rootScope, $http, contactData){

        this.data = contactData.data;
        $rootScope.currentPage = contactData.data;

        this.contactTypes = {
            "facebook"     : 'fa-facebook-official',
            "google-plus"  : 'fa-google-plus',
            "phone"        : 'fa-phone',
            "fax"          : 'fa-fax',
            "twitter"      : 'fa-twitter',
            "tumblr"       : 'fa-tumblr',
            "linkedin"     : 'fa-linkedin'
        };

    });