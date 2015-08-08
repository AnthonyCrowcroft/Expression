/**
 * Filename:    config.js
 * Package:     Contact
 * Author:      Anthony Crowcroft
 *              Fourth Wall
 * Created:     04/08/2015.
 */

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport();

module.exports = function() {

    // TODO define a transport layer that uses SMTP server
};