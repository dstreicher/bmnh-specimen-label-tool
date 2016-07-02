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
    alcoholComposition: '',
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
    altitude: {
    },
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
    alcoholConcentration: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    alcoholComposition: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    dateMeasured: {
      required: {
        rule: true,
        message: cvars.ERROR_REQUIRED_FIELD_MSG
      }
    },
    additionalInfo: {
    }
  }
}
