(function() {
    var app = angular
        .module("expApp", ['ui.bootstrap', 'ui.router'])
            .config(function($locationProvider) {
                $locationProvider.html5Mode({
                    enabled: true
                });
            });

    angular.element(document).ready(
        function() {
            var initInjector = angular.injector(['ng']);
            var $http = initInjector.get('$http');
            $http.get("/setup").then(
                function(response) {
                    app.constant('setupConfig', response.data);
                    angular.bootstrap(document, ['expApp']);
                }
            );
        }
    );

    app.run( function (setupConfig, $rootScope) {
        if (setupConfig.users == true) {
           $rootScope.loginState = "Login";
        }
        $rootScope.siteName = setupConfig.siteName;
        $rootScope.pages = setupConfig.pages;




        $rootScope.prevent = function(evt) {
            evt.stopPropagation();
        };

    });

})();
