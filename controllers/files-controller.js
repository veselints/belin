'use strict'

let multer = require('multer');
let mongoose = require('mongoose');

require('../models/user-model');
let User = mongoose.model('User');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './client/uploads/' + req.params.category + '/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({
    storage: storage
}).single('file');

let add = function(req, res, next) {
    var authKey = req.headers['x-auth-key'];

    User.findOne({
        'authKey': authKey
    }, function(err, user) {
        if (err) {
            next(err);
            return;
        } else if (user === null) {
            next({
                message: "Authentication failed!",
                status: 401
            });
            return;
        }

        upload(req, res, function(err) {
            if (err) {
                next(err);
                return;
            }
            res.status(201);
        });
    });
};

let controller = {
    add
};

module.exports = controller;
