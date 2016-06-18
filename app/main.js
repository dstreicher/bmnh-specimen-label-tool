import Vue from 'vue';
import App from './App.vue';
import NewEntry from './pages/NewEntry.vue';
import ExportLabels from './pages/ExportLabels.vue';
import ExportCSV from './pages/ExportCSV.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);

export var router = new VueRouter();

router.map({
  '/new-entry': {
    component: NewEntry
  },
  '/export-labels': {
    component: ExportLabels
  },
  '/export-csv': {
    component: ExportCSV
  }
});

router.redirect({
  '*': '/new-entry'
});

router.start(App, '#app');
