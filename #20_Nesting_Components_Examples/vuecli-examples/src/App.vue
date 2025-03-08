<template>
  <div>
    <my-header-component></my-header-component>
    <my-ninja-component></my-ninja-component>
    <my-footer-component></my-footer-component>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ninja from './components/Ninja.vue'
import Footer from './components/Footer.vue'

export default {
  data () {
    return {}
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
