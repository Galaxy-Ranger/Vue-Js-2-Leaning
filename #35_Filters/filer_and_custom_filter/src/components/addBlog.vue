<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" required v-model.lazy="blog.title">
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>

      <div id="checkboxs">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">

        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">

        <label>Witches</label>
        <input type="checkbox" value="witches" v-model="blog.categories">

        <label>Hunters</label>
        <input type="checkbox" value="hunters" v-model="blog.categories">
      </div>

      <div id="selectboxs">
        <label>Author:</label>
        <select v-model="blog.author">
          <option v-for="author of listOfAuthors">{{ author }}</option>
        </select>
      </div>
      <button @click.prevent="post">Add Blog</button>
    </form>

    <div v-if="!submitted">
      <h3>Thanks for adding your blog.</h3>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content: {{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category of blog.categories">{{ category }}</li>
      </ul>
      <p>Blog Author: {{ blog.author }}</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return{
      // this is a good practice when u are working on the related field of a particular field
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      listOfAuthors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false,
    }
  },

  methods: {
    post(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        // what we want to send
        userid: 1,
        title: this.blog.title,
        body: this.blog.content,
      }).then((data) => {console.log(data); this.submitted = true;})
    }
  }
}
</script>

<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  #checkbox input{
    margin-right: 10px;
  }
  #checkboxs label{
    display: inline-block;
  }
</style>