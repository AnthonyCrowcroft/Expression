/**
 * Filename:    config.js
 * Package:     Page
 * Author:      Anthony Crowcroft
 * Created:     01/08/2015.
 */

var Page        = require('./page.model');

module.exports = function() {
    Page.findOne({"url": "home"}, function(err, result){
        if(result) {
            console.log("home page is pre established");
        } else {
            var home = new Page({
                "url"     : "home",
                "title"   : "Home Page",
                "nav"     : false,
                "type"    : "home",
                "content" : [
                    {
                    "id"        : "para01",
                    "heading"   : "Welcome to Your new Home Page",
                    "body"      : "This is a seed application intended to be customisable and expanded to create a dynamic site for all situations",
                    "class"     : "jumbotron",
                    "author"    : "Administration"
                    }
                ]
            });
            home.save(function(err) {
                if(!err){
                    console.log("home page has been established this start up")
                }
            });
        }
    });
};