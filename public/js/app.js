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
                    app.constant('SetupConfig', response.data);
                    angular.bootstrap(document, ['expApp']);
                }
            );
        }
    );

    app.run( function (SetupConfig, $rootScope) {
        if (SetupConfig.users == true) {
           $rootScope.loginState = "Login";
        }
        $rootScope.siteName = SetupConfig.siteName;


        $rootScope.prevent = function(evt) {
            evt.stopPropagation();
        };

    });

})();
