(function() {
    var app = angular
        .module("expApp", ['ui.bootstrap'])
            .config(function($locationProvider) {
                $locationProvider.html5Mode(true);

            });

    app.run(function ($rootScope) {
        $rootScope.loginState = "Login";

        $rootScope.prevent = function(evt) {
            evt.stopPropagation();
        };

    });

})();
