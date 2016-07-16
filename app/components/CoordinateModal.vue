<template>
  <div>
    <div class="modal fade {{target}}" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="modalLabel">{{titleText}}</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-xs-12 col-md-4">
                <div class="form-group">
                  <label for="formGroupExampleInput">Degrees</label>
                  <div class="input-group">
                    <input type="text" class="form-control" aria-label="Degrees">
                    <span class="input-group-addon">°</span>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="form-group">
                  <label for="formGroupExampleInput">Minutes</label>
                  <div class="input-group">
                    <input type="text" class="form-control" aria-label="Minutes">
                    <span class="input-group-addon">'</span>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="form-group">
                  <label for="formGroupExampleInput">Seconds</label>
                  <div class="input-group">
                    <input type="text" class="form-control" aria-label="Seconds">
                    <span class="input-group-addon">"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="cancel" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-success" v-on:click="confirm" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'target',
      'titleText'
    ],
    methods: {
      confirm() {
        this.$dispatch(this.target + ':confirm');
      },
      cancel() {
        this.$dispatch(this.target + ':cancel');
      }
    }
  }
</script>

<style></style>
