<template>
  <div>
    <h1> {{ name }} </h1>
    <ul>
      <li v-for="ninja of ninjas"> {{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Nested Component',
      ninjas: ['Ryu', 'Mario', 'Luigi', 'Tailas']
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>
