var config = module.exports = {};

config.env = 'development';
config.debug = true;
config.port = 3000;
config.email = 'trinh.nck@gmail.com';
config.site_name = 'News';
config.site_desc = 'Very simple todo, demo for my cv application.';
config.session_secret = 'session secret string';
config.root=__dirname;
config.db = 'mongodb://127.0.0.1:27017/news';
