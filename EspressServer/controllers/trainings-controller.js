'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/training-model');
let Training = mongoose.model('Training');

let getCount = function(req, res, next) {
    Training.count({}, function(err, count) {
        if (err) {
            next(err);
            return;
        }
        res.status(200);
        res.json(count);
    });
};

let getAll = function(req, res, next) {
    Training.find({})
        .sort('-year')
        .exec(function(err, trainings) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(trainings);
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

    Training.findOne({
        '_id': currentId
    }, function(err, training) {
        if (err) {
            next(err);
            return;
        } else if (training === null) {
            next({
                message: "Training not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(training);
    });
};

let create = function(req, res, next) {
    var newTraining = new Training(req.body);
    
    newTraining.save(function(err) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(err);
            return;
        } else {
            res.status(201);
            res.json(newTraining);
        }
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newTraining = new Training(req.body[i]);
        var imageName = newTraining.imageName;
        var imagePath = './files/trainings/' + imageName;
        var bitmap = fs.readFileSync(imagePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newTraining.image = bufer;

        newTraining.save(function(err) {
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