/**
 * Created by Anthony on 25/02/2015.
 */

angular.module("expApp")
    .directive("loginPanel", function(){
        return {
            restrict: 'E',
            templateUrl: '/html/login-panel.html',
            controller: function($http){
                this.user = {};
                this.signIn = function(input){
                    if (this.user.email && this.user.password) {
                        console.log(input);
                    } else {
                        console.log("A field did not pass validation");
                    }
                };
                this.signUp = function(input){
                    if (this.user.email && this.user.password && this.user.passConfirm) {
                        if (this.user.password == this.user.passConfirm) {
                            console.log(input);
                            $http.post('/local/signup', {
                                "email": this.user.email,
                                "password": this.user.password
                            }).then(function(err, data){
                                if (err)
                                    return err;
                                if(data) {
                                    console.log("something was returned");
                                    return data;
                                } else {
                                    console.log("no data returned");

                                }
                            })
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