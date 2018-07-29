<template>
  <div>
    <div class="modal fade" :class="target" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="modalLabel">{{titleText}}</h4>
          </div>
          <div class="modal-body">{{bodyText}}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="cancel" data-dismiss="modal">{{cancelText || 'Cancel'}}</button>
            <button type="button" class="btn btn-success" v-on:click="confirm" data-dismiss="modal">{{confirmText || 'Okay'}}</button>
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
      'titleText',
      'bodyText',
      'confirmText',
      'cancelText'
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
