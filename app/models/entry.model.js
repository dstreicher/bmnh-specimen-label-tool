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
    labelSize: 'Small'
  },
  validation: {
    catalogNumber: ['required'],
    family: ['required'],
    genus: ['required'],
    species: ['required'],
    type: ['required'],
    describedBy: ['required'],
    country: ['required'],
    locality: ['required'],
    latitude: ['required'],
    longitude: ['required'],
    altitude: ['number'],
    fieldId: [],
    collectedBy: ['required'],
    collectionDate: ['required'],
    alcoholConcentration: ['percentage', 'required'],
    dateMeasured: ['date', 'required'],
    additionalInfo: []
  }
}
