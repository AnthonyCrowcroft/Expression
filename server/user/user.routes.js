/**
 * Filename:    routes.js
 * Package:     User
 * Created:     27/07/15.
 */

var Express     = require("express");
var User        = require('./user.model');


module.exports = function(app, passport) {

        // TODO login user
    app.post("/local/login", function (req, res) {
        res.send("login to be implemented");
    });

        // TODO signup new user
    app.post("/local/signup", function (req, res) {
        res.send("signup to be implemented");
    });

        // TODO logout user
    app.post("/local/logout", function (req, res) {
        res.send("logout to be implemented");
    });
};
