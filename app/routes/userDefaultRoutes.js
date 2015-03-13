var Express = require("express");

var router = Express.Router();

module.exports = function(){

    // runs the logout function
    router.get('/logout', function(req, res) {
        res.json({type: "info", msg: "now logged out"});
        //req.logout();
    });

    return router
};
