'use strict';

let mongoose = require('mongoose');

// Defining user schema - similar as EF code first for db entry
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true
    },
    authKey: {
        type: String
    }
});

mongoose.model('User', userSchema);