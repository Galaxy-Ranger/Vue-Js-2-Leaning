<template>
  <div>
    <slot name="h2-tag"></slot>
    <h1>I am the form helper</h1>
    <slot name="p-tag"></slot>
    <!--? and ouptut to this HTML component to child component using slot tag. -->
    <!-- <slot></slot> -->

    <!--? Proper Example -->
    <h1 id="title">Please fill out our form...</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="#">Link 1 </a></li>
          <li><a href="#">Link 2 </a></li>
          <li><a href="#">Link 3 </a></li>
          <li><a href="#">Link 4 </a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  h1#title{
    text-align: center;
  }
  form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
  #useful-links ul{
    padding: 0;
  }
  #useful-links li{
    display: inline-block;
    margin-right: 10px;
  }
  form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
  }
  #form-header{
    background: #ddd;
    border: 1px solid #bbb;
  }
</style>
