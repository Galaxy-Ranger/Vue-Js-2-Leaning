
//* this will create a new component and this component will take
//? first argument as name of the component and
//? secong argument as objects.
Vue.component('compName', {
  //? template which is rendered when we use this component
  template:
            `<div>
                <p>Hey there, I am a re-usable component</p>
                <p>Hello {{ name }}, Nice to meet You.</p>
                <button @click="changeName">Change Name</button>
            </div>`,

  //* how to pass data to the component
  data: function() {
    return {
      name: 'Surya'
    }
  },
  //? but there's one little difference instead this time data is not an object directly, data must be a function and return an object

  //? methods that can be used inside the component
  methods: {
    changeName: function() {
      this.name = 'John Doe'
    }
    // to demonstrate the below question
  }
})

//! Very Important question
//! why component has data property as a function but in vue data property is an object?
//? Well when we are creating a vue instance that just one instance and that returns a single data object.
//? However when we are creating a component there's going to be multiple instances using the same kind of definition
//? and if we just use a plain object instead of this function right here then basically what we are doing is saying all those instances are going to share the object by reference and we change the data in one of those component on the page it's going to update the every single instances.

let one = new Vue({
  el: '#vue-app-one',
})

let two = new Vue({
  el: '#vue-app-two',
})