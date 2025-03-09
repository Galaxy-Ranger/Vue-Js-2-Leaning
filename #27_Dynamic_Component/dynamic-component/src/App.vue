<template>
  <div>
    <!-- I don't want to output two components we just want to output one component and  -->
    <!-- we want that component to dynamically change between form-one or form-two depending upon the interaction with the website  -->
    <!--! <form-one></form-one> -->
    <!--! <form-two></form-two> -->

    <!--? what we can do is use component tag -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <!--? keep-alive right here is sync with vue js DO NOT DARE to delete this component when we switch to other one. I want to keep all the data intact so that when we come back to it later on everthing is still going to be there. -->
    <button v-on:click="changeForm">Change Form</button>
  </div>
</template>

<script>
import formOne from './components/formOne'
import formTwo from './components/formTwo'

export default {
  components: {
    'formOne': formOne,
    'formTwo': formTwo,
  },
  data () {
    return {
      component: 'form-one'
    }
  },
  methods: {
    changeForm () {
      this.component = this.component === 'form-one'? 'form-two' : 'form-one'
    }
  }
}
</script>

<style scoped>
  button {
    margin-left: 200px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 18px;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #555;
    }
  }
</style>
