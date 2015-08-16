/**
 * Filename:    config.js
 * Package:     Page
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     01/08/2015.
 */

var Page        = require('./page.model');
var config      = require("./../server.config.json").frontendConfig;

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
                    "heading"   : "Welcome to your new Home Page",
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

        // create configuration based on server.config.json
    if(config.contact) {
        Page.findOne({"url": "contact"}, function(err, result){
            if(result) {
                console.log("contact page is pre established");
            } else {
                var contact = new Page({
                    "url"     : "contact",
                    "title"   : "Contact Us",
                    "nav"     : true,
                    "type"    : "contact",
                    "content" : [
                        {
                            "id"        : "Type of Detail",
                            "heading"   : "Visual Representation",
                            "body"      : "Link"
                        }
                    ]
                });
                contact.save(function(err) {
                    if(!err){
                        console.log("contact page has been established this start up")
                    }
                });
            }
        });
    }
    if(!config.contact) {
        Page.findOne({"url": "contact"}, function(err, result){
            if(result) {
                Page.remove(result, function(err, removed) {
                    if(removed) {
                        console.log("contact was removed as no longer required");
                    }
                });
            }
    });
    }
};