export const parsePaginationHeaders = (headers) => {
  const parsedLinks = parseLinkHeader(headers["link"])
  const totalItems = parseNumericHeader(headers["x-total"])
  const perPage = parseNumericHeader(headers["x-per-page"])
  const totalPages = parseNumericHeader(headers["x-total-pages"])
  const currentPage = parseNumericHeader(headers["x-page"])

  const pagination = {
    ...parsedLinks,
    totalItems,
    perPage,
    totalPages,
    currentPage,
  }

  return pagination
}

const parseLinkHeader = (linkHeader) => {
  const links = linkHeader.split(",")

  const parsedLinks = links.reduce((object, link) => {
    const [url, linkRel] = link.split(";")

    const parsedRel = linkRel.split("=").pop().split('"')[1]

    return {
      ...object,
      [parsedRel]: url.trim(),
    }
  }, {})

  return parsedLinks
}

const parseNumericHeader = (header) => {
  return parseInt(header)
}
