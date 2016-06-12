var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./server.config');
var app = express();

mongoose.connect(config.MONGO_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/dist'));

app.listen(config.PORT, function () {
  return console.log('Server listening on port ' + config.PORT);
});
