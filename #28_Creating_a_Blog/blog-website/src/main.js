import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Now we need to tell Vue.js that we want to use this in our application
Vue.use(VueResource);

// #34_Custom Directive
Vue.directive('rainbow', {
  bind: function(el, binding, vnode) {   // these bind function take three parameters el, binding(referse to information about the connection if we pass it in a value like v-rainbow='something') and vnode(refers to virtual node on the DOM)
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme', {
  bind: function(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
    if (binding.arg == 'column') {   // this will work when we give arguments to the custom directive like v-theme:column=""
      el.style.boxSizing = 'border-box';
      el.style.padding = '1rem';
      el.style.border = '5px solid #ccc';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
