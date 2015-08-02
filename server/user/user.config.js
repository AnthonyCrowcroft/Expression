/**
 * Filename:    config.js
 * Package:     User
 * Created:     02/08/15.
 */

var Promise = require("bluebird");
var User    = Promise.promisifyAll(require("./user.model"));
var config  = require("./../server.config.json").adminUsers;

    // create admin account from the server.config.json
module.exports = function() {
    Promise.map(config, function(user) {
        User.findOne({"email": user.email}, function(err, result){}).exec()

            .then(function(data) {
                if(!data) {
                    var newUser = new User();
                    newUser.local.email      = user.email;
                    newUser.local.password   = newUser.generateHash(user.password);
                    newUser.meta.privilege   = user.privilege;
                    newUser.meta.firstName   = user.firstName;
                    newUser.meta.created     = Date.now()
                    newUser.save(function(err) {
                        if(!err) {
                            console.log("account created for " + user.email);
                        }
                    });
                }
                else {
                    console.log("account already existing for " + user.email);
                }
            });
    });
};