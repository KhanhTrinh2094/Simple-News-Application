var authenticationRoutes = require('./authenticationRoutes');
var userRoutes = require('./userRoutes');
var categoryRoutes = require('./categoryRoutes');
var newsRoutes = require('./newsRoutes');
var setupRoutes = require('./setupRoutes')

module.exports = function(app) {
	setupRoutes(app);
	authenticationRoutes(app);
  userRoutes(app);
  categoryRoutes(app);
  newsRoutes(app);
};
