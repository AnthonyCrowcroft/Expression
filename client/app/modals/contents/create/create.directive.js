/**
 * Filename:    directive.js
 * Package:     Modals > Contents > Create
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     06/07/2015.
 */

angular.module("expApp")
    .directive("contentCreate", function($rootScope, $http) {
        return {
            restrict: 'E',
            replace: true,
            template: require('./create.html'),
            controller: function(){
                if($rootScope.createState == "Edit") {
                    this.form = angular.copy($rootScope.currentPage);
                }
                else {
                    this.form = {
                        content: [{
                            heading: null,
                            body: null,
                            class: null,
                            author: $rootScope.user.firstName
                        }]
                    };
                }
                this.addContent = function(id) {
                    this.form.content.splice(this.form.content.indexOf(id) + 1, 0,{
                        heading: null,
                        body: null,
                        class: null,
                        author: $rootScope.user.firstName
                    });
                };
                this.removeContent = function(id) {
                    if (this.form.content.length > 1) {
                        this.form.content.splice(this.form.content.indexOf(id), 1);
                    }
                };
                this.createPage = function() {
                    $http.post('/pages/' + this.form.url, this.form).then(function(response) {
                        console.log(response.data);
                    });
                };
                this.editPage = function() {
                    $http.put('/pages/' + this.form.url, this.form).then(function(response) {
                        console.log(response.data);
                    });
                };
            },
            controllerAs: 'create'
        }});