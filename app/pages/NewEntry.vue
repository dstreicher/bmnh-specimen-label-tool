<template>
  <form>
    <fieldset class="form-group">
      <div class="section-header bg-inverse">
        <div class="row">
          <div class="col-xs-6 col-sm-8">
            <span>Classification</span>
          </div>
          <div class="col-xs-6 col-sm-4 pull-right">
            <label class="c-input c-checkbox">
              <input type="checkbox">
              <span class="c-indicator"></span>
              Type Specimen
            </label>
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset class="form-group">
      <label for="catalogNumber">Catalog Number</label>
      <input type="text" class="form-control" id="catalogNumber" placeholder="2008.130">
      <small class="text-muted">BMNH / NHMUK</small>
    </fieldset>
    <fieldset class="form-group">
      <label for="family">Family</label>
      <input type="text" class="form-control" id="family" placeholder="Brevicepitidae">
    </fieldset>
    <fieldset class="form-group">
      <label for="genus">Family</label>
      <input type="text" class="form-control" id="genus" placeholder="Callulina">
    </fieldset>
    <fieldset class="form-group">
      <label for="species">Family</label>
      <input type="text" class="form-control" id="species" placeholder="hanseni">
    </fieldset>

    <fieldset class="form-group">
      <div class="section-header bg-inverse">
        <span>Location</span>
      </div>
    </fieldset>

    <fieldset class="form-group">
      <label for="country">Country</label>
      <input type="text" class="form-control" id="country" placeholder="Tanzania">
    </fieldset>

    <fieldset class="form-group">
      <label for="locality">Locality</label>
      <input type="text" class="form-control" id="locality" placeholder="Morogoro, Maskati Side of the Nguru">
    </fieldset>

    <fieldset class="form-group">
      <label for="latitude">Latitude</label>
      <input type="text" class="form-control" id="latitude" placeholder="06 03' 51.1 S" >
    </fieldset>

    <fieldset class="form-group">
      <label for="longitude">Longitude</label>
      <input type="text" class="form-control" id="longitude" placeholder="37 30' 33.3 E">
    </fieldset>

    <fieldset class="form-group">
      <label for="longitude">Altitude</label>
      <input type="text" class="form-control" id="longitude" placeholder="1790">
      <small class="text-muted">measured in meters</small>
    </fieldset>

    <fieldset class="form-group">
      <div class="section-header bg-inverse">
        <span>Field Data</span>
      </div>
    </fieldset>

    <fieldset class="form-group">
      <label for="fieldID">Field ID</label>
      <input type="text" class="form-control" id="fieldID" placeholder="MW 6960">
    </fieldset>

    <fieldset class="form-group">
      <label for="collectedBy">Collected By</label>
      <input type="text" class="form-control" id="collectedBy" placeholder="D. Gower, R. Hinde, S. Loader">
      <small class="text-muted">first initial, last name</small>
    </fieldset>

    <fieldset class="form-group">
      <label for="collectionDate">Collection Date</label>
      <input type="text" class="form-control" id="collectionDate" placeholder="14/06/2003">
      <small class="text-muted">DD/MM/YYYY format</small>
    </fieldset>

    <fieldset class="form-group">
      <div class="section-header bg-inverse">
        <span>Collection Data</span>
      </div>
    </fieldset>

    <fieldset class="form-group">
      <label for="alcoholConcentration">Alcohol Concentration</label>
      <input type="text" class="form-control" id="alcoholConcentration" placeholder="68.8">
      <small class="text-muted">in percentage</small>
    </fieldset>

    <fieldset class="form-group">
      <label for="alcoholComposition">Alcohol Composition</label>
      <input type="text" class="form-control" id="alcoholComposition" placeholder="Ethanol">
    </fieldset>

    <fieldset class="form-group">
      <label for="alcoholComposition">Date Measured</label>
      <input type="text" class="form-control" id="alcoholComposition" placeholder="04/2016">
      <small class="text-muted">MM/YYYY format</small>
    </fieldset>

    <fieldset class="form-group">
      <label for="additionalInfo">Additional Info</label>
      <textarea class="form-control" id="additionalInfo" rows="3"></textarea>
    </fieldset>

    <fieldset class="form-group">
      <label for="labelSize">Label Size</label>
      <select class="form-control" id="labelSize">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Extra Large</option>
      </select>
    </fieldset>

    <fieldset class="form-group">
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .section-header {
    padding: 1rem;
    border-radius: .25rem;
  }

  .c-input {
    color: #fff;
    -moz-user-select: none;
  }
</style>
