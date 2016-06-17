<template>
  <div>
    <form>
      <fieldset class="form-group">
        <div class="section-header bg-inverse">
          <div class="row">
            <div class="col-xs-6 col-sm-8">
              <span>Classification</span>
            </div>
            <div class="col-xs-6 col-sm-4 pull-right">
              <label class="c-input c-checkbox">
              <input id="typeCheckbox" type="checkbox">
              <span class="c-indicator"></span>
              Type Specimen
            </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="row">
        <div class="col-xs-12 col-md-12">
          <fieldset class="form-group">
            <label for="catalogNumber">Catalog Number</label>
            <input type="text" v-model="form.catalogNumber" v-on:change="checkData" class="form-control" id="catalogNumber" placeholder="2008.130">
            <small class="text-muted">BMNH / NHMUK</small>
          </fieldset>
        </div>
        <div class="col-xs-12 col-md-12">
          <fieldset class="form-group">
            <label for="family">Family</label>
            <div class="bloodhound">
              <input type="text" v-model="form.family" class="typeahead form-control" id="family" placeholder="Brevicepitidae">
            </div>
          </fieldset>
        </div>
        <div class="col-xs-12 col-md-12">
          <fieldset class="form-group">
            <label for="genus">Genus</label>
            <input type="text" v-model="form.genus" class="form-control" id="genus" placeholder="Callulina">
          </fieldset>
        </div>
        <div class="col-xs-12 col-md-12">
          <fieldset class="form-group">
            <label for="species">Species</label>
            <input type="text" v-model="form.species" class="form-control" id="species" placeholder="hanseni">
          </fieldset>
        </div>
        <div class="col-xs-12 col-md-12">
          <fieldset class="form-group" disabled>
            <label for="type">Type</label>
            <input type="text" v-model="form.type" class="form-control" id="type" placeholder="Holotype">
          </fieldset>
        </div>
        <div class="col-xs-12 col-md-12">
          <fieldset class="form-group" disabled>
            <label for="describedBy">Described By</label>
            <input type="text" v-model="form.describedBy" class="form-control" id="describedBy" placeholder="Loader, Gower, Hinde, Muller">
            <small class="text-muted">last name</small>
          </fieldset>
        </div>
      </div>

      <fieldset class="form-group">
        <div class="section-header bg-inverse">
          <span>Location</span>
        </div>
      </fieldset>

      <fieldset class="form-group">
        <label for="country">Country</label>
        <input type="text" v-model="form.country" class="form-control" id="country" placeholder="Tanzania">
      </fieldset>

      <fieldset class="form-group">
        <label for="locality">Locality</label>
        <input type="text" v-model="form.locality" class="form-control" id="locality" placeholder="Morogoro, Maskati Side of the Nguru">
      </fieldset>

      <fieldset class="form-group">
        <label for="latitude">Latitude</label>
        <input type="text" v-model="form.latitude" class="form-control" id="latitude" placeholder="06 03' 51.1 S">
      </fieldset>

      <fieldset class="form-group">
        <label for="longitude">Longitude</label>
        <input type="text" v-model="form.longitude" class="form-control" id="longitude" placeholder="37 30' 33.3 E">
      </fieldset>

      <fieldset class="form-group">
        <label for="altitude">Altitude</label>
        <input type="text" v-model="form.altitude" class="form-control" id="altitude" placeholder="1790">
        <small class="text-muted">measured in meters</small>
      </fieldset>

      <fieldset class="form-group">
        <div class="section-header bg-inverse">
          <span>Field Data</span>
        </div>
      </fieldset>

      <fieldset class="form-group">
        <label for="fieldID">Field ID</label>
        <input type="text" v-model="form.fieldID" class="form-control" id="fieldID" placeholder="MW 6960">
      </fieldset>

      <fieldset class="form-group">
        <label for="collectedBy">Collected By</label>
        <input type="text" v-model="form.collectedBy" class="form-control" id="collectedBy" placeholder="D. Gower, R. Hinde, S. Loader">
        <small class="text-muted">first initial, last name</small>
      </fieldset>

      <fieldset class="form-group">
        <label for="collectionDate">Collection Date</label>
        <input type="text" v-model="form.collectionDate" class="form-control" id="collectionDate" placeholder="14/06/2003">
        <small class="text-muted">DD/MM/YYYY format</small>
      </fieldset>

      <fieldset class="form-group">
        <div class="section-header bg-inverse">
          <span>Collection Data</span>
        </div>
      </fieldset>

      <fieldset class="form-group">
        <label for="alcoholConcentration">Alcohol Concentration</label>
        <input type="text" v-model="form.alcoholConcentration" class="form-control" id="alcoholConcentration" placeholder="68.8">
        <small class="text-muted">in percentage</small>
      </fieldset>

      <fieldset class="form-group">
        <label for="alcoholComposition">Alcohol Composition</label>
        <input type="text" v-model="form.alcoholComposition" class="form-control" id="alcoholComposition" placeholder="Ethanol">
      </fieldset>

      <fieldset class="form-group">
        <label for="dateMeasured">Date Measured</label>
        <input type="text" v-model="form.dateMeasured" class="form-control" id="dateMeasured" placeholder="04/2016">
        <small class="text-muted">MM/YYYY format</small>
      </fieldset>

      <fieldset class="form-group">
        <label for="additionalInfo">Additional Info</label>
        <textarea v-model="form.additionalInfo" class="form-control" id="additionalInfo" rows="3"></textarea>
      </fieldset>

      <fieldset class="form-group">
        <label for="labelSize">Label Size</label>
        <select v-model="form.labelSize" class="form-control" id="labelSize">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Extra Large</option>
      </select>
      </fieldset>

      <fieldset class="form-group submit-block">
        <button v-on:click="saveEntry" type="submit" class="btn btn-success btn-lg btn-block">Add Entry</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import DataPortal from '../services/dataportal'
  export default {
    data() {
      return {
        form: {
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
          fieldID: '',
          collectedBy: '',
          collectionDate: '',
          alcoholConcentration: '',
          alcoholComposition: '',
          dateMeasured: '',
          additionalInfo: '',
          labelSize: 'Small'
        }
      };
    },
    created() {
      this.datasets = {};
      this.datasets.genus = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '/app/assets/dataset-family.json'
      });
    },
    ready() {
      $('.bloodhound #family').typeahead(null, { name: 'family', source: this.datasets.genus });
    },
    methods: {
      checkData() {
        if (this.form.catalogNumber !== '') {
          DataPortal.search(this, this.form.catalogNumber).then((res) => {
            console.log(res.data);
          }, (res) => {
            console.log('failure!');
          })
        }
      },
      saveEntry() {
        var specimen = this.$resource('api/specimens{/id}');
        specimen.save(this.form).then((res) => {
          console.log(res.data);
        }, (res) => {
          console.log('failure!');
        });
      }
    }
  }
</script>

<style scoped>
  .section-header {
    padding: 1rem;
    border-radius: .25rem;
  }

  .submit-block {
    margin-top: 3rem;
  }

  .c-input {
    color: #fff;
    -moz-user-select: none;
  }
</style>
