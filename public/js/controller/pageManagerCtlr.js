/**
 * Created by Michael on 6/07/2015.
 */
angular.module("expApp")
    .controller('PageManagerController', function ($rootScope, $scope, $modal){

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

            $rootScope.form = {};

        };
    });