/**
 * Created by Anthony on 25/02/2015.
 */

var Express = require("express");

var config = require("./../../config.json");

var router = Express.Router();

    router.get('/setup', function(req, res) {
        res.json(config.frontendConfig);
    });

    for (var page in config.frontendConfig.pages) {
        var urlPattern = "/pages/" + config.frontendConfig.pages[page].url;
        router.get(urlPattern, function (req, res) {
            res.json({"hello": "world"});
        });
    }
module.exports = router;
