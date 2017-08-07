var userRoutes = require('./userRoutes');
var categoryRoutes = require('./categoryRoutes');

module.exports = function(app) {
  userRoutes(app);
  categoryRoutes(app);
};
