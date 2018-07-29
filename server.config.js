var config = {};

config.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test';
config.PORT = process.env.PORT || 8080;
config.PHANTOM_PATH = process.env.PHANTOMJS_PATH || './node_modules/phantomjs-prebuilt/bin/phantomjs';

module.exports = config;
