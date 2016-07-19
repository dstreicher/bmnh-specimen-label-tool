import Vue from 'vue';
import App from './App.vue';
import Entry from './pages/Entry.vue';
import ExportLabels from './pages/ExportLabels.vue';
import ExportCSV from './pages/ExportCSV.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';
import validators from './services/validators.service';
import cvars from './services/cvars.service';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);

Vue.config.warnExpressionErrors = false;

export var router = new VueRouter();

var keys = Object.keys(validators);
for (var i = 0; i < keys.length; i++) {
  Vue.validator(keys[i], validators[keys[i]]);
}

router.map({
  '/entry/:id': {
    name: cvars.ENTRY_ROUTE_NAME,
    component: Entry
  },
  '/export-labels': {
    name: cvars.LABELS_ROUTE_NAME,
    component: ExportLabels
  },
  '/export-csv': {
    name: cvars.CSV_ROUTE_NAME,
    component: ExportCSV
  }
});

router.redirect({
  '*': '/entry/new'
});

router.start(App, '#app');
