<!-- #33_GET Requests -->

<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog of blogs" class="single-blog">
      <h2>Blog Title</h2>
      <p>{{ blog.title }}</p>
      <article>Blog Content:</article>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
    }
  },
  // this function is fire when the component is first made
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      (data) =>
      {
        this.blogs = data.body.slice(0, 10)
        // console.log(data.body)
      })
  }
}
</script>

<style>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog {
    padding: 20px;
    margin: 20xp 0;
    box-sizing: border-box;
    background-color: #eee;
  }
</style>