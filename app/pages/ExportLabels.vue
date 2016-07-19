<template>
  <div>
    <div class="row">
      <div class="col-xs-12 text-xs-center text-md-right">
        <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-success" v-on:click="updateFilter('Done')">
            <input type="radio" name="options" id="option1" autocomplete="off" checked> Done <span class="label label-pill label-success">{{doneTotal}}</span>
          </label>
          <label class="btn btn-warning" v-on:click="updateFilter('To Do')">
            <input type="radio" name="options" id="option2" autocomplete="off"> To Do <span class="label label-pill label-warning">{{toDoTotal}}</span>
          </label>
          <label class="btn btn-secondary active" v-on:click="updateFilter()">
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
                <span v-if="specimen.hasBeenExported" class="label label-pill label-success">Done</span>
                <span v-else class="label label-pill label-warning">To Do</span>
              </div>
              <div class="col-xs-4 text-xs-right">
                <button class="btn btn-warning btn-sm" v-link="{name: 'entry', params: { id: specimen._id }}">Edit</button>
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

    <div class="row m-y-2">
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
        <button type="button" v-on:click="exportPDF" :disabled="!$validation.valid" class="btn btn-success btn-lg btn-block">Export</button>
      </div>
    </div>
    <download-modal></download-modal>
  </div>
</template>

<script>
  import LabelPreview from '../components/LabelPreview.vue'
  import DownloadModal from '../components/DownloadModal.vue'
  var _specimens = [];
  export default {
    components: {
      LabelPreview,
      DownloadModal
    },
    data() {
      return {
        paperSize: 'A4',
        specimens: {},
        doneTotal: 0,
        toDoTotal: 0,
        currentFilter: ''
      }
    },
    created() {
      var specimen = this.$resource('api/specimens{/id}');
      specimen.query().then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].shouldPrint = false;
        }
        _specimens = res.data;
        this.specimens = res.data;
        this.updateTotals();
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
      updateFilter(filter) {
        this.currentFilter = filter;
        if (filter === 'Done') {
          this.specimens = _specimens.filter(function (specimen) {
            return specimen.hasBeenExported;
          });
        }
        else if (filter === 'To Do') {
          this.specimens = _specimens.filter(function (specimen) {
            return !specimen.hasBeenExported;
          });
        }
        else {
          this.specimens = _specimens;
        }
      },
      updateTotals() {
        var done = 0;
        for (var i = 0; i < _specimens.length; i++) {
          if (_specimens[i].hasBeenExported) {
            done++;
          }
        }
        this.doneTotal = done;
        this.toDoTotal = _specimens.length - done;
      },
      exportPDF() {
        var specimensToPrint = [];
        var specimensToUpdate = [];
        for (var i = 0; i < this.specimens.length; i++) {
          if (this.specimens[i].shouldPrint) {
            this.specimens[i].shouldPrint = !this.specimens[i].shouldPrint;
            this.specimens[i].hasBeenExported = true;
            var specimen = $.extend({}, this.specimens[i]);
            this.specimens.$set(i, specimen);
            specimensToUpdate.push(this.specimens[i]._id);
            specimensToPrint.push(this.specimens[i]);
          }
        }
        this.updateTotals();
        this.updateFilter(this.currentFilter);
        this.$http.post('/api/specimens/exported', JSON.stringify(specimensToUpdate));
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
