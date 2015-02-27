(function() {
    var app = angular
        .module("expApp", ['ui.bootstrap', 'ui.router'])
            .config(function($locationProvider) {
                $locationProvider.html5Mode(true);

            });

    app.run( function ($http, $rootScope) {
        var config = $http.get("/setup")
            .success( function(data) {
                $rootScope.siteName = data.siteName;
                $rootScope.favicon = data.favicon;
                $rootScope.pages = data.pages;
                $rootScope.search = data.search;
                if (data.users == true) {
                    $rootScope.users = true;
                    $rootScope.loginState = "Login";
                } else {
                    $rootScope.users = false;
                }
            });


        $rootScope.prevent = function(evt) {
            evt.stopPropagation();
        };

    });

})();
