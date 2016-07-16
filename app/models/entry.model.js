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
    catalogNumber: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    family: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    genus: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    species: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    type: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    describedBy: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    country: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    locality: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    latitude: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    longitude: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    altitude: ['number'],
    fieldId: {
    },
    collectedBy: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    collectionDate: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    alcoholConcentration: ['percentage', 'required'],
    dateMeasured: ['date', 'required'],
    additionalInfo: {
      maxLength: {
        rule: 100,
        message: cvars.ERROR_ADDITONAL_INFO_MAX_LENGTH
      }
    }
  }
}
