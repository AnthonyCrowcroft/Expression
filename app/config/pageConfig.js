/**
 * Created by Anthony on 4/03/2015.
 */

var Page = require('../models/page');

module.exports = function(){
            Page.findOne({url: "home"}, function (err, data) {
                if (err)
                    console.log(err);

                if (data) {

                } else {
                    var home = new Page();
                    home.url = "home";
                    home.title = "Home Page";
                    home.nav = false;
                    home.type = "home";
                    home.content = [
                        {
                            id: "para01",
                            heading: "Welcome to Your new Home Page",
                            body: "This is a seed application intended to be customisable and expanded to create a dynamic site for all situations",
                            class: "jumbotron",
                            author: "Administration"
                        }
                    ];
                    home.save(function(err) {
                            return console.error(err);
                    });
                }
            });

};