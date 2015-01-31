/**
 * Created by Anthony on 31/01/2015.
 */

    //required packages
var Express = require('express');


    //required modules


    //establishing server
var app = Express();

    //Passport Stuff


    //routes static files from public folder
app.use(Express.static('public'));

    //define Port settings and console log the port
var port = 8000;
app.listen(port);
console.log("Express server listening on port " + port);