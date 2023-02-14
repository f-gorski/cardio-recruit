<template>
  <div class="pdf-files-download">
    <div class="close-button"><XBtn @click="$emit('closed')" /></div>
    <h4 class="pdf-files-download__header">PDF Reports Download</h4>
    <h5 class="pdf-files-download__subheader">
      Files will be saved as a .zip archive
    </h5>
    <div v-if="!isDownloading" class="pdf-files-download__actions">
      <SecondaryActionButton @click="downloadAllPDFs">
        Download All
      </SecondaryActionButton>
      <SecondaryActionButton @click="downloadNewPDFs">
        Download New
      </SecondaryActionButton>
    </div>
    <div class="pdf-files-download__msg" v-else>
      <span>Preparing your download...</span>
    </div>
    <div class="pdf-files-download__error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import SecondaryActionButton from "../components/buttons/SecondaryActionButton.vue"
import XBtn from "../components/icons/XBtn.vue"

import { fetchPDFs } from "../utils/pdf_downloader"

export default {
  components: { SecondaryActionButton, XBtn },
  data: () => ({
    isDownloading: false,
    error: undefined,
  }),
  methods: {
    downloadAllPDFs() {
      this.downloadPDFs()
    },
    downloadNewPDFs() {
      this.downloadPDFs({ new: true })
    },

    async downloadPDFs(customParams = {}) {
      try {
        this.isDownloading = true
        await fetchPDFs(customParams)
        this.isDownloading = false
        this.$emit("closed")
      } catch (error) {
        this.isDownloading = false
        this.error = error
      }
    },
  },
}
</script>

<style>
.pdf-files-download {
  padding: 1.5rem;
  position: relative;
  text-align: center;
  border-radius: 10px;
  background-color: white;
}
.close-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
  cursor: pointer;
}
.close-button:hover {
  background-color: rgb(210, 210, 210);
}
.pdf-files-download__header {
  font-size: 1.25rem;
  font-weight: bold;
}
.pdf-files-download__actions {
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}
.pdf-files-download__subheader {
  font-weight: 0.85rem;
}
.pdf-files-download__msg {
  margin-top: 1rem;
}
.pdf-files-download__error {
  margin-top: 1rem;
  color: rgb(189, 2, 2);
  font-weight: bold;
}
@media (max-width: 480px) {
  .pdf-files-download__actions {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
