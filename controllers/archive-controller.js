'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/archive-model');
let Archive = mongoose.model('Archive');

require('../models/user-model');
let User = mongoose.model('User');

let getCount = function(req, res, next) {
    Archive.count({}, function(err, count) {
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

    Archive.find({
            'area': currentArea
        }).sort('-year')
        .exec(function(err, archives) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(archives);
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

    Archive.findOne({
        '_id': currentId
    }, function(err, archive) {
        if (err) {
            next(err);
            return;
        } else if (archive === null) {
            next({
                message: "Archive not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(archive);
    });
};

let create = function(req, res, next) {
    var newArchive = new Archive(req.body);
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

        console.log(newArchive);

        newArchive.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(err);
                return;
            } else {
                res.status(201);
                res.json(newArchive);
            }
        });
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newArchive = new Archive(req.body[i]);
        var fileName = newArchive.fileName;
        var areaName = newArchive.area;
        var filePath = './files/archive/' + areaName + '/' + fileName;
        var bitmap = fs.readFileSync(filePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newArchive.file = bufer;

        newArchive.save(function(err) {
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
    getById,
    create,
    bulckCreate
};

module.exports = controller;
