// server.js

// set up ======================================================================
var Express  = require('express');
var app      = Express();
var mongoose = require('mongoose');
var passport = require('passport');

var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


var configDB = require('./config/databaseConfig.js');
//mongoose.connect(configDB.url); // connect to our database       //comment this line to run without confuguring and running a mongo DB


require('./config/passportConfig')(passport); // pass passport for configuration

    // set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


// required for passport
app.use(session({ secret: 'BondrunswAterColor' }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
var staticFiles = require("./app/routes/staticRoutes.js");
app.use("/", staticFiles);

var userDefault = require("./app/routes/userDefaultRoutes.js");
app.use("/user", userDefault);

var userFacebook = require("./app/routes/userFacebookRoutes.js")(passport);
app.use("/facebook", userFacebook);

var userGoogle  = require("./app/routes/userGoogleRoutes.js")(passport);
app.use("/google", userGoogle);

var userLocal = require("./app/routes/userLocalRoutes.js")(passport);
app.use("/local", userLocal);

var userTwitter = require("./app/routes/userFacebookRoutes.js")(passport);
app.use("/twitter", userTwitter);

module.exports = app;
