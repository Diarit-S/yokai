<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav class="m-auto">
        <b-nav-item :to="{ name: 'Home' }">Accueil</b-nav-item>
        <b-navbar-brand class="mx-5" href="#">
          <img src="./assets/brand.svg" alt="brand logo" />
        </b-navbar-brand>
        <b-nav-item :to="{ name: 'Articles' }">Les Yokai</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
    <button @click="doA">test</button>
    <!-- <form id="newsletter" class="subscribe" action="/.netlify/functions/test" method="post">
      <input
        type="email"
        id="inputEmail"
        name="email"
        placeholder="Enter email to subscribe for FREE"
        class="email"
        required
        autofocus
      />
      <button class="button" type="submit">Subscribe</button> -->
    <!-- </form> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    this.$store.dispatch('getArticles')
  },
  methods: {
    async doAPi() {
      axios.post(
        'https://us1.api.mailchimp.com/3.0/lists/20e9588e46/members/',
        {
          email_address: 'test@hotmail.fr',
          status: 'subscribed'
        },
        {
          auth: {
            username: 'anystring',
            password: 'b00ed0acc0c16fe38d494edd6d719bd0-us1'
          }
        }
      )
    },
    doA() {
      fetch('/.netlify/functions/test', {
        method: 'post',
        body: JSON.stringify({
          email: 'test@opo.fr'
        })
      })
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          console.log('data from function', data)
        })
    }
  }
}
</script>

<style lang="scss">
@import './styles/colors';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;

  .nav-item {
    display: flex;
    align-items: center;
    .nav-link {
      color: $white;
    }
  }
}
</style>
