<template>
  <div id="app">
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to Log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper'

export default {
  components: {
    'formHelper': formHelper,
  },
  data () {
    return {
    }
  },
  methods: {
    handleSubmit: function() {
      alert("Done!")
    }
  }
}
</script>

<style>
</style>
