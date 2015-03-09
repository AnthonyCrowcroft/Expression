var Express = require("express");

var router = Express.Router();

module.exports = function(passport) {

    // process the login form
    router.post('/login', passport.authenticate('local-login'),function(req, res) {

    });


    // process the signup form
    router.post('/signup', passport.authenticate('local-signup'), function(req, res){
            res.json({message: "fuck bitches"});

    });

    router.post('/connect', passport.authenticate('local-signup'), function(req, res){

    });

    router.get('/unlink', isLoggedIn, function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/user/success');
        });
    });

    return router
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/user/unsuccess');
}