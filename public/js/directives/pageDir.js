/**
 * Created by Michael on 6/07/2015.
 */
angular.module("expApp")
    .directive('pagePanel', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'html/page-panel.html'

    };
});