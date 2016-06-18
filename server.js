var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./server.config');
var app = express();

mongoose.connect(config.MONGO_URL);

//create mongoose connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//attach express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/dist', express.static('dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/api/specimens', require('./routes/specimens'));
app.use('/api/pdf', require('./routes/pdf'));


app.listen(config.PORT, function () {
  return console.log('Server listening on port ' + config.PORT);
});
