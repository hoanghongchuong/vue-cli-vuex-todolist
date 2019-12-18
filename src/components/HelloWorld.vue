<template>
  <div class="hello container">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Home page</h2>
    <ul>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/news">News</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello {
    text-align: center;
  }
</style>
