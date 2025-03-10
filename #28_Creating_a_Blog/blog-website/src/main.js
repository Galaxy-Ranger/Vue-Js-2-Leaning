import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Now we need to tell Vue.js that we want to use this in our application
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
