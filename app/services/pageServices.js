/**
 * Created by Anthony on 5/03/2015.
 */

var Page = require('../models/page');

var textSample = { "heading" : "Meaningless Text",
    "body" : "Meaningless Text",
    "class" : "Meaningless Class",
    "author" : "Meaningless Persons Name" };


module.exports.getPagesSimple = function (callback) {
    Page.find(function (err, data) {
        if(err)
            return err;
        var simplifiedData = [];
        for(var page in data) {
            simplifiedData.push({
                "url": data[page].url,
                "title": data[page].title,
                "nav": data[page].nav,
                "type": data[page].type
            });
        };
        callback(simplifiedData);
    });
};

module.exports.getPage = function(ref, callback) {
    Page.findOne({url: ref}, function(err, data){
        if(err)
            return err;
        if (data) {
            console.log(data);
            callback(data);
        }
    });
};

module.exports.addPage = function(obj) {

};