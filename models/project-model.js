'use strict';

let mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

let projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    area: {
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
    file: {
        type: String,
        required: true
    }
});

mongoose.model('Project', projectSchema);