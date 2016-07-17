var family = require('../assets/dataset-family.json');
var genus = require('../assets/dataset-genus.json');
var species = require('../assets/dataset-species.json');
var type = require('../assets/dataset-type.json');
var country = require('../assets/dataset-country.json');

var genusMap = require('../assets/datamap-genus-suggest.json');
var speciesMap = require('../assets/datamap-species-suggest.json');

var $family;
var $genus;
var $species;
var $type;
var $country;

var datasets = {
  family: new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: family
  }),
  genus: new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: genus
  }),
  species: new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: species
  }),
  type: new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: type
  }),
  country: new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: country
  })
}

export default {
  updateGenus(value) {
    datasets.genus.clear();
    if (family.indexOf(value) > -1) {
      datasets.genus.local = genusMap[value];
    }
    else {
      datasets.genus.local = genus;
    }
    datasets.genus.initialize(true);
  },
  updateSpecies(value) {
    datasets.species.clear();
    if (genus.indexOf(value) > -1) {
      datasets.species.local = speciesMap[value];
    }
    else {
      datasets.species.local = species;
    }
    datasets.species.initialize(true);
  },
  initialize() {
    $family = $('#family');
    $genus = $('#genus');
    $species = $('#species');
    $type = $('#type');
    $country = $('#country');
    datasets.genus.initialize();
    datasets.species.initialize();
    $family.typeahead(null, { name: 'family', source: datasets.family });
    $genus.typeahead({ minLength: 0 }, { name: 'genus', source: datasets.genus.ttAdapter() });
    $species.typeahead({ minLength: 0 }, { name: 'species', source: datasets.species.ttAdapter() });
    $type.typeahead(null, { name: 'type', source: datasets.type });
    $country.typeahead(null, { name: 'country', source: datasets.country });
  },
  update() {
    $family.typeahead('val', $family.val());
    $genus.typeahead('val', $genus.val());
    $species.typeahead('val', $species.val());
    $type.typeahead('val', $type.val());
    $country.typeahead('val', $country.val());
  }
}
