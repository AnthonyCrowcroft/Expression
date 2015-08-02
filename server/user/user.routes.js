/**
 * Filename:    routes.js
 * Package:     User
 * Created:     27/07/15.
 */

module.exports = function(app, passport) {

        // login user
    app.post("/local/login", function (req, res) {
        passport.authenticate('local-login', function(err, user) {
            if(!user) {
                res.send("login failed");
            }
            if(user) {
                req.login(user, function(err) {
                    if(!err) {
                        return res.json(req.user);
                    }
                });
            }
        })(req, res);
    });

        // signup new user
    app.post("/local/signup", function (req, res) {
        passport.authenticate('local-signup', function(err, user) {
            if(!user) {
                res.send("signup failed");
            }
            if(user) {
                res.send("signup was successful");
            }
        })(req, res);
    });

        // logout user
    app.post("/local/logout", function (req, res) {
        req.logout();
        res.send("you are logged out");
    });
};
