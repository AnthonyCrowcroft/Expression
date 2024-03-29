/**
 * Filename:    server.js
 * Package:     Core
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     23/02/2015
 */


var config = require('./server.config.json');

    // creates express application
var Express         = require('express');
var app             = Express();

    // connects to mongoDB
var mongoose        = require('mongoose');
mongoose.connect(config.databaseConfig.url);

    // require additional libraries for express
var flash           = require('connect-flash');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var session         = require('express-session');

    // use morgan to log all requests to console
var morgan          = require('morgan');
app.use(morgan('dev'));

    // configure passport for user auth
var passport        = require('passport');
require('./user/user.logic.js')(passport);

    // set up our express application
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

    // required for passport
app.use(session({
    secret  : 'BondrunswAterColor'
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

    // initial config
require("./page/page.config")();
require("./user/user.config")();

    // api routes
app.use("/", require("./page/page.routes"));
require("./user/user.routes")(app, passport);

    // contact routes
if(config.frontendConfig.contact) {
    app.use("/", require("./contact/contact.routes"));
}

    // static routes
var path            = require('path');
var staticPath = path.resolve(__dirname, './../', 'public');
app.use(Express.static(staticPath));

app.all('/noauth', function(req, res) {
    res.json({"message": "not authorised to view content"});
});

app.all('/*', function(req, res) {
    res.sendfile('index.html', {root: staticPath});
});

    //export app to be run in startup script
module.exports = app;
