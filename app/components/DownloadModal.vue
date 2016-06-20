<template>
  <div>
    <div class="modal fade download-modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title" id="mySmallModalLabel">PDF File</h4>
          </div>
          <div class="modal-body">PDF Document has been created. Would you like to view or download the file?</div>
          <div class="modal-footer">
            <button onclick='window.open("dist/pdf/specimen_labels.pdf");' type="button" class="btn btn-secondary" v-on:click="cancel" data-dismiss="modal">View</button>
            <button onclick='window.open("api/pdf/download");' type="button" class="btn btn-success" v-on:click="confirm" data-dismiss="modal">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style></style>
