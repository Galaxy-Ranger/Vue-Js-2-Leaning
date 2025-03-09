import Vue from 'vue'
import App from './App.vue'

//? In order to use the event bus pattern, all you had to do was create a new instance of the Vue constructor,
//? assign the instance to a constant variable named eventBus, and then export it.
//? This instance serves as the event bus, allowing different components in your Vue application to communicate with each other
// export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
