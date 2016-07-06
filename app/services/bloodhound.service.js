var family = require('../assets/dataset-family.json');
var genus = require('../assets/dataset-genus.json');
var species = require('../assets/dataset-species.json');
var type = require('../assets/dataset-type.json');
var country = require('../assets/dataset-country.json');
var alcoholComposition = require('../assets/dataset-alcoholComposition.json');

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
    alcoholComposition: new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: alcoholComposition
    }),
    country: new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: country
    })
  },
  initialize() {
    $('#family').typeahead(null, { name: 'family', source: this.datasets.family });
    $('#genus').typeahead(null, { name: 'genus', source: this.datasets.genus });
    $('#species').typeahead(null, { name: 'species', source: this.datasets.species });
    $('#type').typeahead(null, { name: 'type', source: this.datasets.type });
    $('#alcoholComposition').typeahead(null, { name: 'alcoholComposition', source: this.datasets.alcoholComposition });
    $('#country').typeahead(null, { name: 'country', source: this.datasets.country });
  }
}
