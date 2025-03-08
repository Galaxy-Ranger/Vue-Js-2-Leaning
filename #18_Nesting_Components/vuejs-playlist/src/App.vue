<!--? A .vue file is just an extension of a component -->
<template>
  <div>
    <h1>Welcome to Vue CLI</h1>
    <p>How may i assist you {{ name }}</p>
    <button @click="greet">Greeting</button>

    <!-- Globally registered component usage -->

    <!-- Locally registered component usage -->
    <my-component></my-component>
  </div>
</template>

<script>
// Importing component as locally
import Nested_Component from './Nested_Component.vue'
// inside this template we can access data from this below object
export default {
  // this name is the name of the component
  data () {
    return {
      name: 'Surya Pratap Singh' // this is the data that we want to use in our template
    }
  },
  methods: {
    // any methods here will be accessible in our template
    greet() {
      alert(`Hello Master, ${this.name}!`)
    }
  },
  components: {
    'my-component': Nested_Component
  }
}
</script>

<style>
  h1 {
    color: purple;
  }
</style>
