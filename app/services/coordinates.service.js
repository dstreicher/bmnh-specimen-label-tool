export default {
  convertDMSToDD(degrees, minutes, seconds, direction) {
    degrees = (isNaN(degrees)) ? 0 : parseFloat(degrees);
    minutes = (isNaN(minutes)) ? 0 : parseFloat(minutes);
    seconds = (isNaN(seconds)) ? 0 : parseFloat(seconds);
    var dd = degrees + minutes / 60 + seconds / (60 * 60);

    if (direction == "S" || direction == "W") {
      dd = dd * -1;
    }
    return dd;
  },
  convertDDToDMS(float, longitude) {
    var degrees = 0 | (float < 0 ? float = -float : float);
    var minutes = 0 | float % 1 * 60;
    var seconds = (0 | float * 60 % 1 * 6000) / 100;
    var direction = float < 0 ? longitude ? 'W' : 'S' : longitude ? 'E' : 'N';
    return this.formatDMS(degrees, minutes, seconds, direction);
  },
  formatDMS(degrees, minutes, seconds, direction) {
    return degrees + '° ' + minutes + "' " + seconds + '" ' + direction;
  }
}
