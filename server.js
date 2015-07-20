// server.js

    // set up ======================================================================
var Express  = require('express');
var mongoose = require('mongoose');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var config = require('./config.json');
mongoose.connect(config.databaseConfig.url);       //comment this line to run without configuring and running a mongoDB


    // set up our express application
var app      = Express();
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


    // required for passport
app.use(session({ secret: 'BondrunswAterColor' }));


    // routes
var pageRoutes = require("./app/routes/pageRoutes.js");
app.use("/", pageRoutes);

var staticFiles = require("./app/routes/staticRoutes.js");
app.use("/", staticFiles);

module.exports = app;
