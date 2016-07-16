import cvars from './cvars.service'

function isEmpty(val) {
  val = val.trim();
  return (val.length === 0);
}

export default {
  required: {
    message: cvars.ERROR_REQUIRED_FIELD_MSG,
    check: function (val) {
      return !isEmpty(val);
    }
  },
  typeSpecimen: {
    message: cvars.ERROR_REQUIRED_FIELD_MSG,
    check: function (val) {
      if (this.vm.isTypeSpecimen) {
        return !isEmpty(val);
      }
      else {
        this.touched = false;
        return true;
      }
    }
  },
  date: {
    message: cvars.ERROR_INVALID_FORMAT,
    check: function (val) {
      if (isEmpty(val)) {
        return true;
      }
      return /^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](18|19|20)\d\d$/.test(val);
    }
  },
  percentage: {
    message: cvars.ERROR_INVALID_FORMAT,
    check: function (val) {
      if (isEmpty(val)) {
        return true;
      }
      var parts = val.split(".");
      if (!/^\d+$/.test(parts[0])) {
        return false;
      }
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
      if (isEmpty(val)) {
        return true;
      }
      return /^\d+$/.test(val);
    }
  }
}
