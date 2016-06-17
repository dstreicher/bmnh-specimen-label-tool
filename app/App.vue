<template>
  <div>
    <header-bar></header-bar>
    <div class="container">
      <router-view transition="fade"></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
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
  /*.fade-enter,*/

  .fade-leave {
    opacity: 0;
    visibility: hidden;
  }

  .twitter-typeahead {
    width: 100%;
  }

  .tt-query {
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }

  .tt-hint {
    color: #999
  }

  .tt-menu {
    width: 100%;
    margin-top: 4px;
    padding: 4px 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  }

  .tt-suggestion {
    padding: 3px 20px;
    line-height: 24px;
  }

  .tt-suggestion.tt-cursor,
  .tt-suggestion:hover {
    color: #fff;
    background-color: #449d44;
  }

  .tt-suggestion p {
    margin: 0;
  }
</style>
