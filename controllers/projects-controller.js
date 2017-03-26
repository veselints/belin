'use strict';

let mongoose = require('mongoose'),
    fs = require('fs');

require('../models/project-model');
let Project = mongoose.model('Project');

require('../models/user-model');
let User = mongoose.model('User');

let getCount = function(req, res, next) {
    Project.count({}, function(err, count) {
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

    Project.find({
            'area': currentArea
        }).sort('-year')
        .exec(function(err, projects) {
            if (err) {
                next(err);
                return;
            }
            res.status(200);
            res.json(projects);
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

    Project.findOne({
        '_id': currentId
    }, function(err, project) {
        if (err) {
            next(err);
            return;
        } else if (project === null) {
            next({
                message: "Project not found!",
                status: 404
            });
            return;
        }
        res.status(200);
        res.json(project);
    });
};

let create = function(req, res, next) {
    var newProject = new Project(req.body);
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
        
        newProject.save(function(err) {
            if (err) {
                let error = {
                    message: err.message,
                    status: 400
                };
                next(err);
                return;
            } else {
                res.status(201);
                res.json(newProject);
            }
        });
    });
};

let bulckCreate = function(req, res, next) {
    let len = req.body.length;

    for (let i = 0; i < len; i++) {
        var newProject = new Project(req.body[i]);
        var fileName = newProject.fileName;
        var areaName = newProject.area;
        var filePath = './files/projects/' + areaName + '/' + fileName;
        var bitmap = fs.readFileSync(filePath);
        var bufer = new Buffer(bitmap).toString('base64');
        newProject.file = bufer;

        newProject.save(function(err) {
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
