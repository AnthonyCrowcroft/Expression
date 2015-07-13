/**
 * Created by Anthony on 5/03/2015.
 */

var Page = require('../models/page');

var textSample = { "heading" : "Meaningless Text",
    "body" : "Meaningless Text",
    "class" : "Meaningless Class",
    "author" : "Meaningless Persons Name" };

module.exports.initialise = function (callback) {
    Page.findOne({url: "home"}, function (err, data) {
        if (err)
            console.log(err);
        if (data) {
            console.log('home is pre established');
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
            home.save(function (err) {
                return console.error(err);
            });
            console.log('page has been created this start up');
            callback(data);
        }
    });
};

module.exports.getPagesSimple = function (callback) {
    Page.find(function (err, data) {
        if(err)
            return err;
        var simplifiedData = [];
        for(var page in data) {
            simplifiedData.push({
                "url": data[page].url,
                "title": data[page].title,
                "nav": data[page].nav,
                "type": data[page].type
            });
        };
        callback(simplifiedData);
    });
};

module.exports.getPage = function(ref, callback) {
    Page.findOne({url: ref}, function(err, data){
        if(err)
            return err;
        if (data) {
            callback(data);
        }
    });
};

module.exports.addPage = function   (obj) {
    console.log(obj);
};