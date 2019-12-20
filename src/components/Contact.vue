<template>
  <div class="contact container tac">
    <h1>{{ msg }}</h1>
    <h2>Contact page</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/news">News</router-link>
    <h2>
      {{ message }}
    </h2>
    <h2>{{count}}</h2>
    <h2>{{newTask}}</h2>
    <button @click="plus()">Plus</button>
    <button @click="minus()">Minus</button>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact page',
      message: 'See again',
      price: 200
    }
  },
  methods: {
    plus () {
      this.$store.dispatch('increment')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    newTask () {
      return this.$store.state.newTask
    }
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
