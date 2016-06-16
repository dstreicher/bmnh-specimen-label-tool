var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  catalogNumber: String,
  family: String,
  genus: String,
  species: String,
  Type: String,
  describedBy: String,
  country: String,
  locality: String,
  latitude: String,
  longitude: String,
  altitude: String,
  fieldID: String,
  collectedBy: String,
  collectionDate: Date,
  alcoholConcentration: Number,
  alcoholComposition: String,
  dateMeasured: Date,
  additionalInfo: String,
  labelSize: String
});

module.exports = mongoose.model('specimen', schema);
