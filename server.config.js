var config = {};

config.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test';
config.PORT = process.env.PORT || 8080;
config.PHANTOM_PATH = process.env.PHANTOM_PATH || './node_modules/phantomjs/bin/phantomjs';

module.exports = config;
