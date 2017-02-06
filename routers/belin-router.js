'use strict';

let express = require('express'),
    archiveController = require('../controllers/archive-controller'),
    //blogpostsController = require('../controllers/blogposts-controller'),
    forumsController = require('../controllers/forums-controller'),
    paintingsController = require('../controllers/paintings-controller'),
    photosController = require('../controllers/photos-controller'),
    presentationsController = require('../controllers/presentations-controller'),
    projectsController = require('../controllers/projects-controller'),
    publicationsController = require('../controllers/publications-controller'),
    trainingsController = require('../controllers/trainings-controller'),
    filesController = require('../controllers/files-controller.js');

// Defining producers router
let router = express.Router();

router.get('/archives/:area', archiveController.getByArea)
    .get('/archive/:id', archiveController.getById)
    .post('/archives', archiveController.create)
    // .get('/blogposts', blogpostsController.getAll)
    // .get('/blogpost/:id', blogpostsController.getById)
    // .post('/blogposts', blogpostsController.create)
    .get('/forums', forumsController.getAll)
    .get('/forum/:id', forumsController.getById)
    .post('/forums', forumsController.create)
    .get('/paintings/:region', paintingsController.getByRegion)
    .get('/painting/:id', paintingsController.getById)
    .post('/paintings', paintingsController.create)
    .get('/photos/:category', photosController.getByCategory)
    .get('/photo/:id', photosController.getById)
    .post('/photos', photosController.create)
    .get('/presentations/:area', presentationsController.getByArea)
    .post('/presentations', presentationsController.create)
    .get('/projects/:area', projectsController.getByArea)
    .get('/project/:id', projectsController.getById)
    .post('/projects', projectsController.create)
    .get('/publications/:area', publicationsController.getByArea)
    .post('publications', publicationsController.create)
    .get('/trainings', trainingsController.getAll)
    .get('/training/:id', trainingsController.getById)
    .post('/trainings', trainingsController.create)
    .post('/files/:category', filesController.add);
    
module.exports = function(app) {
    app.use('/api/belin', router);
};
