new Vue({
  el: '#vue-app',
  data: {
    bagHealth: '100',
    ended: false
  },
  methods: {
    punch: function() {
      // console.log('punch')
      this.bagHealth = Number(this.bagHealth) - 10
      if (this.bagHealth <= 0) {
        this.ended = true
      }
    },
    restart: function() {
      // console.log('restart')
      this.bagHealth = '100'
      this.ended = false
    }
  },
  computed: {
  }
})