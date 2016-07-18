<template>
  <div>
    <div class="label-container">
      <div class="record-row">
        <span class="catalog-number">{{specimen.catalogNumber}}</span>
        <span class="family">{{specimen.family}}</span>
      </div>
      <div class="name-row">
        <span class="scientific-name">{{specimen.genus}} {{specimen.species}} <span class="described-by">{{specimen.describedBy}}</span></span>
      </div>
      <div class="location-row">
        <span class="country-locality">{{specimen.country}}: {{specimen.locality}}</span>
        <span class="country-locality">South Forest Reserve</span>
        <span class="country-locality">{{specimen.latitude}}°, {{specimen.longitude}}°, {{specimen.altitude}} m</span>
      </div>
      <div class="collection-row">
        <span class="collection-info">{{specimen.fieldID}}</span>
        <span class="collection-info">Coll: {{specimen.collectedBy}}</span>
        <span class="collection-info">Date: {{specimen.collectionDate}}</span>
        <span class="collection-info">{{specimen.alcoholConcentration}}% {{specimen.alcoholComposition}} ({{specimen.dateMeasured}})</span>
      </div>
      <div class="nhm-row">
        <span class="nhm-label">The Natural History Museum (BMNH) - Amphibian Collection</span>
      </div>
      <div class="data-matrix">
        <img class="barcode" v-bind:src="specimen.dataMatrixImage">
      </div>
      <div class="type-label">
        <span class="type-text">{{specimen.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'specimen'
    ]
  }
</script>

<style scoped>
  .label-container {
    background-color: #fff;
    height: 16.3rem;
    width: 27rem;
    color: #000;
    font-size: 0;
    border: 0.1rem solid #000;
    padding: 0.2rem;
  }

  .record-row {
    border-top: 0.15rem solid #000;
    padding: 0 0.5rem;
  }

  .record-row .catalog-number {
    display: inline-block;
    width: 50%;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .record-row .family {
    display: inline-block;
    width: 50%;
    text-align: right;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .name-row {
    border-top: 0.15rem solid #000;
    padding: 0 0.5rem;
  }

  .name-row .scientific-name {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-style: italic;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .name-row .described-by {
    font-size: 0.7rem;
  }

  .location-row {
    border-top: 0.15rem solid #000;
    padding: 0.5rem 0.5rem 0;
  }

  .location-row .country-locality {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
  }

  .collection-row {
    padding: 0.5rem 0.5rem 0.5rem;
  }

  .collection-row .collection-info {
    display: inline-block;
    width: 80%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1rem;
  }

  .nhm-row {
    border-top: 0.15rem solid #000;
    border-bottom: 0.15rem solid #000;
    padding: 0.5rem 0.5rem 0.5rem;
  }

  .nhm-row .nhm-label {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1rem;
  }

  .data-matrix {
    position: relative;
    bottom: 5.8rem;
    text-align: right;
    padding: 0 0.5rem;
  }

  .data-matrix .barcode {
    background-color: #fff;
    width: 48px;
    height: 48px;
  }

  .type-label {
    position: relative;
    bottom: 7.2rem;
    text-align: right;
    padding-right: 4.2rem;
  }

  .type-label .type-text {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
