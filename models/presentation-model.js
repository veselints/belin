'use strict';

let mongoose = require('mongoose');
var SchemaTypes = mongoose.Schema.Types;

let presentationSchema = new mongoose.Schema({
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
        type: String
    }
});

mongoose.model('Presentation', presentationSchema);