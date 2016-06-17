<template>
  <div>
    <div class="card" v-for="specimen in specimens">
      <h3 class="card-header">{{specimen.catalogNumber}}</h3>
      <div class="card-block">
        <h4 class="card-title">{{specimen.genus + ' ' + specimen.species}}</h4>
        <!--<p class="card-text">{{specimen.}}</p>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        specimens: {}
      }
    },
    created() {
      var view = this;
      var specimen = this.$resource('api/specimens{/id}');
      specimen.query().then((res) => {
        this.specimens = res.data;
      }, (res) => {
        console.log('failure!');
      });
    }
  }
</script>

<style scoped>

</style>
