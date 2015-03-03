/**
 * Created by Anthony on 3/03/2015.
 */

angular.module("expApp")
    .controller("PageController", function($location, $http){
        var location = "/pages" + $location.url();
        $http.get(location).then(function(response) {
            this.content = response.data;
            console.log(this.content);
        });

    });