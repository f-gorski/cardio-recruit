<template>
  <h1>Download PDFs</h1>
  <button @click="fetchPDFs">Download PDF Files</button>
</template>

<script>
import mockSignals from "../mockSignals"
import cardioAPI from "../api/cardioAPI"

import axios from "axios"
import JSZip from "jszip"

export default {
  methods: {
    async fetchPDFs() {
      const zip = new JSZip()

      //   const allSignalIDs = await cardioAPI("/signals", {fields: "id"})
      const dataUrls = allSignalIDs.map((id) => {
        return `/signals/${id}/report/printout`
      })

      const pdfFilePromises = dataUrls.map((url) => {
        return cardioAPI
          .get(url, { fields: "name,url" })
          .then((singleSignal) => {
            const { name, url } = singleSignal.data

            return axios
              .get(url, {}, { responseType: "blob" })
              .then((pdfBlob) => {
                zip.file(name, pdfBlob.data)
              })
          })
      })

      Promise.all(pdfFilePromises).then(() => {
        zip.generateAsync({ type: "blob" }).then((archiveFile) => {
          console.log(content)
          const url = URL.createObjectURL(archiveFile)

          const fileLink = document.createElement("a")
          fileLink.style.display = "none"
          fileLink.href = url
          fileLink.download = "PDF_reports.zip"

          document.body.appendChild(fileLink)
          fileLink.click()

          setTimeout(() => {
            document.body.removeChild(fileLink)
            URL.revokeObjectURL(url)
          }, 100)
          //   saveAs(content, "files.zip")
        })
      })
    },
  },
}
</script>

<style></style>
