/**
 * Created by Anthony on 25/02/2015.
 */

var Express = require("express");
var config = require("./../../config.json");
var pageServices = require('../services/pageServices');

var router = Express.Router();

    router.get('/setup', function(req, res) {
        var initConfig = config.frontendConfig;
        pageServices.getPagesSimple(function(data){
            initConfig.pages = data;
            res.json(initConfig);
        });
    });

    pageServices.getPagesSimple(function(data){
        for(page in data) {
            var urlPattern = "/pages/" + data[page].url;
            router.get(urlPattern, function (req, res) {
                var url = req.route.path;
                var entryName = url.toString().split("/").pop();
                pageServices.getPage(entryName, function(data){
                    res.json(data);
                });
            });
        };
    });

module.exports = router;
