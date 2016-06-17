var family = require('../assets/dataset-family.json');
var type = require('../assets/dataset-type.json');

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
    })
  },
  initialize() {
    console.log('init!');
    $('#family').typeahead(null, { name: 'family', source: this.datasets.family });
    $('#type').typeahead(null, { name: 'type', source: this.datasets.type });
  }
}
