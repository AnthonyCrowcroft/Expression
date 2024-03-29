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

    app.run( function (SetupConfig, $rootScope, $window) {
        if (SetupConfig.users == true) {
            $rootScope.loginState = "Login";
            $rootScope.modalState = "Edit";
        }
        if (SetupConfig.user) {
            $rootScope.user = SetupConfig.user;
        }
        else {
            $rootScope.user = undefined;
        }
        $rootScope.siteName = SetupConfig.siteName;

        $rootScope.prevent = function(evt) {
            evt.stopPropagation();
        };
        var pageSize = angular.element($window);
        $rootScope.$watch(
            function () {
                return {width: $window.innerWidth, height: $window.innerHeight};
            },
            function (value) {
                $rootScope.windowSize = value;
            },
            true
        );

        pageSize.bind('resize', function(){
            $rootScope.$apply();
        });
    });

})();
