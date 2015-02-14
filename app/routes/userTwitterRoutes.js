var Express = require("express");

var router = Express.Router();

module.exports = function(passport) {

    // send to twitter to do the authentication
    router.get('/auth', passport.authenticate('twitter', { scope : 'email' }));

    // handle the callback after twitter has authenticated the user
    router.get('/auth/callback',
        passport.authenticate('twitter', {
            successRedirect: '/user/success',
            failureRedirect: '/user/unsuccess'
        }));

    // send to twitter to do the authentication
    router.get('/connect', passport.authorize('twitter', {scope: 'email'}));

    // handle the callback after twitter has authorized the user
    router.get('/connect/callback',
        passport.authorize('twitter', {
            successRedirect: '/user/success',
            failureRedirect: '/user/unsuccess'
        }));

    router.get('/unlink', isLoggedIn, function (req, res) {
        var user = req.user;
        user.twitter.token = undefined;
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