var mongoose = require('mongoose');

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

module.exports = mongoose.model('specimen', schema);
