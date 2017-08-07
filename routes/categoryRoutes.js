module.exports = function(app) {
  
  var todoList = require('../controllers/categoryController');
  
  app.route('/categories')
    .get(todoList.list_all_categories)
    .post(todoList.create_a_category);

  app.route('/tasks/:categoryId')
    .get(todoList.read_a_category)
    .put(todoList.update_a_category)
    .delete(todoList.delete_a_category);
};
