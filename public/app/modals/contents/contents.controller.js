/**
 * Filename:    controller.js
 * Package:     Modals > Contents
 * Author:      Michael Crowcroft
 *              Fourth Wall
 * Created:     06/07/2015.
 */

angular.module("expApp")
    .controller('ContentController', function ($rootScope, $scope, $modal){

        // External functions
        this.create = function(){
            $rootScope.modalState = "Create";
            this.createModal('lg');
        };

        this.edit = function(){
            $rootScope.modalState = "Edit";
            this.createModal('lg');
        };

        this.delete = function(){
            this.deleteModal('md');
        };
        
        // Internal functions
        this.createModal = function (size) {
            var modalCreate;
            var createScope = $scope.$new();
            createScope.ok = function () {
                modalCreate.close(createScope.selected);
            };
            createScope.cancel = function () {
                modalCreate.dismiss('cancel');
            };

            modalCreate = $modal.open({
                    animation: true,
                    template: '<content-create></content-create>',
                    size: size,
                    backdrop: 'static',
                    keyboard: false,
                    scope: createScope
                }
            )};

        this.deleteModal = function (size) {
            var modalDelete;
            var deleteScope = $scope.$new();
            deleteScope.ok = function () {
                modalDelete.close(deleteScope.selected);
            };
            deleteScope.cancel = function () {
                modalDelete.dismiss('cancel');
            };

            modalDelete = $modal.open({
                    animation: true,
                    template: '<content-delete></content-delete>',
                    size: size,
                    backdrop: 'static',
                    keyboard: false,
                    scope: deleteScope
                }
            );
        };

        //Where the forms in the modal input data
        $rootScope.form = {};

        });