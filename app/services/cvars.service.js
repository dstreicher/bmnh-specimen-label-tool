const API_URL = 'http://data.nhm.ac.uk/api/3/action/datastore_search';
const RESOURCE_URL = API_URL + '?resource_id=05ff2255-c38a-40c9-b657-4ccb55ab2feb';

export default {
  API_URL: API_URL,
  RESOURCE_URL: RESOURCE_URL,
  DEFAULT_GPS_DECIMAL_PLACES: 4,
  ENTRY_ROUTE_NAME: 'entry',
  LABELS_ROUTE_NAME: 'labels',
  CSV_ROUTE_NAME: 'csv',
  EMU_SPECIMENS_SUB_DEPARTMENT_REPTILES_AMPHIBIANS: 'Reptiles & Amphibians',
  ERROR_REQUIRED_FIELD_MSG: 'This field is required.',
  ERROR_ADDITONAL_INFO_MAX_LENGTH: 'Text character limit reached.',
  ERROR_INVALID_FORMAT: 'This format is invalid.'
}
