'use strict';

let mongoose = require('mongoose');

var SchemaTypes = mongoose.Schema.Types;

let publicationSchema = new mongoose.Schema({
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
    url: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    colaborators: {
    	type: String
    },
    interviewer: {
    	type: String
    }
});

mongoose.model('Publication', publicationSchema);