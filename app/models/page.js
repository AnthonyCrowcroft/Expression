/**
 * Created by Anthony on 26/02/2015.
 */

var mongoose = require('mongoose');

var pageSchema = mongoose.schema({
    url: String,
    title: String,
    nav: Boolean,
    type: String,
    content: [
        {
            id: String,
            heading: String,
            body: String,
            class: String,
            author: String
        }
    ],
    form: [
        {
            id: String,
            route: String,
            fields:[
                {
                    type: String,
                    name: String,
                    required: Boolean
                }
            ]
        }
    ],
    image: [
        {
            id: String,
            location: String,
            width: Number,
            height: Number
        }
    ]
});

module.exports = mongoose.model('Page', pageSchema);