import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Now we need to tell Vue.js that we want to use this in our application
Vue.use(VueResource);

// this is a global directive which means any component can use this
Vue.directive('rainbow', {
  bind: function(el, binding, vnode) {   // these bind function take three parameters el, binding(referse to information about the connection if we pass it in a value like v-rainbow='something') and vnode(refers to virtual node on the DOM)
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme', {
  bind: function(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '800px';
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

//! Important thing
//? is that fiters do not actually change the data directly whereever we store them. We only change how their output to the browser.
//! one more thing vuejs 2 is no longer give us filter by default so we have to make these ourselves.

//! How to use
//* we use filters is by first adding a pipe to the end of the data we want to use a filter on and then the filter name
//? Example {{ title | to-uppercase}}

// this is a global filter which means any component can use this
Vue.filter('to-uppercase', function(value) {  //* this value refers to the data we use the filter on
  return value.toUpperCase();
})

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
