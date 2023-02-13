import cardioAPI from "../api/cardioAPI"
import axios from "axios"
import JSZip from "jszip"

export const fetchPDFs = async (customParams) => {
  const zip = new JSZip()

  const allSignalIDs = await cardioAPI.get("/signals", {
    fields: "id",
    ...customParams,
  })

  const dataUrls = allSignalIDs.data.map((signal) => {
    return `/signals/${signal.id}/report/printout`
  })

  const pdfFilePromises = dataUrls.map((url) => {
    return cardioAPI.get(url, { fields: "name,url" }).then((singleSignal) => {
      const { name, url } = singleSignal.data

      return axios.get(url, {}, { responseType: "blob" }).then((pdfBlob) => {
        zip.file(name, pdfBlob.data)
      })
    })
  })

  await Promise.all(pdfFilePromises)
    .then(() => {
      zip.generateAsync({ type: "blob" }).then((archiveFile) => {
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
      })
    })
    .catch((error) => {})
}
