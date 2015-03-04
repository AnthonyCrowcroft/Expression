/**
 * Created by Anthony on 4/03/2015.
 */

var config = require('./../../config.json');

var textSample = { "heading" : "Meaningless Text",
                   "body" : "Meaningless Text",
                   "class" : "Meaningless Class",
                   "author" : "Meaningless Persons Name" };

var formSample = {"form" : "Meaningless Form Data"};

module.exports = function(){
    var pages = config.frontendConfig.pages;
    if (pages.length != 0) {
        for (var page in pages) {
            console.log(pages[page].url);
        }
    }
};