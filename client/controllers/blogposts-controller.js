'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/blogpost-model');
let Blogpost = mongoose.model('Blogpost');

let getCount = function(req, res, next) {
    Blogpost.count({}, function(err, count) {
        if (err) {
            next(err);
            return;
        }
        res.status(200);
        res.json(count);
    });
};

let getAll = function(req, res, next) {
    Blogpost.find({})
        .sort('-publishedOn')
        .exec(function(err, blogposts) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(blogposts);
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

    Blogpost.findOne({
        '_id': currentId
    }, function(err, blogpost) {
        if (err) {
            next(err);
            return;
        } else if (blogpost === null) {
            next({
                message: "Painting not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(blogpost);
    });
};

let create = function(req, res, next) {
    var newBlogpost = new Blogpost(req.body);
    newBlogpost.publishedOn = new Date();
    
    newBlogpost.save(function(err) {
        if (err) {
            let error = {
                message: err.message,
                status: 400
            };
            next(err);
            return;
        } else {
            res.status(201);
            res.json(newBlogpost);
        }
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newBlogpost = new Blogpost(req.body[i]);
        var imageName = newArchive.imageName;
        var imagePath = './files/blogposts/' + imageName;
        var bitmap = fs.readFileSync(imagePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newBlogpost.image = bufer;
        newBlogpost.publishedOn = new Date();

        newBlogpost.save(function(err) {
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