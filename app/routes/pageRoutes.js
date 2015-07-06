/**
 * Created by Anthony on 25/02/2015.
 */

var Express = require("express");
var async = require("async");
var config = require("./../../config.json");
var pageServices = require('../services/pageServices');
var Page = require('../models/page');


var router = Express.Router();

    router.get('/setup', function(req, res) {
        var initConfig = config.frontendConfig;
        pageServices.getPagesSimple(function(data){
            initConfig.pages = data;
            res.json(initConfig);
        });
    });

    pageServices.getPagesSimple(function(data){
        async.series([
        Page.findOne({url: "home"}, function (err, data, callback) {
            if (err)
                console.log(err);
            if (data) {
                console.log('fuck this');
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
                }).then();
            callback(null, 'home page built');
            }
        }),
        function routes(callback){
            for(page in data){
            var urlPattern = "/pages/" + data[page].url;
            router.get(urlPattern, function (req, res) {
                var url = req.route.path;
                var entryName = url.toString().split("/").pop();
                pageServices.getPage(entryName, function(data){
                    res.json(data);
                });
            });
            //router.post(urlPattern, function(req, res) {});  //update page
            //router.delete(urlPattern, function(req, res) {}); //delete page
            };
            callback(null, 'urls configured');
        }
]);

    });

    router.post('/pages/create', function(req, res){
        console.log(req);
    });



module.exports = router;
