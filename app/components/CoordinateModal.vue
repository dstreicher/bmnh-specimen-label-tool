<template>
  <div>
    <div class="modal fade {{target}}" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="modalLabel">{{titleText}}</h4>
          </div>
          <div class="modal-body">
            <div class="row">

              <div class="col-xs-12 col-md-3">
                <div class="form-group">
                  <label for="degrees">Degrees</label>
                  <div class="input-group">
                    <input id="degrees" type="text" v-model="degrees" class="form-control" aria-label="Degrees">
                    <span class="input-group-addon">°</span>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-md-3">
                <div class="form-group">
                  <label for="minutes">Minutes</label>
                  <div class="input-group">
                    <input id="minutes" type="text" v-model="minutes" class="form-control" aria-label="Minutes">
                    <span class="input-group-addon">'</span>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-md-3">
                <div class="form-group">
                  <label for="seconds">Seconds</label>
                  <div class="input-group">
                    <input id="seconds" type="text" v-model="seconds" class="form-control" aria-label="Seconds">
                    <span class="input-group-addon">"</span>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-md-3">
                <div class="form-group">
                  <select id="hemisphere" v-model="hemisphere" class="form-control" aria-label="hemisphere">
                    <option v-if="isLatitude">N</option>
                    <option v-if="isLatitude">S</option>
                    <option v-if="!isLatitude">E</option>
                    <option v-if="!isLatitude">W</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success" v-on:click="submit" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import coordinates from '../services/coordinates.service'
  export default {
    props: [
      'target',
      'titleText',
      'isLatitude',
      'fieldVal'
    ],
    data() {
      var hemisphere = (this.isLatitude) ? 'N' : 'E';
      return {
        degrees: '',
        minutes: '',
        seconds: '',
        hemisphere: hemisphere
      }
    },
    methods: {
      submit() {
        var decimal = coordinates.convertDMSToDD(this.degrees, this.minutes, this.seconds, this.hemisphere);
        this.degrees = '';
        this.minutes = '';
        this.seconds = '';
        this.hemisphere = (this.isLatitude) ? 'N' : 'E';
        this.$dispatch(this.target + ':submit', decimal);
      }
    }
  }
</script>

<style scoped>
  #hemisphere {
    margin-top: 2rem;
    height: 38px;
  }
</style>
