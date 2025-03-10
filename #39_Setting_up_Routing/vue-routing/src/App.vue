<template>
  <div>
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
export default {
  components: {
    'app-header': header,
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
  body {
    margin: 0;
    font-family: "Nunito";
  }
</style>
