var jwt = require('jsonwebtoken');
var userModel = require('../models/userModel.js');
var config = require("../config");
var crypt = require('../utils/crypt.js');

module.exports = function(app) {
  
  app.post('/authenticate', function(req, res) {
    var mdPassword = crypt.md5(req.body.password);
    var queryObj = {
      userName: req.body.username,
      password: mdPassword
    };

    userModel.findOne(queryObj, function(err, userInfo){
      if (err) throw err;
      
      if(userInfo){
        var token = jwt.sign(user, config.session_secret, {
          expiresIn: 86400
        });

        res.json({
            success: true,
            token: token
          });
      } else
        res.json({ success: false, message: 'Authentication failed.' });
    });
  });

  app.use(function(req, res, next) {
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, config.session_secret, function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          req.decoded = decoded;  
          next();
        }
      });
    } else {
      return res.status(403).send({ 
        success: false, 
        message: 'No token provided.'
      });
    }
  });
};
