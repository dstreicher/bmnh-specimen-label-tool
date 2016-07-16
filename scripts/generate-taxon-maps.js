var csv = require('fast-csv');
var fs = require('fs');
var path = require('path');

var stream = fs.createReadStream("Amphibia_taxonomy_exclusion_list.csv");

var genusMap = {};
var speciesMap = {};

csv
 .fromStream(stream, {headers : true})
 .on("data", function(data){
    if (genusMap[data.Family]) {
      if (genusMap[data.Family].indexOf(data.Genus) === -1) {
        genusMap[data.Family].push(data.Genus);
      }
    }
    else {
      genusMap[data.Family] = [];
      genusMap[data.Family].push(data.Genus);
    }

    if (speciesMap[data.Genus]) {
      speciesMap[data.Genus].push(data.Species);
    }
    else {
      speciesMap[data.Genus] = [];
      speciesMap[data.Genus].push(data.Species);
    }
 })
 .on("end", function(){
    fs.writeFile('datamap-genus-suggest.json', JSON.stringify(genusMap), function (err) {
      if (err) return console.log(err);
      console.log('success');
    });
    fs.writeFile('datamap-species-suggest.json', JSON.stringify(speciesMap), function (err) {
      if (err) return console.log(err);
      console.log('success');
    });
 });
