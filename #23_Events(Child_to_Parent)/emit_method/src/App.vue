<template>
  <div>
    <my-header-component v-bind:title="title" v-on:change-title="updateTitle($event)"></my-header-component>
    <my-ninja-component v-bind:ninjas="ninjas"></my-ninja-component>
    <!--? this effect is happing due to pass reference concept -->
    <!-- <my-ninja-component v-bind:ninjas="ninjas"></my-ninja-component> -->
    <my-footer-component v-bind:title="title"></my-footer-component>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ninja from './components/Ninja.vue'
import Footer from './components/Footer.vue'

export default {
  data () {
    return {
      title: 'Vue Ninjas',
      name: 'Surya Pratap Singh',
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
    ]
    }
  },
  methods: {
    updateTitle (title) {
      this.title = title
    }
  },
  components: {
    'my-header-component': Header,
    'my-ninja-component': Ninja,
    'my-footer-component': Footer,
  }
}
</script>

<style>

</style>
