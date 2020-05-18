<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav class="m-auto">
        <b-nav-item :to="{ name: 'Home' }">Accueil</b-nav-item>
        <b-navbar-brand class="mx-5" href="#">
          <img src="./assets/brand.svg" alt="brand logo">
        </b-navbar-brand>
        <b-nav-item :to="{ name: 'Articles' }">Les Yokai</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>


<style lang="scss">

@import './styles/colors';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
