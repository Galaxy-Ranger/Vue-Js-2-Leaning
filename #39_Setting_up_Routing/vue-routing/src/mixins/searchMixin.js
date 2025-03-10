// #38 mixin
// well if you ever used SAS before you may be familiar with the concept
// it is basically a chunk of code that we can reuse over and over in different places

export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => blog.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}