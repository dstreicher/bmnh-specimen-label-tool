<template>
  <div>
    <div class="label-container" :class="specimen.labelSize">
      <div class="record-row">
        <span class="catalog-number">{{specimen.catalogNumber}}</span>
        <span class="family">{{specimen.family}}</span>
      </div>
      <div class="name-row">
        <span class="scientific-name">{{specimen.genus}} {{specimen.species}} <span class="described-by">{{specimen.describedBy}}</span></span>
      </div>
      <div class="location-row">
        <span class="country-locality">{{specimen.country}}: {{specimen.locality}}</span>
        <span class="country-tag">{{specimen.genus.substring(0,2).toUpperCase()}}{{specimen.species.substring(0,2).toUpperCase()}}-{{specimen.countryCode}}</span>
        <span class="country-locality">
        <span v-if="specimen.latitude">{{specimen.latitude}}°</span>
        <span v-if="specimen.latitude && specimen.longitude">,</span>
        <span v-if="specimen.longitude">{{specimen.longitude}}°</span>
        <span v-if="specimen.altitude">, {{specimen.altitude}} m</span>
        </span>
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

<style>
  .label-container {
    background-color: #fff;
    height: 16.3em;
    width: 27em;
    color: #000;
    font-size: 0;
    border: 0.1em solid #000;
    padding: 0.2em;
  }

  .label-container.Small {
    height: 4.5cm;
    width: 8cm;
    font-size: 8px;
  }

  .label-container.Medium {
    height: 5.625cm;
    width: 10cm;
    font-size: 10px;
  }

  .label-container.Large {
    height: 7.875cm;
    width: 14cm;
    font-size: 12px;
  }

  .label-container.Extra.Large {
    height: 10.125cm;
    width: 18cm;
    font-size: 14px;
  }

  .record-row {
    border-top: 0.15em solid #000;
    padding: 0 0.5em;
  }

  .record-row .catalog-number {
    display: inline-block;
    width: 50%;
    font-weight: 600;
    font-size: 1.3em;
  }

  .record-row .family {
    display: inline-block;
    width: 50%;
    text-align: right;
    font-weight: 600;
    font-size: 1.1em;
  }

  .name-row {
    border-top: 0.15em solid #000;
    padding: 0 0.5em;
  }

  .name-row .scientific-name {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-style: italic;
    font-weight: 600;
    font-size: 1.1em;
  }

  .name-row .described-by {
    font-size: 0.7em;
  }

  .location-row {
    border-top: 0.15em solid #000;
    padding: 0.5em 0.5em 0;
    min-height: 5.5em;
  }

  .location-row .country-locality {
    display: inline-block;
    width: 60%;
    text-align: left;
    font-size: 0.8em;
    font-weight: 600;
    line-height: 1em;
  }

  .location-row .country-tag {
    display: inline-block;
    width: 40%;
    text-align: right;
    font-size: 1.2em;
    font-weight: 600;
    line-height: 0.5em;
  }

  .collection-row {
    padding: 0.5em 0.5em 0.5em;
  }

  .collection-row .collection-info {
    display: inline-block;
    width: 80%;
    text-align: left;
    font-size: 0.8em;
    line-height: 1em;
  }

  .nhm-row {
    border-top: 0.15em solid #000;
    border-bottom: 0.15em solid #000;
    padding: 0.5em 0.5em 0.5em;
  }

  .nhm-row .nhm-label {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    line-height: 1em;
  }

  .data-matrix {
    position: relative;
    bottom: 5.8em;
    text-align: right;
    padding: 0 0.5em;
  }

  .data-matrix .barcode {
    background-color: #fff;
    width: 48px;
    height: 48px;
  }

  .type-label {
    position: relative;
    bottom: 7.2em;
    text-align: right;
    padding-right: 4.2em;
  }

  .type-label .type-text {
    font-size: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
