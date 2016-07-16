import cvars from './cvars.service'

export default {
  date: {
    message: cvars.ERROR_INVALID_FORMAT,
    check: function (val) {
      return /^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](18|19|20)\d\d$/.test(val);
    }
  },
  percentage: {
    message: cvars.ERROR_INVALID_FORMAT,
    check: function (val) {
      var parts = val.split(".");
      if (typeof parts[1] == "string" && (isNaN(parseFloat(parts[1])) || parts[1].length > 2)) {
        return false;
      }
      var n = parseFloat(val);
      if (isNaN(n)) {
        return false;
      }
      if (n < 0 || n > 100) {
        return false;
      }
      if ((val.length - val.replace(/\./g, "").length) > 1) {
        return false;
      }
      return true;
    }
  },
  number: {
    message: cvars.ERROR_INVALID_FORMAT,
    check: function (val) {
      return /^\d+$/.test(val);
    }
  }
}
