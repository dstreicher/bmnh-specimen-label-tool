<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="form-group">
          <label for="paperSize">Paper Format</label>
          <select class="form-control" id="paperSize">
            <option>A3</option>
            <option>A4</option>
            <option>A5</option>
            <option>Letter</option>
          </select>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <button v-on:click="downloadPDF" type="button" class="btn btn-success">Download</button>
        <button onclick='window.open("dist/pdf/specimen_labels.pdf", "_blank");' type="button" class="btn btn-success">Open PDF</button>

      </div>
    </div>



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
      var specimen = this.$resource('api/specimens{/id}');
      specimen.query().then((res) => {
        this.specimens = res.data;
      }, (res) => {
        console.log('failure!');
      });
    },
    methods: {
      downloadPDF() {
        this.$http.post('/api/pdf', { specimens: this.specimens }).then((res) => {
          window.open('/dist/pdf/specimen_labels.pdf');
        }, (res) => {
          console.log(res);
        });
      }
    }
  }
</script>

<style scoped>

</style>
