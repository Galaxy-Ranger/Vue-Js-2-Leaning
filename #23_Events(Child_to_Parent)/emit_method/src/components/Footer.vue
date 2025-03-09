<template>
  <footer>
    <p>{{ copyright }} {{ title }}. . All rights reserved.</p>
    <!-- <p>{{ name }}</p> -->
  </footer>
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
    return {
      copyright: 'Copyright 2025 '
    }
  },
  // when do we listen to that event, well we want to listen to it from the point that the component is created and to do that we're going to use life cycle hook
  // created() {
  //   eventBus.$on('custom-event', data => this.name = data)
  // }
}
</script>

<style scoped>
  footer {
    background-color: #222;
    padding: 6px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
