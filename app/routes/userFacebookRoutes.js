var Express = require("express");

var router = Express.Router();

module.exports = function(passport) {

    // send to facebook to do the authentication
    router.get('/auth', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    router.get('/auth/callback',
        passport.authenticate('facebook', {
            successRedirect: '/user/success',
            failureRedirect: '/user/unsuccess'
        }));

    // send to facebook to do the authentication
    router.get('/connect', passport.authorize('facebook', {scope: 'email'}));

    // handle the callback after facebook has authorized the user
    router.get('/connect/callback',
        passport.authorize('facebook', {
            successRedirect: '/user/success',
            failureRedirect: '/user/unsuccess'
        }));

    router.get('/unlink', isLoggedIn, function (req, res) {
        var user = req.user;
        user.facebook.token = undefined;
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