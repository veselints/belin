'use strict';

let mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

let paintingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

mongoose.model('Painting', paintingSchema);