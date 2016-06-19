<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <button v-on:click="downloadPDF" type="button" class="btn btn-success">Download</button>
        <button onclick='window.open("dist/pdf/specimen_labels.pdf");' type="button" class="btn btn-success">Open PDF</button>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 text-xs-center text-md-right">
        <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-success active">
            <input type="radio" class="bg-success" name="options" id="option1" autocomplete="off" checked> Printed <span class="label label-pill label-success">34</span>
          </label>
          <label class="btn btn-warning">
            <input type="radio" name="options" id="option2" autocomplete="off"> To Do <span class="label label-pill label-warning">147</span>
          </label>
          <label class="btn btn-secondary">
            <input type="radio" name="options" id="option3" autocomplete="off"> All
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <div class="list-group">
          <a class="list-group-item" v-on:click="togglePrintOption(1)">
            <label class="c-input c-checkbox">
              <input v-model="shouldPrint" type="checkbox">
              <span class="c-indicator"></span>
            </label>
          </a>
          <a class="list-group-item">Morbi leo risus</a>
          <a class="list-group-item">Porta ac consectetur ac</a>
          <a class="list-group-item">Vestibulum at eros</a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <div class="form-group">
          <label for="paperSize">Paper Format</label>
          <select v-model="paperSize" class="form-control" id="paperSize">
            <option>A3</option>
            <option>A4</option>
            <option>A5</option>
            <option>Letter</option>
          </select>
        </div>
      </div>
      <div class="col-xs-12">
        <button type="button" class="btn btn-success btn-lg btn-block">Export</button>
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
  import LabelPreview from '../components/LabelPreview.vue'
  export default {
    components: {
      LabelPreview
    },
    data() {
      return {
        paperSize: 'A4',
        shouldPrint: false,
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
      togglePrintOption(id) {
        this.shouldPrint = !this.shouldPrint;
      },
      downloadPDF() {
        this.$http.post('/api/pdf', { paperSize: this.paperSize, specimens: this.specimens }).then((res) => {
          window.open('/dist/pdf/specimen_labels.pdf');
        }, (res) => {
          console.log(res);
        });
      }
    }
  }
</script>

<style scoped>
  .active .label-printed {
    border-color: #5cb85c;
    background-color: #5cb85c;
  }

  .label-printed,
  .label-todo {
    border: 1px solid #fff;
  }

  .list-group {
    cursor: pointer;
  }

  .list-group-item.active {
    background-color: #5cb85c;
    border-color: #5cb85c;
  }
</style>
