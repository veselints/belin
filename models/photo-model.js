'use strict';

let mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

let photoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    area: {
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
    image: {
        type: String
    }
});

mongoose.model('Photo', photoSchema);