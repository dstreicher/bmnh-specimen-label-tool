<template>
  <div>
    <validator name="validation">
      <form novalidate>

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <div class="col-xs-12">
                <small class="text-muted">* indicates required field</small>
              </div>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <div class="section-header bg-inverse">
                <div class="row">
                  <div class="col-xs-5 col-sm-8">
                    <span>Classification</span>
                  </div>
                  <div class="col-xs-7 col-sm-4">
                    <label class="c-input c-checkbox">
                  <input v-model="isTypeSpecimen" v-on:change="clearTypeFields" id="typeCheckbox" type="checkbox">
                  <span class="c-indicator"></span>Type Specimen
                </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.catalogNumber.touched && $validation.catalogNumber.invalid), 'has-success': ($validation.catalogNumber.touched && $validation.catalogNumber.valid) }">
              <label for="catalogNumber">Catalog Number *</label>
              <small v-if="$validation.catalogNumber.touched && $validation.catalogNumber.invalid" class="text-danger pull-xs-right">{{$validation.catalogNumber.errors[0].message}}</small>
              <input type="text" v-model="form.catalogNumber" v-on:change="checkData" v-validate:catalog-number="validation.catalogNumber"
                class="form-control" id="catalogNumber" v-bind:class="{ 'form-control-danger': $validation.catalogNumber.invalid, 'form-control-success': ($validation.catalogNumber.touched && $validation.catalogNumber.valid) }">
              <small class="text-muted">BMNH / NHMUK</small>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.family.touched && $validation.family.invalid), 'has-success': ($validation.family.touched && $validation.family.valid) }">
              <label for="family">Family *</label>
              <small v-if="$validation.family.touched && $validation.family.invalid" class="text-danger pull-xs-right">{{$validation.family.errors[0].message}}</small>
              <input type="text" v-model="form.family" v-on:blur="updateBloodhound('genus')" class="typeahead form-control" id="family" v-validate:family="validation.family"
                v-bind:class="{ 'form-control-danger': $validation.family.invalid, 'form-control-success': ($validation.family.touched && $validation.family.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.genus.touched && $validation.genus.invalid), 'has-success': ($validation.genus.touched && $validation.genus.valid) }">
              <label for="genus">Genus *</label>
              <small v-if="$validation.genus.touched && $validation.genus.invalid" class="text-danger pull-xs-right">{{$validation.genus.errors[0].message}}</small>
              <input type="text" v-model="form.genus" v-on:blur="updateBloodhound('species')" class="form-control" id="genus" v-validate:genus="validation.genus"
                v-bind:class="{ 'form-control-danger': $validation.genus.invalid, 'form-control-success': ($validation.genus.touched && $validation.genus.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.species.touched && $validation.species.invalid), 'has-success': ($validation.species.touched && $validation.species.valid) }">
              <label for="species">Species *</label>
              <small v-if="$validation.species.touched && $validation.species.invalid" class="text-danger pull-xs-right">{{$validation.species.errors[0].message}}</small>
              <input type="text" v-model="form.species" class="form-control" id="species" v-validate:species="validation.species"
                v-bind:class="{ 'form-control-danger': $validation.species.invalid, 'form-control-success': ($validation.species.touched && $validation.species.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" :disabled="!isTypeSpecimen" v-bind:class="{ 'has-danger': ($validation.type.touched && $validation.type.invalid), 'has-success': ($validation.type.touched && $validation.type.valid) }">
              <label for="type">Type <span v-if="isTypeSpecimen">*</span></label>
              <small v-if="$validation.type.touched && $validation.type.invalid" class="text-danger pull-xs-right">{{$validation.type.errors[0].message}}</small>
              <input type="text" v-model="form.type" class="form-control text-uppercase" id="type" v-validate:type="validation.type"
                v-bind:class="{ 'form-control-danger': $validation.type.invalid, 'form-control-success': ($validation.type.touched && $validation.type.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" :disabled="!isTypeSpecimen" v-bind:class="{ 'has-danger': ($validation.describedBy.touched && $validation.describedBy.invalid), 'has-success': ($validation.describedBy.touched && $validation.describedBy.valid) }">
              <label for="describedBy">Described By <span v-if="isTypeSpecimen">*</span></label>
              <small v-if="$validation.describedBy.touched && $validation.describedBy.invalid" class="text-danger pull-xs-right">{{$validation.describedBy.errors[0].message}}</small>
              <input type="text" v-model="form.describedBy" class="form-control" id="describedBy"
                v-validate:described-by="validation.describedBy" v-bind:class="{ 'form-control-danger': $validation.describedBy.invalid, 'form-control-success': ($validation.describedBy.touched && $validation.describedBy.valid) }">
            </fieldset>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <div class="section-header bg-inverse">
                <span>Location</span>
              </div>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.country.touched && $validation.country.invalid), 'has-success': ($validation.country.touched && $validation.country.valid) }">
              <label for="country">Country *</label>
              <small v-if="$validation.country.touched && $validation.country.invalid" class="text-danger pull-xs-right">{{$validation.country.errors[0].message}}</small>
              <input type="text" v-model="form.country" class="form-control" id="country" v-validate:country="validation.country"
                v-bind:class="{ 'form-control-danger': $validation.country.invalid, 'form-control-success': ($validation.country.touched && $validation.country.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.locality.touched && $validation.locality.invalid), 'has-success': ($validation.locality.touched && $validation.locality.valid) }">
              <label for="locality">Locality *</label>
              <small v-if="$validation.locality.touched && $validation.locality.invalid" class="text-danger pull-xs-right">{{$validation.locality.errors[0].message}}</small>
              <input type="text" v-model="form.locality" class="form-control" id="locality"
                v-validate:locality="validation.locality" v-bind:class="{ 'form-control-danger': $validation.locality.invalid, 'form-control-success': ($validation.locality.touched && $validation.locality.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.latitude.touched && $validation.latitude.invalid), 'has-success': ($validation.latitude.touched && $validation.latitude.valid) }">
              <label for="latitude">Latitude *</label>
              <small v-if="$validation.latitude.touched && $validation.latitude.invalid" class="text-danger pull-xs-right">{{$validation.latitude.errors[0].message}}</small>
              <div class="input-group">
                <input type="text" v-model="form.latitude" class="form-control" id="latitude" v-validate:latitude="validation.latitude"
                  v-bind:class="{ 'form-control-danger': $validation.latitude.invalid, 'form-control-success': ($validation.latitude.touched && $validation.latitude.valid) }">
                <span class="input-group-btn">
                  <button v-on:click="showLatitudeModal" class="btn btn-success" type="button">DMS</button>
                </span>
              </div>
              <small class="text-muted">in decimal degrees</small>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.longitude.touched && $validation.longitude.invalid), 'has-success': ($validation.longitude.touched && $validation.longitude.valid) }">
              <label for="longitude">Longitude *</label>
              <small v-if="$validation.longitude.touched && $validation.longitude.invalid" class="text-danger pull-xs-right">{{$validation.longitude.errors[0].message}}</small>
              <div class="input-group">
                <input type="text" v-model="form.longitude" lazy class="form-control" id="longitude" v-validate:longitude="validation.longitude"
                  v-bind:class="{ 'form-control-danger': $validation.longitude.invalid, 'form-control-success': ($validation.longitude.touched && $validation.longitude.valid) }">
                <span class="input-group-btn">
                  <button v-on:click="showLongitudeModal" class="btn btn-success" type="button">DMS</button>
                </span>
              </div>
              <small class="text-muted">in decimal degrees</small>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.altitude.touched && $validation.altitude.invalid), 'has-success': ($validation.altitude.touched && $validation.altitude.valid) }">
              <label for="altitude">Altitude</label>
              <small v-if="$validation.altitude.touched && $validation.altitude.invalid" class="text-danger pull-xs-right">{{$validation.altitude.errors[0].message}}</small>
              <input type="text" v-model="form.altitude" class="form-control" id="altitude" v-validate:altitude="validation.altitude"
                v-bind:class="{ 'form-control-danger': $validation.altitude.invalid, 'form-control-success': ($validation.altitude.touched && $validation.altitude.valid) }">
              <small class="text-muted">in meters</small>
            </fieldset>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <div class="section-header bg-inverse">
                <span>Field Data</span>
              </div>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.fieldId.touched && $validation.fieldId.invalid), 'has-success': ($validation.fieldId.touched && $validation.fieldId.valid) }">
              <label for="fieldId">Field ID</label>
              <small v-if="$validation.fieldId.touched && $validation.fieldId.invalid" class="text-danger pull-xs-right">{{$validation.fieldId.errors[0].message}}</small>
              <input type="text" v-model="form.fieldId" class="form-control" id="fieldId" v-validate:field-id="validation.fieldId"
                v-bind:class="{ 'form-control-danger': $validation.fieldId.invalid, 'form-control-success': ($validation.fieldId.touched && $validation.fieldId.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.collectedBy.touched && $validation.collectedBy.invalid), 'has-success': ($validation.collectedBy.touched && $validation.collectedBy.valid) }">
              <label for="collectedBy">Collected By *</label>
              <small v-if="$validation.collectedBy.touched && $validation.collectedBy.invalid" class="text-danger pull-xs-right">{{$validation.collectedBy.errors[0].message}}</small>
              <input type="text" v-model="form.collectedBy" class="form-control" id="collectedBy"
                v-validate:collected-by="validation.collectedBy" v-bind:class="{ 'form-control-danger': $validation.collectedBy.invalid, 'form-control-success': ($validation.collectedBy.touched && $validation.collectedBy.valid) }">
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.collectionDate.touched && $validation.collectionDate.invalid), 'has-success': ($validation.collectionDate.touched && $validation.collectionDate.valid) }">
              <label for="collectionDate">Collection Date</label>
              <small v-if="$validation.collectionDate.touched && $validation.collectionDate.invalid" class="text-danger pull-xs-right">{{$validation.collectionDate.errors[0].message}}</small>
              <input type="text" v-model="form.collectionDate" class="form-control" id="collectionDate" v-validate:collection-date="validation.collectionDate"
                v-bind:class="{ 'form-control-danger': $validation.collectionDate.invalid, 'form-control-success': ($validation.collectionDate.touched && $validation.collectionDate.valid) }">
              <small class="text-muted">DD/MM/YYYY format</small>
            </fieldset>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <div class="section-header bg-inverse">
                <span>Collection Data</span>
              </div>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.alcoholConcentration.touched && $validation.alcoholConcentration.invalid), 'has-success': ($validation.alcoholConcentration.touched && $validation.alcoholConcentration.valid) }">
              <label for="alcoholConcentration">Alcohol Concentration *</label>
              <small v-if="$validation.alcoholConcentration.touched && $validation.alcoholConcentration.invalid" class="text-danger pull-xs-right">{{$validation.alcoholConcentration.errors[0].message}}</small>
              <input type="text" v-model="form.alcoholConcentration" class="form-control" id="alcoholConcentration"
                v-validate:alcohol-concentration="validation.alcoholConcentration" v-bind:class="{ 'form-control-danger': $validation.alcoholConcentration.invalid, 'form-control-success': ($validation.alcoholConcentration.touched && $validation.alcoholConcentration.valid) }">
              <small class="text-muted">in percentage</small>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <label for="alcoholComposition">Alcohol Composition *</label>
              <select v-model="form.alcoholComposition" class="form-control" id="alcoholComposition">
                <option>Ethanol</option>
                <option>Formalin</option>
                <option>Glycerol</option>
                <option>IMS</option>
                <option>Isopropyl</option>
                <option>Unknown</option>
              </select>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.dateMeasured.touched && $validation.dateMeasured.invalid), 'has-success': ($validation.dateMeasured.touched && $validation.dateMeasured.valid) }">
              <label for="dateMeasured">Date Measured *</label>
              <small v-if="$validation.dateMeasured.touched && $validation.dateMeasured.invalid" class="text-danger pull-xs-right">{{$validation.dateMeasured.errors[0].message}}</small>
              <input type="text" v-model="form.dateMeasured" class="form-control" id="dateMeasured" v-validate:date-measured="validation.dateMeasured"
                v-bind:class="{ 'form-control-danger': $validation.dateMeasured.invalid, 'form-control-success': ($validation.dateMeasured.touched && $validation.dateMeasured.valid) }">
              <small class="text-muted">DD/MM/YYYY format</small>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.additionalInfo.touched && $validation.additionalInfo.invalid), 'has-success': ($validation.additionalInfo.touched && $validation.additionalInfo.valid) }">
              <label for="additionalInfo">Additional Info</label>
              <small v-if="$validation.additionalInfo.touched && $validation.additionalInfo.invalid" class="text-danger pull-xs-right">{{$validation.additionalInfo.errors[0].message}}</small>
              <textarea v-model="form.additionalInfo" class="form-control" id="additionalInfo" rows="3" v-validate:additional-info="validation.additionalInfo"
                v-bind:class="{ 'form-control-danger': $validation.additionalInfo.invalid, 'form-control-success': ($validation.additionalInfo.touched && $validation.additionalInfo.valid) }"></textarea>
            </fieldset>
          </div>

          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group">
              <label for="labelSize">Label Size *</label>
              <select v-model="form.labelSize" class="form-control" id="labelSize">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </fieldset>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group submit-block" :disabled="!$validation.valid">
              <button v-on:click="saveEntry" type="button" class="btn btn-success btn-lg btn-block">Add Entry</button>
            </fieldset>
          </div>
        </div>

      </form>
    </validator>
    <prompt-modal target="import-modal" title-text="Data Import" body-text="This catalog number has specimen data associated with it on the NHM Data Portal. Would you like to import the data?"
      confirm-text="Import"></prompt-modal>
    <prompt-modal target="saved-modal" title-text="Entry Saved" body-text="Specimen entry saved to database."></prompt-modal>
    <coordinate-modal target="latitude-modal" title-text="Latitude"></coordinate-modal>
    <coordinate-modal target="longitude-modal" title-text="Longitude"></coordinate-modal>
  </div>
</template>

<script>
  import entryModel from '../models/entry.model'
  import cvars from '../services/cvars.service'
  import validators from '../services/validators.service'
  import Bloodhound from '../services/bloodhound.service'
  import DataPortal from '../services/dataportal.service'
  import coordinates from '../services/coordinates.service'
  import PromptModal from '../components/PromptModal.vue'
  import CoordinateModal from '../components/CoordinateModal.vue'

  export default {
    components: {
      PromptModal,
      CoordinateModal
    },
    data() {
      return {
        form: entryModel.defaults,
        validation: entryModel.validation,
        isTypeSpecimen: false
      };
    },
    ready() {
      Bloodhound.initialize();
    },
    methods: {
      clearTypeFields() {
        if (!this.isTypeSpecimen) {
          this.form.type = '';
          this.form.describedBy = '';
        }
        this.$validate('type');
        this.$validate('describedBy');
      },
      checkData() {
        if (this.form.catalogNumber !== '' && DataPortal.store[this.form.catalogNumber] !== null) {
          if (DataPortal.store[this.form.catalogNumber]) {
             $('.import-modal').modal('show');
          }
          else {
            DataPortal.search(this, this.form.catalogNumber).then((res) => {
              if (res.data.result.total >= 1) {
                DataPortal.store[this.form.catalogNumber] = res.data.result.records[0];
                $('.import-modal').modal('show');
              }
              else if (res.data.result.total === 0) {
                DataPortal.store[this.form.catalogNumber] = null;
              }
              console.log(res.data);
            }, (res) => {
              console.log('failure!');
            });
          }
        }
      },
      updateBloodhound(dataset) {
        if (dataset === 'genus') {
          Bloodhound.updateGenus(this.form.family);
        }
        else if (dataset === 'species') {
          Bloodhound.updateSpecies(this.form.genus);
        }
      },
      showLatitudeModal() {
        $('.latitude-modal').modal('show');
      },
      showLongitudeModal() {
        $('.longitude-modal').modal('show');
      },
      saveEntry() {
        var specimen = this.$resource('api/specimens{/id}');
        specimen.save(this.form).then((res) => {
          this.form = Vue.util.extend({}, entryModel.defaults);
          $('.saved-modal').modal('show');
        }, (res) => {
          console.log('failure!');
        });
      }
    },
    events: {
      'import-modal:confirm': function (target) {
        var record = DataPortal.store[this.form.catalogNumber];
        this.form.family = record.family || '';
        this.form.genus = record.genus || '';
        this.form.species = record.specificEpithet || '';
        if (record.typeStatus) {
          this.isTypeSpecimen = true;
          this.form.type = record.typeStatus || '';
          this.form.describedBy = record.scientificNameAuthorship || '';
        }
        this.form.country = record.country || '';
        this.form.locality = record.locality || '';
        this.form.latitude = record.decimalLatitude || '';
        this.form.longitude = record.decimalLongitude || '';
        this.form.collectedBy = record.recordedBy || '';
        this.$nextTick(function () {
          Bloodhound.update();
          this.$validate('family', true);
          this.$validate('genus', true);
          this.$validate('species', true);
          this.$validate('type', true);
          this.$validate('describedBy', true);
          this.$validate('country', true);
          this.$validate('locality', true);
          if (this.form.latitude.length > 0) {
            this.$validate('latitude', true);
          }
          if (this.form.longitude.length > 0) {
            this.$validate('longitude', true);
          }
          if (this.form.collectedBy.length > 0) {
            this.$validate('collectedBy', true);
          }
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

  #genus,
  #species {
    font-style: italic;
  }

  .c-input>input:checked~.c-indicator {
    background-color: #5cb85c;
  }
</style>
