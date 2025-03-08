new Vue({
  el: '#vue-app',
  data: {
    refValue: ''
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs);
      //? $refs is going to get us a list of all of our references on the page or within the scope of vue.
      this.refValue = this.$refs.input.value;
    }
  }
})