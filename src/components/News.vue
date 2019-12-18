<template>
  <div class="news container">
    <h1 class="tac">{{ msg }}</h1>
    <h2 class="tac">News page</h2>
    <div class="router tac">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/news">News</router-link>
    </div>
    <h2>
      {{ message }}
    </h2>
    <ul>
      <li v-for="post in posts"><a href="">{{post.title}}</a></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'News',
  data () {
    return {
      msg: 'News page',
      message: 'See again',
      posts: [],
      errors: []
    }
  },
  created () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
