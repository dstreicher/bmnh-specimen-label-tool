var family = require('../assets/dataset-family.json');
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
    var $family = $('#family');
    $family.typeahead(null, { name: 'family', source: this.datasets.family });
    // $family.typeahead('val', $family.val());
    $('#type').typeahead(null, { name: 'type', source: this.datasets.type });
    $('#alcoholComposition').typeahead(null, { name: 'type', source: this.datasets.alcoholComposition });
    $('#country').typeahead(null, { name: 'type', source: this.datasets.country });
  }
}
