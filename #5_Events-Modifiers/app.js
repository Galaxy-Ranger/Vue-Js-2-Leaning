new Vue({
  el: '#vue-app',
  data: {
    field: '',
  },
  methods: {
    yesRobot: function() {
      this.field = 'Robot';
    },
    noRobot: function() {
      this.field = 'Person';
    },
  }
})