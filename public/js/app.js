(function() {
    var app = angular
        .module("expApp", ['ui.bootstrap']);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

})();
