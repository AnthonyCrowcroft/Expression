/**
 * Filename:    config.js
 * Package:     Contact
 * Author:      Anthony Crowcroft
 * Created:     04/08/2015.
 */

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport();

transporter.sendMail({
    from: 'sender@address',
    to: 'receiver@address',
    subject: 'hello',
    text: 'hello world!'
});