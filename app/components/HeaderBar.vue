<template>
  <div class="pos-f-t">
    <nav class="navbar navbar-full navbar-dark bg-inverse">
      <div class="container">
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapsing-navbar">&#9776;</button>
        <div class="collapse navbar-toggleable-xs" id="collapsing-navbar">
          <a class="navbar-brand">BMNH Labels</a>
          <div class="nav navbar-nav">
            <a v-link="{ path: '/new-entry', activeClass: 'active' }" class="nav-item nav-link">New Entry</a>
            <a v-link="{ path: '/export-labels', activeClass: 'active' }" class="nav-item nav-link">Export Labels</a>
            <a v-link="{ path: '/export-csv', activeClass: 'active' }" class="nav-item nav-link ">Export CSV</a>
          </div>
        </div>
      </div>



      <!--<div class="container ">
        <a class="navbar-brand ">BMNH Labels</a>
        <div class="nav navbar-nav ">
        <a v-link="{ path: '/new-entry', activeClass: 'active' } " class="nav-item nav-link ">New Entry</a>
        <a v-link="{ path: '/export-labels', activeClass: 'active' } " class="nav-item nav-link ">Export Labels</a>
        <a v-link="{ path: '/export-csv', activeClass: 'active' } " " class="nav-item nav-link ">Export CSV</a>
        </div>
      </div>-->
    </nav>
  </div>
</template>

<script>
  export default {
    ready() {
      $(".navbar-nav .nav-link").click(function (event) {
        console.log('clicked!');
        var toggle = $(".navbar-toggler").is(":visible");
        if (toggle) {
          $("#collapsing-navbar").collapse('hide');
        }
      });
    }
  }
</script>

<style scoped>
  .navbar-brand {
    float: none;
  }

  .navbar-nav .nav-item {
    float: none;
  }

  .navbar-divider,
  .navbar-nav .nav-item+.nav-item,
  .navbar-nav .nav-link + .nav-link {
    margin-left: 0;
  }

  @media (min-width: 34em) {
    .navbar-brand {
      float: left;
    }
    .navbar-nav .nav-item {
      float: left;
    }
    .navbar-divider,
    .navbar-nav .nav-item+.nav-item,
    .navbar-nav .nav-link + .nav-link {
      margin-left: 1rem;
    }
  }
</style>
