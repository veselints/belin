'use strict';

let express = require('express'),
    usersController = require('../controllers/users-controller');

// Defining producers router
let router = express.Router();

router.post('/users', usersController.post)
    .put('/auth', usersController.put);
    
module.exports = function(app) {
    app.use('/api', router);
};
