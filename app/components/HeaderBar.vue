<template>
  <div class="pos-f-t">
    <div style="height: 0px;" aria-expanded="false" class="collapse" id="navbar-header">
      <div class="container-fluid bg-inverse p-a-1">
        <div class="row">
          <div class="col-xs-12 col-sm-9">
            <a v-link="'new'" class="btn btn-success-outline" href="#" role="button">New Entry</a>
            <a v-link="'new'" class="btn btn-success-outline" href="#" role="button">Export Labels</a>
            <a v-link="'new'" class="btn btn-success-outline" href="#" role="button">Export CSV</a>
          </div>
          <div class="col-sm-3">
            <span>Total Specimens: 10</span>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-light bg-faded navbar-static-top">
      <button aria-expanded="false" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-header">
          ☰
        </button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
