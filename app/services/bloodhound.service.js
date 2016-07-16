var family = require('../assets/dataset-family.json');
var genus = require('../assets/dataset-genus.json');
var species = require('../assets/dataset-species.json');
var type = require('../assets/dataset-type.json');
var country = require('../assets/dataset-country.json');

var $family;
var $genus;
var $species;
var $type;
var $country;

export default {
  datasets: {
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
  },
  initialize() {
    $family = $('#family');
    $genus = $('#genus');
    $species = $('#species');
    $type = $('#type');
    $country = $('#country');
    $family.typeahead(null, { name: 'family', source: this.datasets.family });
    $genus.typeahead(null, { name: 'genus', source: this.datasets.genus });
    $species.typeahead(null, { name: 'species', source: this.datasets.species });
    $type.typeahead(null, { name: 'type', source: this.datasets.type });
    $country.typeahead(null, { name: 'country', source: this.datasets.country });
  },
  update() {
    $family.typeahead('val', $family.val());
    $genus.typeahead('val', $genus.val());
    $species.typeahead('val', $species.val());
    $type.typeahead('val', $type.val());
    $country.typeahead('val', $country.val());
  }
}
