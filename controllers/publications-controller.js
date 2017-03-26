'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/publication-model');
let Publication = mongoose.model('Publication');

require('../models/user-model');
let User = mongoose.model('User');

let getCount = function(req, res, next) {
    Publication.count({}, function(err, count) {
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

    Publication.find({
            'area': currentArea
        }).sort('-date')
        .exec(function(err, publications) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(publications);
        });
};

let create = function(req, res, next) {
    var newPublication = new Publication(req.body);
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

        newPublication.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(err);
                return;
            } else {
                res.status(201);
                res.json(newPublication);
            }
        });
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newPublication = new Publication(req.body[i]);

        newPublication.save(function(err) {
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

        console.log(newPublication.url);
    };

    res.json({});
};

let controller = {
    getByArea,
    create,
    bulckCreate
};

module.exports = controller;
