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
                            $http.post('/local/signup', {
                                "email": this.user.email,
                                "password": this.user.password
                            }).then(function(err, response){
                                if (err)
                                    console.log(err);
                                if(response) {
                                    var content = response.data;
                                    console.log(content);
                            }});
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