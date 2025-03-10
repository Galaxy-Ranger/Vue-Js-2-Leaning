<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog of filteredBlogs" class="single-blog">
      <p>Blog Title</p>
      <h2 v-rainbow>{{ blog.title | to-upper }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin.js'
export default {
  data() {
    return {
      search: '',
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
  },
  mixins: [searchMixin], // here we are importing our mixin
  // #36 custom search filter
  // computed: {
  //   filteredBlogs() {
  //     return this.blogs.filter(blog => blog.title.toLowerCase().includes(this.search.toLowerCase()))
  //   }
  // },

  // #37 Registering filters/directive locally
  filters: {
    toUpper: function (value) {  // remember camelCase(js) ---> camel-case(html)
      return value.toUpperCase()
    },
    snippet: function (value, maxLength = 100) {
      return value.length > maxLength? value.substr(0, maxLength) + '...' : value
    }
  },
  directives: {
    rainbow: {
      bind: function(el, binding, vnode) {   // these bind function take three parameters el, binding(referse to information about the connection if we pass it in a value like v-rainbow='something') and vnode(refers to virtual node on the DOM)
        el.style.color = '#' + Math.random().toString().slice(2,8);
      }
    },
    theme: {
      bind: function(el, binding, vnode) {
        if (binding.value == 'wide') {
          el.style.maxWidth = '800px';
        } else if (binding.value == 'narrow') {
          el.style.maxWidth = '560px';
        }
        if (binding.arg == 'column') {   // this will work when we give arguments to the custom directive like v-theme:column=""
          el.style.boxSizing = 'border-box';
          el.style.padding = '1rem';
          el.style.border = '5px solid #ccc';
        }
      }
    }
  }

  // #38 mixin
  // well if you ever used SAS before you may be familiar with the concept
  // it is basically a chunk of code that we can reuse over and over in different places
}
</script>

<style>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }
  #show-blogs input[type="text"] {
    width: 100%;
    padding: 10px 0px;
    margin-bottom: 10px;
  }
  .single-blog {
    padding: 20px;
    margin: 20xp 0;
    box-sizing: border-box;
    background-color: #eee;
  }
</style>