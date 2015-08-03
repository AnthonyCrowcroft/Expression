/**
 * Created by Anthony on 25/02/2015.
 */

angular.module("expApp")
    .directive("loginPanel", function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/html/login-panel.html',
            controller: function($http, $rootScope){
                this.user = {};
                this.signIn = function(){
                    if (this.user.email && this.user.password) {
                        $http.post('/local/login', {
                            "email": this.user.email,
                            "password": this.user.password
                        }).then(function(response){
                            if(response) {
                                if (response.data.user != false) {
                                    $rootScope.user = response.data.user;
                                }
                            }
                        });
                    } else {
                        console.log("A field did not pass validation");
                    }
                };
                this.signUp = function(){
                    if (this.user.email && this.user.password && this.user.passConfirm) {
                        if (this.user.password == this.user.passConfirm) {
                            $http.post('/local/signup', {
                                "email": this.user.email,
                                "password": this.user.password,
                                "name": this.user.name
                            }).then(function(response){
                                if(response) {
                                    $rootScope.alerts.push(response.data);
                                }

                            });
                        } else {
                            console.log("Passwords don't match");
                        }
                    } else {
                        console.log("Email didn't pass validation");
                    }
                };
            },
            controllerAs: 'login'
        };
    });