'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/presentation-model');
let Presentation = mongoose.model('Presentation');

require('../models/user-model');
let User = mongoose.model('User');

let getCount = function(req, res, next) {
    Presentation.count({}, function(err, count) {
        if (err) {
            next(err);
            return;
        }
        res.status(200);
        res.json(count);
    });
};

let getByArea = function(req, res, next) {
    let currentArea = req.params.area;
    if (!currentArea || currentArea === "") {
        next({
            message: "Bad request!",
            status: 404
        });
        return;
    }

    Presentation.find({
            'area': currentArea
        }).sort('-year')
        .exec(function(err, presentation) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(presentation);
        });
};

let create = function(req, res, next) {
    var newPresentation = new Presentation(req.body);
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

    newPresentation.save(function(err) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(err);
            return;
        } else {
            res.status(201);
            res.json(newPresentation);
        }
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newPresentation = new Forum(req.body[i]);
        var fileName = newPresentation.fileName;
        var presentationArea = newPresentation.area;
        var filePath = './files/presentations/' + presentationArea + '/' + fileName;
        var bitmap = fs.readFileSync(filePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newPresentation.file = bufer;

        newPresentation.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(err);
                return;
            } else {

            }
        });

        console.log(fileName);
    };

    res.json({});
};

let controller = {
    getByArea,
    create,
    bulckCreate
};

module.exports = controller;