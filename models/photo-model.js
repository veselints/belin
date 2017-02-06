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

mongoose.model('Photo', photoSchema);