<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data () {
    return {}
  },
  methods: {
    changeTitle() {
      this.title = 'Vue Wizards'; // this changes apply only to this component
      this.$emit('change-title', 'Vue Wizards'); // emitting a custom event to parent component
    }
  },
}
</script>

<style scoped>
  header {
    background-color: lightgreen;
    padding: 10px;
  }
  h1, h3 {
    color: #222;
    text-align: center;
  }
</style>
