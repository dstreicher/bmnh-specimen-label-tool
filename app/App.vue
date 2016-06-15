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

  .fade-transition {
    transition: all 0.4s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
  }

  .content.fade-transition {
    /* Delay for showing the content after the loader has been hidden */
    transition-delay: 0.4s;
  }

  .fade-enter,
  .fade-leave {
    opacity: 0;
    visibility: hidden;
  }
</style>
