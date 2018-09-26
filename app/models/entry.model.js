import cvars from '../services/cvars.service'

export default {
  defaults: {
    catalogNumber: '',
    family: '',
    genus: '',
    species: '',
    type: '',
    describedBy: '',
    country: '',
    countryIso2: '',
    countryIso3: '',
    countryCode: '000',
    locality: '',
    latitude: '',
    longitude: '',
    altitude: '',
    fieldId: '',
    collectedBy: '',
    collectionDate: '',
    alcoholConcentration: '',
    alcoholComposition: 'Ethanol',
    dateMeasured: '',
    additionalInfo: '',
    labelSize: 'Small',
    hasBeenExported: false,
  },
  validation: {
    catalogNumber: ['required'],
    family: ['required'],
    genus: ['required'],
    species: ['required'],
    type: ['typeSpecimen'],
    describedBy: ['typeSpecimen'],
    country: ['required'],
    locality: ['required'],
    latitude: ['latitude'],
    longitude: ['longitude'],
    altitude: ['number'],
    fieldId: [],
    collectedBy: ['required'],
    collectionDate: ['required'],
    alcoholConcentration: ['percentage', 'required'],
    dateMeasured: ['date', 'required'],
    additionalInfo: []
  },
  getDefaults() {
    return $.extend({}, this.defaults);
  }
}
