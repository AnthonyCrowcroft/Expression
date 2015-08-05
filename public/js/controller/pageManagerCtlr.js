/**
 * Created by Michael on 6/07/2015.
 */
angular.module("expApp")
    .controller('PageManagerController', function ($rootScope, $scope, $modal){

        //For opening the create and edit modals
        this.create = function(){
            $rootScope.modalState = "Create";
            this.open('lg');
        };

        this.edit = function(){
            $rootScope.modalState = "Edit";
            this.open('lg');
        };

        this.open = function (size) {
            var modalInstance;
            var modalScope = $scope.$new();
            modalScope.ok = function () {
                modalInstance.close(modalScope.selected);
            };
            modalScope.cancel = function () {
                modalInstance.dismiss('cancel');
            };

            modalInstance = $modal.open({
                    animation: true,
                    template: '<page-panel></page-panel>',
                    size: size,
                    backdrop: 'static',
                    keyboard: false,
                    scope: modalScope
                }
            );

            modalInstance.result.then(function (selectedItem) {
                $rootScope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });

            //Where the forms in the modal input data
            $rootScope.form = {};

        };

        //Opening the delete modal
        this.delete = function(){
            $rootScope.modalState = "Delete";
            this.delete('sm');
        };

        this.delete = function (size) {
            var modalDelete;
            var modalScope = $scope.$new();
            modalScope.ok = function () {
                modalDelete.close(modalScope.selected);
            };
            modalScope.cancel = function () {
                modalDelete.dismiss('cancel');
            };

            modalDelete = $modal.open({
                    animation: true,
                    template: '<page-delete></page-delete>',
                    size: size,
                    backdrop: 'static',
                    keyboard: false,
                    scope: modalScope
                }
            );
        };
    });