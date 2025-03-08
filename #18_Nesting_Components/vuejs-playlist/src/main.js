import Vue from 'vue'
import App from './App.vue'
//? now this App.vue is a root component. The component that lives at the very top of our application

//! Method - 1 Registering Newly created Component as Globally
// import Nested_Component from './Nested_Component.vue'
// Vue.component('my-component', Nested_Component)

new Vue({
  el: '#app',
  render: h => h(App)
  //? when we are working with different .vue file we tend to use this approach
})


//? first of all this assets folder which contains any kind of image you want to use

//? second we have this main.js file kicks in when we run this application so this kinda controls everything from the start

//? so this main.js is creating a new instance now which is going to control this entire <div id="app"></div> section and the way this works is that all of our application code is eventually be output in between these div.
