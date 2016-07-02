import cvars from './cvars'

export default {
  store: {},
  search(context, catalogNumber) {
    var queryString = JSON.stringify({
      catalogNumber: catalogNumber,
      subDepartment: "Reptiles & Amphibians"
    });
    var query = cvars.RESOURCE_URL + '&filters=' + encodeURIComponent(queryString);
    return context.$http.get(query);
  }
}

