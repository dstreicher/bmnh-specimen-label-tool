<template>
  <div>
    <!--<div class="row">
      <div class="col-xs-12 col-md-6">
        <button v-on:click="downloadPDF" type="button" class="btn btn-success">Download</button>
        <button onclick='window.open("dist/pdf/specimen_labels.pdf");' type="button" class="btn btn-success">Open PDF</button>
      </div>
    </div>-->

    <div class="row">
      <div class="col-xs-12 text-xs-center text-md-right">
        <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-success active">
            <input type="radio" class="bg-success" name="options" id="option1" autocomplete="off" checked> Exported <span class="label label-pill label-success">0</span>
          </label>
          <label class="btn btn-warning">
            <input type="radio" name="options" id="option2" autocomplete="off"> To Do <span class="label label-pill label-warning">0</span>
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
          <a class="list-group-item" v-for="specimen in specimens" v-on:click="togglePrintOption($index)">
            <div class="row">
              <div class="col-xs-8">
                <label class="c-input c-checkbox">
                  <input v-model="specimen.shouldPrint" type="checkbox">
                  <span class="c-indicator"></span>
                </label>
                <span class="title">{{specimen.catalogNumber}}</span>
                <span class="subtitle">{{specimen.genus + ' ' + specimen.species}}</span>
              </div>
              <div class="col-xs-4 text-xs-right">
                <button class="btn btn-warning btn-sm" v-on:click.stop="editEntry(specimen._id)">Edit</button>
                <button class="btn btn-success btn-sm" v-on:click.stop="toggleCollapse(specimen._id)" type="button" data-toggle="collapse" data-target="#{{specimen._id}}-collapse"
                  aria-expanded="false" aria-controls="collapseExample">
                  Preview
                </button>
              </div>
            </div>
            <div class="collapse p-t-1" id="{{specimen._id}}-collapse">
              <label-preview :specimen="specimen"></label-preview>
            </div>
          </a>
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
        <button type="button" v-on:click="exportPDF" class="btn btn-success btn-lg btn-block">Export</button>
      </div>
    </div>
    <download-modal></download-modal>
  </div>
</template>

<script>
  import LabelPreview from '../components/LabelPreview.vue'
  import DownloadModal from '../components/DownloadModal.vue'
  export default {
    components: {
      LabelPreview,
      DownloadModal
    },
    data() {
      return {
        paperSize: 'A4',
        specimens: {}
      }
    },
    created() {
      var specimen = this.$resource('api/specimens{/id}');
      specimen.query().then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].shouldPrint = false;
        }
        this.specimens = res.data;
      }, (res) => {
        console.log('failure!');
      });
    },
    methods: {
      togglePrintOption(index) {
        this.specimens[index].shouldPrint = !this.specimens[index].shouldPrint;
      },
      toggleCollapse(id) {
        $('#' + id + '-collapse').collapse('toggle');
      },
      editEntry(id) {
        console.log('edit entry ' + id);
      },
      exportPDF() {
        var specimensToPrint = [];
        for (var i = 0; i < this.specimens.length; i++) {
          if (this.specimens[i].shouldPrint) {
            specimensToPrint.push(this.specimens[i]);
          }
        }
        this.$http.post('/api/pdf', { paperSize: this.paperSize, specimens: specimensToPrint }).then((res) => {
          $('.download-modal').modal('show');
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

  .list-group-item {
    -moz-user-select: none;
    user-select: none;
  }

  .list-group-item.active {
    background-color: #5cb85c;
    border-color: #5cb85c;
  }

  .list-group-item .title {
    font-weight: 600;
  }

  .list-group-item .subtitle {
    font-weight: 500;
    font-style: italic;
  }

  .c-input>input:checked~.c-indicator {
    background-color: #5cb85c;
  }
</style>
