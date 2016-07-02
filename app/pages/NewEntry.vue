<template>
  <div>
    <validator name="validation">
      <form novalidate>
        <fieldset class="form-group">
          <div class="col-xs-12">
            <small class="text-muted">* indicates required field</small>
          </div>
        </fieldset>

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

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.catalogNumber.touched && $validation.catalogNumber.invalid), 'has-success': ($validation.catalogNumber.touched && $validation.catalogNumber.valid) }">
              <label for="catalogNumber">Catalog Number *</label>
              <small v-for="error in $validation.catalogNumber.errors" v-if="$validation.catalogNumber.touched && $validation.catalogNumber.invalid"
                class="text-danger pull-xs-right">{{error.message}}</small>
              <input type="text" v-model="form.catalogNumber" v-on:change="checkData" v-validate:catalog-number="validation.catalogNumber"
                class="form-control" id="catalogNumber" placeholder="2008.130" v-bind:class="{ 'form-control-danger': $validation.catalogNumber.invalid, 'form-control-success': ($validation.catalogNumber.touched && $validation.catalogNumber.valid) }">
              <small class="text-muted">BMNH / NHMUK</small>
            </fieldset>
          </div>
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.family.touched && $validation.family.invalid), 'has-success': ($validation.family.touched && $validation.family.valid) }">
              <label for="family">Family *</label>
              <small v-for="error in $validation.family.errors" v-if="$validation.family.touched && $validation.family.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
              <input type="text" v-model="form.family" class="typeahead form-control" id="family" placeholder="Brevicepitidae" v-validate:family="validation.family"
                v-bind:class="{ 'form-control-danger': $validation.family.invalid, 'form-control-success': ($validation.family.touched && $validation.family.valid) }">
            </fieldset>
          </div>
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.genus.touched && $validation.genus.invalid), 'has-success': ($validation.genus.touched && $validation.genus.valid) }">
              <label for="genus">Genus *</label>
              <small v-for="error in $validation.genus.errors" v-if="$validation.genus.touched && $validation.genus.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
              <input type="text" v-model="form.genus" class="form-control" id="genus" placeholder="Callulina" v-validate:genus="validation.genus"
                v-bind:class="{ 'form-control-danger': $validation.genus.invalid, 'form-control-success': ($validation.genus.touched && $validation.genus.valid) }">
            </fieldset>
          </div>
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.species.touched && $validation.species.invalid), 'has-success': ($validation.species.touched && $validation.species.valid) }">
              <label for="species">Species *</label>
              <small v-for="error in $validation.species.errors" v-if="$validation.species.touched && $validation.species.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
              <input type="text" v-model="form.species" class="form-control" id="species" placeholder="hanseni" v-validate:species="validation.species"
                v-bind:class="{ 'form-control-danger': $validation.species.invalid, 'form-control-success': ($validation.species.touched && $validation.species.valid) }">
            </fieldset>
          </div>
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" :disabled="!isTypeSpecimen" v-bind:class="{ 'has-danger': ($validation.type.touched && $validation.type.invalid), 'has-success': ($validation.type.touched && $validation.type.valid) }">
              <label for="type">Type</label>
              <small v-for="error in $validation.type.errors" v-if="$validation.type.touched && $validation.type.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
              <input type="text" v-model="form.type" class="form-control text-uppercase" id="type" placeholder="Holotype" v-validate:type="validation.type"
                v-bind:class="{ 'form-control-danger': $validation.type.invalid, 'form-control-success': ($validation.type.touched && $validation.type.valid) }">
            </fieldset>
          </div>
          <div class="col-xs-12 col-md-12">
            <fieldset class="form-group" :disabled="!isTypeSpecimen" v-bind:class="{ 'has-danger': ($validation.describedBy.touched && $validation.describedBy.invalid), 'has-success': ($validation.describedBy.touched && $validation.describedBy.valid) }">
              <label for="describedBy">Described By</label>
              <small v-for="error in $validation.describedBy.errors" v-if="$validation.describedBy.touched && $validation.describedBy.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
              <input type="text" v-model="form.describedBy" class="form-control" id="describedBy" placeholder="Loader, Gower, Hinde, Muller"
                v-validate:described-by="validation.describedBy" v-bind:class="{ 'form-control-danger': $validation.describedBy.invalid, 'form-control-success': ($validation.describedBy.touched && $validation.describedBy.valid) }">
              <small class="text-muted">last name</small>
            </fieldset>
          </div>
        </div>

        <fieldset class="form-group">
          <div class="section-header bg-inverse">
            <span>Location</span>
          </div>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.country.touched && $validation.country.invalid), 'has-success': ($validation.country.touched && $validation.country.valid) }">
          <label for="country">Country *</label>
          <small v-for="error in $validation.country.errors" v-if="$validation.country.touched && $validation.country.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.country" class="form-control" id="country" placeholder="Tanzania" v-validate:country="validation.country"
            v-bind:class="{ 'form-control-danger': $validation.country.invalid, 'form-control-success': ($validation.country.touched && $validation.country.valid) }">
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.locality.touched && $validation.locality.invalid), 'has-success': ($validation.locality.touched && $validation.locality.valid) }">
          <label for="locality">Locality *</label>
          <small v-for="error in $validation.locality.errors" v-if="$validation.locality.touched && $validation.locality.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.locality" class="form-control" id="locality" placeholder="Morogoro, Maskati Side of the Nguru"
            v-validate:locality="validation.locality" v-bind:class="{ 'form-control-danger': $validation.locality.invalid, 'form-control-success': ($validation.locality.touched && $validation.locality.valid) }">
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.latitude.touched && $validation.latitude.invalid), 'has-success': ($validation.latitude.touched && $validation.latitude.valid) }">
          <label for="latitude">Latitude *</label>
          <small v-for="error in $validation.latitude.errors" v-if="$validation.latitude.touched && $validation.latitude.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.latitude" class="form-control" id="latitude" placeholder="06 03' 51.1 S" v-validate:latitude="validation.latitude"
            v-bind:class="{ 'form-control-danger': $validation.latitude.invalid, 'form-control-success': ($validation.latitude.touched && $validation.latitude.valid) }">
          <small class="text-muted">DD MM SS N/S format</small>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.longitude.touched && $validation.longitude.invalid), 'has-success': ($validation.longitude.touched && $validation.longitude.valid) }">
          <label for="longitude">Longitude *</label>
          <small v-for="error in $validation.longitude.errors" v-if="$validation.longitude.touched && $validation.longitude.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.longitude" class="form-control" id="longitude" placeholder="37 30' 33.3 E" v-validate:longitude="validation.longitude"
            v-bind:class="{ 'form-control-danger': $validation.longitude.invalid, 'form-control-success': ($validation.longitude.touched && $validation.longitude.valid) }">
          <small class="text-muted">DD MM SS E/W format</small>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.altitude.touched && $validation.altitude.invalid), 'has-success': ($validation.altitude.touched && $validation.altitude.valid) }">
          <label for="altitude">Altitude</label>
          <small v-for="error in $validation.altitude.errors" v-if="$validation.altitude.touched && $validation.altitude.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.altitude" class="form-control" id="altitude" placeholder="1790" v-validate:altitude="validation.altitude"
            v-bind:class="{ 'form-control-danger': $validation.altitude.invalid, 'form-control-success': ($validation.altitude.touched && $validation.altitude.valid) }">
          <small class="text-muted">measured in meters</small>
        </fieldset>

        <fieldset class="form-group">
          <div class="section-header bg-inverse">
            <span>Field Data</span>
          </div>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.fieldId.touched && $validation.fieldId.invalid), 'has-success': ($validation.fieldId.touched && $validation.fieldId.valid) }">
          <label for="fieldId">Field ID</label>
          <small v-for="error in $validation.fieldId.errors" v-if="$validation.fieldId.touched && $validation.fieldId.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.fieldId" class="form-control" id="fieldId" placeholder="MW 6960" v-validate:field-id="validation.fieldId"
            v-bind:class="{ 'form-control-danger': $validation.fieldId.invalid, 'form-control-success': ($validation.fieldId.touched && $validation.fieldId.valid) }">
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.collectedBy.touched && $validation.collectedBy.invalid), 'has-success': ($validation.collectedBy.touched && $validation.collectedBy.valid) }">
          <label for="collectedBy">Collected By *</label>
          <small v-for="error in $validation.collectedBy.errors" v-if="$validation.collectedBy.touched && $validation.collectedBy.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.collectedBy" class="form-control" id="collectedBy" placeholder="D. Gower, R. Hinde, S. Loader"
            v-validate:collected-by="validation.collectedBy" v-bind:class="{ 'form-control-danger': $validation.collectedBy.invalid, 'form-control-success': ($validation.collectedBy.touched && $validation.collectedBy.valid) }">
          <small class="text-muted">first initial, last name</small>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.collectionDate.touched && $validation.collectionDate.invalid), 'has-success': ($validation.collectionDate.touched && $validation.collectionDate.valid) }">
          <label for="collectionDate">Collection Date</label>
          <small v-for="error in $validation.collectionDate.errors" v-if="$validation.collectionDate.touched && $validation.collectionDate.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.collectionDate" class="form-control" id="collectionDate" placeholder="14/06/2003" v-validate:collection-date="validation.collectionDate"
            v-bind:class="{ 'form-control-danger': $validation.collectionDate.invalid, 'form-control-success': ($validation.collectionDate.touched && $validation.collectionDate.valid) }">
          <small class="text-muted">DD/MM/YYYY format</small>
        </fieldset>

        <fieldset class="form-group">
          <div class="section-header bg-inverse">
            <span>Collection Data</span>
          </div>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.alcoholConcentration.touched && $validation.alcoholConcentration.invalid), 'has-success': ($validation.alcoholConcentration.touched && $validation.alcoholConcentration.valid) }">
          <label for="alcoholConcentration">Alcohol Concentration *</label>
          <small v-for="error in $validation.alcoholConcentration.errors" v-if="$validation.alcoholConcentration.touched && $validation.alcoholConcentration.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.alcoholConcentration" class="form-control" id="alcoholConcentration" placeholder="68.8"
            v-validate:alcohol-concentration="validation.alcoholConcentration" v-bind:class="{ 'form-control-danger': $validation.alcoholConcentration.invalid, 'form-control-success': ($validation.alcoholConcentration.touched && $validation.alcoholConcentration.valid) }">
          <small class="text-muted">in percentage</small>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.alcoholComposition.touched && $validation.alcoholComposition.invalid), 'has-success': ($validation.alcoholComposition.touched && $validation.alcoholComposition.valid) }">
          <label for="alcoholComposition">Alcohol Composition *</label>
          <small v-for="error in $validation.alcoholComposition.errors" v-if="$validation.alcoholComposition.touched && $validation.alcoholComposition.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.alcoholComposition" class="form-control" id="alcoholComposition" placeholder="Ethanol" v-validate:alcohol-composition="validation.alcoholComposition"
            v-bind:class="{ 'form-control-danger': $validation.alcoholComposition.invalid, 'form-control-success': ($validation.alcoholComposition.touched && $validation.alcoholComposition.valid) }">
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.dateMeasured.touched && $validation.dateMeasured.invalid), 'has-success': ($validation.dateMeasured.touched && $validation.dateMeasured.valid) }">
          <label for="dateMeasured">Date Measured *</label>
          <small v-for="error in $validation.dateMeasured.errors" v-if="$validation.dateMeasured.touched && $validation.dateMeasured.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <input type="text" v-model="form.dateMeasured" class="form-control" id="dateMeasured" placeholder="04/2016" v-validate:date-measured="validation.dateMeasured"
            v-bind:class="{ 'form-control-danger': $validation.dateMeasured.invalid, 'form-control-success': ($validation.dateMeasured.touched && $validation.dateMeasured.valid) }">
          <small class="text-muted">MM/YYYY format</small>
        </fieldset>

        <fieldset class="form-group" v-bind:class="{ 'has-danger': ($validation.additionalInfo.touched && $validation.additionalInfo.invalid), 'has-success': ($validation.additionalInfo.touched && $validation.additionalInfo.valid) }">
          <label for="additionalInfo">Additional Info</label>
          <small v-for="error in $validation.additionalInfo.errors" v-if="$validation.additionalInfo.touched && $validation.additionalInfo.invalid" class="text-danger pull-xs-right">{{error.message}}</small>
          <textarea v-model="form.additionalInfo" class="form-control" id="additionalInfo" rows="3" v-validate:additional-info="validation.additionalInfo"
            v-bind:class="{ 'form-control-danger': $validation.additionalInfo.invalid, 'form-control-success': ($validation.additionalInfo.touched && $validation.additionalInfo.valid) }"></textarea>
        </fieldset>

        <fieldset class="form-group">
          <label for="labelSize">Label Size *</label>
          <select v-model="form.labelSize" class="form-control" id="labelSize">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Extra Large</option>
      </select>
        </fieldset>

        <fieldset class="form-group submit-block" :disabled="!$validation.valid">
          <button v-on:click="saveEntry" type="button" class="btn btn-success btn-lg btn-block">Add Entry</button>
        </fieldset>
      </form>
    </validator>
    <prompt-modal target="import-modal" title-text="Data Import" body-text="This catalog number has specimen data associated with it on the NHM Data Portal. Would you like to import the data?"
      confirm-text="Import"></prompt-modal>
    <prompt-modal target="saved-modal" title-text="Entry Saved" body-text="Specimen entry saved to database."></prompt-modal>
  </div>
</template>

<script>
  import entryModel from '../models/entry.model'
  import cvars from '../services/cvars.service'
  import Bloodhound from '../services/bloodhound.service'
  import DataPortal from '../services/dataportal.service'
  import PromptModal from '../components/PromptModal.vue'

  export default {
    components: {
      PromptModal
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
      saveEntry() {
        var specimen = this.$resource('api/specimens{/id}');
        specimen.save(this.form).then((res) => {
          this.form = entryModel.defaults;
          // this.form.catalogNumber = '';
          // this.form.family = '';
          // this.form.genus = '';
          // this.form.species = '';
          // this.form.type = '';
          // this.form.describedBy = '';
          // this.form.country = '';
          // this.form.locality = '';
          // this.form.latitude = '';
          // this.form.longitude = '';
          // this.form.altitude = '';
          // this.form.fieldId = '';
          // this.form.collectedBy = '';
          // this.form.collectionDate = '';
          // this.form.alcoholConcentration = '';
          // this.form.alcoholComposition = '';
          // this.form.dateMeasured = '';
          // this.form.additionalInfo = '';
          // this.form.labelSize = 'Small';
          $('.saved-modal').modal('show');
        }, (res) => {
          console.log('failure!');
        });
      }
    },
    events: {
      'import-modal:confirm': function (target) {
        var record = DataPortal.store[this.form.catalogNumber];
        this.form.family = record.family;
        this.form.genus = record.genus;
        this.form.species = record.specificEpithet;
        if (record.typeStatus) {
          this.isTypeSpecimen = true;
          this.form.type = record.typeStatus;
          this.form.describedBy = record.scientificNameAuthorship;
        }
        this.form.country = record.country;
        this.form.locality = record.locality;
        this.form.latitude = record.verbatimLatitude;
        this.form.longitude = record.verbatimLongitude;
        // this.form.altitude = record.;
        // this.form.fieldId = record.;
        this.form.collectedBy = record.recordedBy;
        //this.form.collectionDate = record.;
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
