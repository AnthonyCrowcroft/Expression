/**
 * Filename:    routes.js
 * Package:     Page
 * Author:      Anthony Crowcroft
 *              Fourth Wall
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
            if(req.user) {
                config.user = req.user;
            }
            config.pages = data;
            res.json(config);
            config.user = undefined;
        });
});

    // TODO create page data
router.post("/pages/:id", function(req, res) {
    Page.findOne({"url": req.params.id}, function(err, result){}).exec()

        .then(function(data) {
            if(!data) {
                var newPage = new Page();
                console.log(req.data);
                res.send("Create page here");
            }
            if(data) {
                res.send("Page already exists sorry try again");
            }
        });
});

    // serve page data
router.get("/pages/:id", function(req, res) {
    Page.findOne({"url": req.params.id}, function(err, result){}).exec()

        .then(function(data) {
            if(!data) {
                res.status(404).json({title: "page not found"});
            }
            if(data) {
                res.json(data);
            }
        });
});

    // TODO update page data
router.put("/pages/:id", function(req, res) {
    res.send("update to be implemented");
});

    // TODO delete page data
router.delete("/pages/:id", function(req, res){
    res.send("delete to be implemented");
});

module.exports = router;