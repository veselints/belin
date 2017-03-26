'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/photo-model');
let Photo = mongoose.model('Photo');

require('../models/user-model');
let User = mongoose.model('User');

let getCount = function(req, res, next) {
    Photo.count({}, function(err, count) {
        if (err) {
            next(err);
            return;
        }
        res.status(200);
        res.json(count);
    });
};

let getByCategory = function(req, res, next) {
    let currentCategory = req.params.category;
    if (!currentCategory || currentCategory === "") {
        next({
            message: "Bad request!",
            status: 404
        });
        return;
    }

    Photo.find({
            'area': currentCategory
        }).sort('-year')
        .exec(function(err, photos) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(photos);
        });
};

let getById = function(req, res, next) {
    let currentId = req.params.id;
    if (!currentId || currentId === "") {
        next({
            message: "Bad request!",
            status: 404
        });
        return;
    }

    Photo.findOne({
        '_id': currentId
    }, function(err, photo) {
        if (err) {
            next(err);
            return;
        } else if (photo === null) {
            next({
                message: "Photo not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(photo);
    });
};

let create = function(req, res, next) {
    var newPhoto = new Photo(req.body);
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

        newPhoto.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(err);
                return;
            } else {
                res.status(201);
                res.json(newPhoto);
            }
        });
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newPhoto = new Forum(req.body[i]);
        var imageName = newPhoto.imageName;
        var photoCategory = newPhoto.category;
        var imagePath = './files/photos/' + photoCategory + '/' + imageName;
        var bitmap = fs.readFileSync(imagePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newPhoto.image = bufer;

        newPhoto.save(function(err) {
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

        console.log(imageName);
    };

    res.json({});
};

let controller = {
    getByCategory,
    getById,
    create,
    bulckCreate
};

module.exports = controller;
