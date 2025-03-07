new Vue({
  el: '#vue-app',
  data: {
    name: 'Surya Pratap Singh',
    profession: 'Student',
  },
  methods: {
    details: function () {
      return 'Hello '+ this.name + '! You are a '+ this.profession + '.'
    },
    greet: function (time) {
      return 'Hello '+ this.name + ' Good ' + time
    }
  }
})

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// })