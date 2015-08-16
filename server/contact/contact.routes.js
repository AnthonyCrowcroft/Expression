/**
 * Filename:    routes.js
 * Package:     Contact
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     04/08/2015.
 */

var Express = require("express");

var router = Express.Router();

        // TODO contact route to send
    router.post("/contact", function(req, res) {
       res.send("To be implemented");
    });

module.exports = router;