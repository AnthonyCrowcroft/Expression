var Express = require("express");

var router = Express.Router();

module.exports = function(){

    router.get('/success', isLoggedIn, function(req, res) {
        res.redirect('/profile');
    });

    router.get('/unsuccess', function(req, res) {
        res.redirect('/');
    });

    // runs the logout function
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    return router
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/user/unsuccess');
}