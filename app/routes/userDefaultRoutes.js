var Express = require("express");

var router = Express.Router();

module.exports = function(){

    // runs the logout function
    router.get('/logout', function(req, res) {
        req.logout();
        res.json({type: "info", msg: "now logged out"});
    })(req, res, next);


    return router
};
