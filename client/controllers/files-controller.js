'use strict';

var multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/' + req.params.category + '/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname);
    }
});

let upload = multer({ //multer settings
    storage: storage
}).single('file');

let add = function(req, res, next) {
    upload(req, res, function(err) {
        if (err) {
            next({
                message: "File not uploaded!",
                status: 401
            });
            return;
        }
    })
};

let controller = {
    add
};

module.exports = controller;
