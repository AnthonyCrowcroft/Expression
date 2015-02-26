/**
 * Created by Anthony on 26/02/2015.
 */

var mongoose = require('mongoose');

var pageSchema = mongoose.schema({
    title: String,
    content: [
        {
            heading: String,
            body: String,
            class: String,
            author: String
        }
    ]

});

module.exports = mongoose.model('Page', pageSchema);