import cvars from './cvars.service'

export default {
  store: {},
  search(context, catalogNumber) {
    var queryString = JSON.stringify({
      catalogNumber: catalogNumber,
      subDepartment: cvars.EMU_SPECIMENS_SUB_DEPARTMENT_REPTILES_AMPHIBIANS
    });
    var query = cvars.RESOURCE_URL + '&filters=' + encodeURIComponent(queryString);
    return context.$http.get(query);
  }
}

