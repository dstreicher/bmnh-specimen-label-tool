import Vue from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

router.map({
  '/home': {
    component: Home
  }
});

router.redirect({
  '*': '/home'
});

router.start(App, '#app');
