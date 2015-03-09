var Express = require("express");

var router = Express.Router();

module.exports = function(passport) {

    // process the login form
    router.post('/login', passport.authenticate('local-login'),function(req, res) {

    });


    // process the signup form
    router.post('/signup', function(req, res, next){
        console.log("before auth");
        passport.authenticate('local-signup', function(err, user, info) {
            console.log("after auth");
            if (err)
                console.log(err);
            console.log(info);
            res.json({message: "we are getting somewhere"});
        });
    });

    router.post('/connect', passport.authenticate('local-signup'), function(err, req, res, next){

    });

    router.get('/unlink', isLoggedIn, function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            if (err)
                console.log(err);
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