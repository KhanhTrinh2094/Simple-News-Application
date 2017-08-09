module.exports = function(app) {

  var news = require('../controllers/newsController');
  
  app.route('/categories')
    .get(news.list_all_news)
    .post(news.create_a_news);

  app.route('/tasks/:newsId')
    .get(news.read_a_news)
    .put(news.update_a_news)
    .delete(news.delete_a_news);
};
