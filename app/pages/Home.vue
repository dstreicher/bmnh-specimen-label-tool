<template>
  <div class="row">
    <div class="col-xs-4">.col-xs-4</div>
    <div class="col-xs-4">.col-xs-4</div>
    <div class="col-xs-4">.col-xs-4</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: 'foo'
      }
    },
    methods: {
      getQuote() {
        this.quote = 'bar';
      }
    }
  }
</script>

<style scoped>
  [class*="col-"] {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgba(86, 61, 124, .15);
    border: 1px solid rgba(86, 61, 124, .2);
  }
</style>
