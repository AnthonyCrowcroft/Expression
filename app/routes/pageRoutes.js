/**
 * Created by Anthony on 25/02/2015.
 */

var Express = require("express");

var config = require("./../../config.json");

var router = Express.Router();

    router.get('/setup', function(req, res) {
        res.json(config.frontendConfig);
    });

module.exports = router;
