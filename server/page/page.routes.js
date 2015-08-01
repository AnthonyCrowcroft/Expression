/**
 * Filename:    routes.js
 * Package:     Page
 * Created:     25/02/2015.
 */

var Express     = require("express");
var Promise     = require("bluebird");
var config      = require("./../server.config.json").frontendConfig;
var Page        = Promise.promisifyAll(require('./page.model'));


var router = Express.Router();


    // sends core page data to frontend
router.get("/setup", function(req, res) {
    Page.find({}, {"url":1, "title":1, "nav":1, "type":1, "_id":0}, function(err, result){}).exec()

        .then(function(data){
            config.pages = data;
            res.json(config);
        });
});

    // create page data
router.post("/pages/:id", function(req, res) {
    res.send("create to be implemented");
});

    // serve page data
router.get("/pages/:id", function(req, res) {
    Page.findOne({"url": req.params.id}, function(err, result){}).exec()

        .then(function(data){
            if(!data) {
                res.status(404).json({title: "page not found"});
            } if(data) {
                res.json(data);
            }
        });
});

    // update page data
router.put("/pages/:id", function(req, res) {
    res.send("update to be implemented");
});

    // delete page data
router.delete("/pages/:id", function(req, res){
    res.send("delete to be implemented");
});

module.exports = router;