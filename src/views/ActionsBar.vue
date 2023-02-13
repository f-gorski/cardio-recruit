<template>
  <div class="actions-bar">
    <PrimaryActionButton disabled>Add Signal</PrimaryActionButton>
    <SecondaryActionButton @click="toggleDownloadModal(true)">
      Download PDF Reports</SecondaryActionButton
    >
  </div>

  <v-dialog v-model="showDownloadModal" max-width="500">
    <PDFDownload @closed="toggleDownloadModal(false)" />
  </v-dialog>
</template>

<script>
import {
  PrimaryActionButton,
  SecondaryActionButton,
} from "../components/buttons"
import PDFDownload from "./PDFDownload.vue"

export default {
  components: {
    PrimaryActionButton,
    SecondaryActionButton,
    PDFDownload,
  },
  data: () => ({
    showDownloadModal: false,
  }),
  methods: {
    toggleDownloadModal(isShown) {
      this.showDownloadModal = isShown
    },
  },
}
</script>

<style>
.actions-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 25px;
}
.actions-bar > * {
  margin-left: 20px;
}
</style>
