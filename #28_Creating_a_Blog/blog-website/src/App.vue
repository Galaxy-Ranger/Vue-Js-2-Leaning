<template>
  <div>
    <add-blog></add-blog>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
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
