var Express = require("express");

var router = Express.Router();

module.exports = function(passport) {

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/user/success',
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true                 // allow flash messages
    }));


    // process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/user/success',
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true                 // allow flash messages
    }));

    router.get('/connect', function (req, res) {
        res.render('connect-local.ejs', {message: req.flash('loginMessage')});
    });
    router.post('/connect', passport.authenticate('local-signup', {
        successRedirect: '/user/success', // redirect to the secure profile section
        failureRedirect: '/local/connect', // redirect back to the signup page if there is an error
        failureFlash: true                  // allow flash messages
    }));

    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future
    // local -----------------------------------
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