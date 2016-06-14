import Vue from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import NewEntry from './pages/NewEntry.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

router.map({
  '/home': {
    component: Home
  },
  '/new': {
    component: NewEntry
  }
});

router.redirect({
  '*': '/home'
});

router.start(App, '#app');
