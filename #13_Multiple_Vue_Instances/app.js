let one = new Vue({
  el: '#vue-app-one',
  data: {
    title: "vue-app-one",
  },
  methods: {
    changeTitle: function() {
      two.title = "App two changed by app one"
    }
  },
  computed: {
    greeting: function() {
      return "Hello from app one :)"
    }
  }
})

let two = new Vue({
  el: '#vue-app-two',
  data: {
    title: "vue-app-two",
  },
  methods: {
    changeTitle: function() {
      one.title = "App one changed by app two"
    }
  },
  computed: {
    greeting: function() {
      return "Yo dudes, this is app 2 speaking to ya :)"
    }
  }
})