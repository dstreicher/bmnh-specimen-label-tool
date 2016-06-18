<template>
  <div>
    <div class="label-container">
      <div class="record-row">
        <h4 class="catalog-number">2008.130</h4>
        <h5 class="family">Brevicepitidae</h5>
      </div>
      <div class="name-row">
        <h5 class="scientific-name">Callulina hanseni</h5>
      </div>
      <div class="location-row">
        <h5 class="country-locality">Tanzania: Morogoro: Maskati side of the Nguru</h5>
        <h5 class="country-locality">South Forest Reserve</h5>
        <h5 class="country-locality">06&#176; 03' 51.1" S, 37&#176; 30' 33.3" E, 1790 m</h5>
      </div>
      <div class="collection-row">
        <p>
          Field ID: MW 6960
          Coll: D. Gower, R. Hinde, S. Loader, H. Muller, M.Perkins, M. Wilkinson
          Date: 12/20/2005

          68.8% Ethanol (04/2016)
        </p>
      </div>
      <div class="data-matrix">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMA/1uRIrUAAABpSURBVHiczZJBDgAhCAPx/59eTwZKjZw20wsJdEwqxNqKrWkdG38GnHR2ICgQSWrWPhVwIVtY/SUYcFuSg6jAK2iZQYF8YGpsBwoFbkHdg3TALSqrhQYBIVJTqVAgN9RUluZMIGAqIPABVzYF4Srwy9oAAAAASUVORK5CYII=">
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
    height: 10rem;
    width: 20rem;
    color: black;
    font-size:0
  }

  .divider.record-row {
    padding-top: 2px;
  }

  .catalog-number {
    display: inline-block;
    width: 50%;
    font-weight: 600;
    font-size:1.3rem;
  }

  .family {
    display: inline-block;
    width: 50%;
    text-align: right;
    font-weight: 600;
    font-size:1rem;
  }

  .scientific-name {
    display: inline-block;
    width: 50%;
    text-align: left;
    font-style: italic;
    font-weight: 600;
    font-size:1rem;
  }

  .country-locality {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .data-matrix {
    float: right;
    display: block;
  }

  .divider {
    border-top: 0.15rem solid #000;
    border-bottom: 0.15rem solid #000;
  }
</style>
