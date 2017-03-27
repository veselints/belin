'use strict';

let mongoose = require('mongoose');

require('../models/user-model');
let User = mongoose.model('User');

const AUTH_KEY_LENGTH = 60,
  AUTH_KEY_CHARS = 'qwertyuiopasdfghjklzxcvbnmWERTYUIOPASDFGHJKLZXCVBNM';

function generateAuthKey(uniquePart) {
  let authKey = uniquePart,
    index;
  while (authKey.length < AUTH_KEY_LENGTH) {
    index = Math.floor(Math.random() * AUTH_KEY_CHARS.length);
    authKey += AUTH_KEY_CHARS[index];
  }
  return authKey;
}

// function post(req, res, next) {
//   let user = req.body;
//   user.username = user.username.toLowerCase();

//   let newUser = new User(user);
//   newUser.save(function(err, user) {
//       if (err) {
//           let error = {
//               message: err.message,
//               status: 400
//           };
//           next(err);
//           return;
//       } else {
//           user.authKey = generateAuthKey(user.username);
//           user.save();

//           res.status(201);
//           res.json(newUser);
//       }
//   });
// }

function put(req, res, next) {
  let reqUser = req.body;
  console.log(reqUser);
  User.findOne({
    'username': req.body.username
  }, function(err, user) {
    if (err) {
      next(err);
      return;
    } else if (!user || user.passHash !== reqUser.passHash) {
      next({
        message: 'Invalid username or password',
        status: 401
      });
      return;
    } 

    user.authKey = generateAuthKey(user.username);
    user.save();

    res.status(200);
    res.json(user);
  });
}

let controller = {
    post,
    put
};

module.exports = controller;