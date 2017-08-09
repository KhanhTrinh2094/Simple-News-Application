module.exports = function(app) {
  
  var authenticate = require('../controllers/authenticationController');

  app.use(authenticate.startMiddleWare);
  
  app.route('/authenticate')
    .post(authenticate.authenticate);
};
