var Express = require("express");

var router = Express.Router();

module.exports = function(){

    router.get('/success', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    router.get('/unsuccess', function(req, res) {
        res.render('index.ejs');
    });

    // runs the logout function
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/user/unsuccess');
    });


    return router
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/user/unsuccess');
}