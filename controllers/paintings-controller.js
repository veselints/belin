'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/painting-model');
let Painting = mongoose.model('Painting');

var multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/paintings/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname);
    }
});

let upload = multer({ //multer settings
    storage: storage
}).single('file');

let getCount = function(req, res, next) {
    Painting.count({}, function(err, count) {
        if (err) {
            next(err);
            return;
        }
        res.status(200);
        res.json(count);
    });
};

let getByRegion = function(req, res, next) {
    let currentRegion = req.params.region;
    if (!currentRegion || currentRegion === "") {
        next({
            message: "Bad request!",
            status: 404
        });
        return;
    }

    Painting.find({
            'area': currentRegion
        }).sort('-year')
        .exec(function(err, paintings) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(paintings);
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

    Painting.findOne({
        '_id': currentId
    }, function(err, painting) {
        if (err) {
            next(err);
            return;
        } else if (painting === null) {
            next({
                message: "Painting not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(painting);
    });
};

let create = function(req, res, next) {
    var newPainting = new Painting(req.body.model);

    newPainting.save(function(err) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(err);
            return;
        } else {
            res.status(201);
            res.json(newPainting);
        }
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newPainting = new Painting(req.body[i]);
        var pictureNumber = (i + 1).toString();
        var imgPath = './img/' + pictureNumber + '.png';
        var bitmap = fs.readFileSync(imgPath);
        var imageBufer = new Buffer(bitmap).toString('base64');
        newPainting.picture = imageBufer;

        newPainting.save(function(err) {
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

        console.log(i);
    };

    res.json({});
};

let controller = {
    getByRegion,
    getById,
    create,
    bulckCreate
};

module.exports = controller;
