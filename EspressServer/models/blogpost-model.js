'use strict';

let mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

let blogpostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        required: true,
        unique: true
    },
    publishedOn: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

mongoose.model('Blogpost', blogpostSchema);