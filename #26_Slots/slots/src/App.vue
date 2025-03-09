<template>
  <div>
    <form-helper>
      <!--* we know we can bind something from parent element to child component but -->
      <!--? what if we want to add bit complex such as HTML template to the child component -->
      <h2> I am the slot title</h2>
      <p> I am the paragraph text for the slot</p>

      <!--! now let's try more thing let suppose we want h2 tag is appear top of h1 tag which is present in child component -->
      <!--! and p tag after that child component sothing like that -->
      <!-- we can give the name to the slot -->
      <h2 slot="h2-tag"> {{ title }}</h2>
      <p slot="p-tag"> I am the paragraph text for the slot</p><hr>

      <!--? Proper Example -->
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleForm">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper'
export default {
  components: {
    'formHelper': formHelper,
  },
  data () {
    return {
      title: 'I am the title from parent component'
    }
  }
}
</script>

<style>
</style>
