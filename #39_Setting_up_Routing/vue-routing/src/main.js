import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

// How do we setup these route what will need to do is create a new instance of the vue router
const router = new VueRouter({
  routes: routes,
  // #40 hash vs history mode in vue-router
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router, // inject the router into Vue instance
})

