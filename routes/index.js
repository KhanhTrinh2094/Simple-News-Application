var authenticationRoutes = require('./authenticationRoutes');
var userRoutes = require('./userRoutes');
var categoryRoutes = require('./categoryRoutes');

module.exports = function(app) {
	authenticationRoutes(app);
  userRoutes(app);
  categoryRoutes(app);
};
