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
            "facebook"      : "fa fa-facebook-official fa-2x contact-icon-margin",
            "google-plus"   : "fa fa-google-plus fa-2x contact-icon-margin",
            "phone"         : "fa fa-phone fa-2x contact-icon-margin",
            "fax"           : "fa fa-fax fa-2x contact-icon-margin",
            "twitter"       : "fa fa-twitter fa-2x contact-icon-margin",
            "tumblr"        : "fa fa-tumblr fa-2x contact-icon-margin",
            "linkedin"      : "fa fa-linkedin fa-2x contact-icon-margin"

        };
        this.returnIcon = function(id) {
            console.log(id);
            angular.forEach(this.contactTypes, function(val, key) {
                if(key == id) {
                    console.log(val);
                    return val;
                }
            });
        };
    });