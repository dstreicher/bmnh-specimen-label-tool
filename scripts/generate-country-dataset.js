var csv = require('fast-csv');
var fs = require('fs');
var path = require('path');

var stream = fs.createReadStream("country_codes_specimen_labels.csv");

var countryMap = [];

csv
  .fromStream(stream, { headers: true })
  .on("data", function (data) {
    countryMap.push(data);
  })
  .on("end", function () {
    fs.writeFile('dataset-country-codes.json', JSON.stringify(countryMap), function (err) {
      if (err) return console.log(err);
      console.log('success');
    });
  });
