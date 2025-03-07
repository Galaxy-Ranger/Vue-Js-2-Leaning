new Vue({
  el: '#vue-app',
  data: {
    available: false,
    nearby: false,
  },
  methods: {
    changeClasses: function () {
      this.available =!this.available;
      this.nearby =!this.nearby;
    }
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby,
      }
    }
  }
})