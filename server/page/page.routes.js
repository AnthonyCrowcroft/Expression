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
var auth        = require("./../middleware/authentication");

var router = Express.Router();

    // Sends core page data to frontend
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

    // create page data
router.post("/pages/:id", auth.isStaff, function(req, res) {
    if(req.body.type && req.body.url && req.body.title && req.body.nav) {

        Page.findOne({"url": req.params.id}, function(err, result){}).exec()

            .then(function(data) {
                if(!data) {
                    var newPage = new Page(req.body);
                    newPage.save(function(err) {
                        if(!err) {
                            res.send("Page created ");
                        }
                    });
                }
                if(data) {
                    res.send("Page already exists sorry try again");
                }
            });
    }
});

    // Serve page data
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

    // Update page data
router.put("/pages/:id", auth.isStaff, function(req, res) {
    if(req.body.type && req.body.url && req.body.title && req.body.nav) {

        Page.update({"url": req.params.id}, req.body, function(err, num){}).exec()

            .then(function(data) {
                if(!data) {
                    res.status(404).json({title: "page not found"});
                }
                if(data) {
                    res.json({"message": "Updated"});
                }
    });
}});

    // Delete page data
router.delete("/pages/:id", auth.isStaff, function(req, res){
    console.log(req.params.id);
    Page.remove({"url": req.params.id}, function(err){
        console.log(err);
        if(!err){
            res.json({"message": "Deleted"});
        }
    });

});

module.exports = router;