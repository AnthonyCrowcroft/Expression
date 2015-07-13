/**
 * Created by Anthony on 25/02/2015.
 */

var Express = require("express");
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
    pageServices.initialise(function(data){
        router.get("/pages/home", function (req, res){
           res.json(data);
        });

    });

    pageServices.getPagesSimple(function(data){
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
    });




    router.post('/pages/create', function(req, res){
        console.log(req);
    });



module.exports = router;
