'use strict'

let multer = require('multer');

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
    upload(req, res, function(err) {
        if (err) {
            next(err);
            return;
        }
        res.status(201);
    });
};

let controller = {
    add
};

module.exports = controller;
