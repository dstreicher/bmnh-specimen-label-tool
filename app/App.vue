<template>
  <header-bar></header-bar>
  <div class="container">
    <router-view transition="fade"></router-view>
  </div>
  <footer-bar></footer-bar>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  import FooterBar from './components/FooterBar.vue'
  export default {
    components: {
      HeaderBar,
      FooterBar
    },
    methods: {
      logout() {
        console.log('Logout!');
      }
    }
  }
</script>

<style>
  body {
    padding-top: 6rem;
  }
</style>
