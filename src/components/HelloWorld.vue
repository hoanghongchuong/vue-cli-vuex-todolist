<template>
  <div class="hello container">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <h2>{{count}}</h2>
    <h2>Home page</h2>
    <ul>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/news">News</router-link>
      </li>
    </ul>
<!--    <img src="http://lazi.vn/files/large/5a64450874df215" alt="" width="100"><span class="logo-title">Tết Tết Tết đến rồi!!!</span>-->
    <br>
    <div class="row">
      <div class="col-md-6"><ListTask></ListTask></div>
      <div class="col-md-6"><CompletedTask></CompletedTask></div>
    </div>
    <GetTask></GetTask>
  </div>
</template>

<script>
  import GetTask from './GetTask.vue'
  import ListTask from './ListTask.vue'
  import CompletedTask from './CompletedTask.vue'
export default {
  name: 'HelloWorld',
  components: {
    GetTask,
    ListTask,
    CompletedTask
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
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
