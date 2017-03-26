'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/forum-model');
let Forum = mongoose.model('Forum');

require('../models/user-model');
let User = mongoose.model('User');

let getCount = function(req, res, next) {
    Forum.count({}, function(err, count) {
        if (err) {
            next(err);
            return;
        }
        res.status(200);
        res.json(count);
    });
};

let getAll = function(req, res, next) {
    Forum.find({})
        .sort('-year')
        .exec(function(err, forums) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(forums);
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

    Forum.findOne({
        '_id': currentId
    }, function(err, forum) {
        if (err) {
            next(err);
            return;
        } else if (forum === null) {
            next({
                message: "Forum not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(forum);
    });
};

let create = function(req, res, next) {
    var newForum = new Forum(req.body);
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

        newForum.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(err);
                return;
            } else {
                res.status(201);
                res.json(newForum);
            }
        });
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newForum = new Forum(req.body[i]);
        var imageName = newForum.imageName;
        var imagePath = './files/forums/' + imageName;
        var bitmap = fs.readFileSync(imagePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newForum.image = bufer;

        newForum.save(function(err) {
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
    getAll,
    getById,
    create,
    bulckCreate
};

module.exports = controller;
