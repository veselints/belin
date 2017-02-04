'use strict';

let mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

let forumSchema = new mongoose.Schema({
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
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

mongoose.model('Forum', forumSchema);