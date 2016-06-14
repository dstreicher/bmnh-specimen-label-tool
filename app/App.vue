<template>
  <header-bar></header-bar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  export default {
    components: {
      HeaderBar
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
    min-height: 75rem;
    padding-top: 6rem;
  }
</style>
