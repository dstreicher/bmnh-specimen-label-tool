<template>
  <div>
    <div class="label-container">
      <div class="record-row">
        <span class="catalog-number">1856.16.4.23</span>
        <span class="family">Calyptocephalellidae</span>
      </div>
      <div class="name-row">
        <span class="scientific-name">Ambystoma macrodactylum <span class="described-by">Loader et. all (1850)</span></span>
      </div>
      <div class="location-row">
        <span class="country-locality">Tanzania: Morogoro: Maskati side of the Nguru</span>
        <span class="country-locality">South Forest Reserve</span>
        <span class="country-locality">06&#176; 03' 51.1" S, 37&#176; 30' 33.3" E, 1790 m</span>
      </div>
      <div class="collection-row">
        <span class="collection-info">Field ID: MW 6960</span>
        <span class="collection-info">Coll: D. Gower, R. Hinde, S. Loader, H. Muller, M.Perkins, M. Wilkinson</span>
        <span class="collection-info">Date: 12/20/2005</span>
        <span class="collection-info">68.8% Ethanol (04/2016)</span>
      </div>
      <div class="nhm-row">
        <span class="nhm-label">The Natural History Museum (BMNH) - Amphibian Collection</span>
      </div>
      <div class="data-matrix">
        <img class="barcode" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMA/1uRIrUAAABpSURBVHiczZJBDgAhCAPx/59eTwZKjZw20wsJdEwqxNqKrWkdG38GnHR2ICgQSWrWPhVwIVtY/SUYcFuSg6jAK2iZQYF8YGpsBwoFbkHdg3TALSqrhQYBIVJTqVAgN9RUluZMIGAqIPABVzYF4Srwy9oAAAAASUVORK5CYII=">
      </div>
      <div class="type-label">
        <span class="type-text">paralectotype</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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