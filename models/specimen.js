var mongoose = require('mongoose');
var bwipjs = require('bwip-js');

var schema = new mongoose.Schema({
  catalogNumber: String,
  family: String,
  genus: String,
  species: String,
  type: String,
  describedBy: String,
  country: String,
  locality: String,
  latitude: String,
  longitude: String,
  altitude: String,
  fieldID: String,
  collectedBy: String,
  collectionDate: String,
  alcoholConcentration: String,
  alcoholComposition: String,
  dateMeasured: String,
  additionalInfo: String,
  labelSize: String
});

schema.methods.toLabel = function (done) {
  bwipjs.toBuffer({ bcid: 'datamatrix', text: this.catalogNumber }, function (err, png) {
    if (err) {
      console.log('error!');
    }
    else {
      done('data:image/png;base64,' + png.toString('base64'));
    }
  });
};

module.exports = mongoose.model('specimen', schema);
