var Express = require("express");

var router = Express.Router();

module.exports = function(){

    // runs the logout function
    router.get('/logout', function(req, res) {
        req.logout();
        res.json({message: "now logged out"});
    });


    return router
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/user/unsuccess');
}