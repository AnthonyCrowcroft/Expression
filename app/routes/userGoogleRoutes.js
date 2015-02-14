var Express = require("express");

var router = Express.Router();

module.exports = function(passport) {

    // send to google to do the authentication
    router.get('/auth', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    router.get('/auth/callback',
        passport.authenticate('google', {
            successRedirect : '/user/success',
            failureRedirect : '/user/unsuccess'
        }));

    // send to google to do the authentication
    router.get('/connect', passport.authorize('google', {scope: ['profile', 'email']}));

    // the callback after google has authorized the user
    router.get('/connect/callback',
        passport.authorize('google', {
            successRedirect: '/user/success',
            failureRedirect: '/user/unsuccess'
        }));

    router.get('/unlink', isLoggedIn, function (req, res) {
        var user = req.user;
        user.google.token = undefined;
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