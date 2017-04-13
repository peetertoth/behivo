import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';

import HomePage from './components/pages/HomePage.vue';
import TestPage from './components/pages/TestPage.vue';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/test',
      component: TestPage
    }
  ]
});

new Vue({
  router,
  el: '#app',
  components: {
    app: App
  },
  template: '<app></app>'
});
