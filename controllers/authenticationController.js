var userModel = require('../models/userModel.js');
var crypt = require('../utils/crypt.js');
var config = require('../config');
var User = userModel.Schema('Users').model;
var jwt = require('jsonwebtoken');

exports.startMiddleWare = function(req, res, next) {
  var token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.session_secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        User.findOne({ username: decoded.u }, function(err, userInfo){
          if (err || !userInfo)
            return res.json({ success: false, message: 'Cannot find username' });

          req.user = userInfo;
          next();
        });
      }
    });
  } else {
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.'
    });
  }
}

exports.authenticate = function(req, res){
  var mdPassword = crypt.md5(req.body.password);
    var queryObj = {
      username: req.body.username,
      password: mdPassword
    };

    User.findOne(queryObj, function(err, userInfo){
      if (err) throw err;

      if(userInfo){
        var token = jwt.sign({ u: userInfo.username }, config.session_secret, {
          expiresIn: '1d'
        });

        res.json({
          success: true,
          token: token
        });
      } else
        res.json({ success: false, message: 'Authentication failed.' });
    });
}