new Vue({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    age: 24,
  },
  //? Method will always reexecutes the code irrespective of changes in the code.
  methods: {
    /*
    addToA: function () {
      console.log('addToA')
      return this.age + this.a
    },
    addToB: function () {
      console.log('addToB')
      return this.age + this.b
    }
    */
  },
  //? where as computed will reexecute the code then only if one of it's dependency's values changed.
  computed: {
    addToA: function () {
      console.log('addToA')
      return this.age + this.a
    },
    addToB: function () {
      console.log('addToB')
      return this.age + this.b
    }
  }
})