<!-- #42 Adding Router Links -->

<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/add-blog" exact>Add Blog</router-link></li>
        <li><router-link to="/list-blog" exact>View Blog</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import addBlog from './addBlog.vue'
import showBlogs from './showBlogs.vue'
import listBlogs from './listBlogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'list-blogs': listBlogs,
    'show-blogs': showBlogs
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
    font-size: 18px;
  }
  a {
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav {
    background-color: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  .router-link-active {
    background-color: #eee;
    color: #444;
  }
</style>