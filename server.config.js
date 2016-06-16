var config = {};

config.MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/test';
config.PORT = process.env.PORT || 8090;

module.exports = config;
