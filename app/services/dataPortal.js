const API_URL = 'http://data.nhm.ac.uk/api/3/action/datastore_search';
const RESOURCE_URL = API_URL + '?resource_id=05ff2255-c38a-40c9-b657-4ccb55ab2feb';

export default {
  search(context, catalogNumber) {
    var queryString = JSON.stringify({
      catalogNumber: catalogNumber,
      subDepartment: "Reptiles & Amphibians"
    });
    var query = RESOURCE_URL + '&filters=' + encodeURIComponent(queryString);
    return context.$http.get(query);
  }
}

