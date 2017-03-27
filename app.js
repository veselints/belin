'use strict';

// Requesting needed node modules
let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    SHA1 = require("crypto-js/sha1");

require('./models/user-model');
let User = mongoose.model('User');

// Connecting to local mongodb
// let connectionString = 'mongodb://127.0.0.1:27017/belin';
let connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString);

// Setting up the server
let app = express();

// let port = 7777;
let port = process.env.PORT;
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve the client
app.use(express.static('./client'));

// Point the server to the router we have created
let belinRouter = require('./routers/belin-router');
belinRouter(app);
let usersRouter = require('./routers/users-router');
usersRouter(app);

// Middleware to handle errors on the server
app.use(function(err, req, res, next) {
    if (err) {
        res.status(err.status || 500)
            .json({
                message: err.message
            });
        return;
    }
});

var pass = SHA1('BelinMollov' + 'MyNameIsBelin').toString();

var belin = new User({
    username: 'BelinMollov',
    passHash: pass
});

belin.save(function(err) {
    if (err) {
        console.log('User already created');
    } else {
        console.log('User saved successfully');
    }
});

// Open the server connection
app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});
