<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <h2>Contact page</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/news">News</router-link>
    <h2>
      {{ message }}
    </h2>
    <h2>{{price}}</h2>
    <button @click="changePrice()">Price plus</button>
    <button @click="minusPrice()">Price minus</button>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact page',
      message: 'See again',
      price: 200,
    }
  },
  methods: {
    changePrice () {
      return this.price = this.price + 10
    },
    minusPrice () {
      return this.price = this.price - 10
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
