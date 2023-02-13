import axios from "axios"
import store from "../store"

import { parsePaginationHeaders } from "./utils/parse_pagination_headers"

const API_VERSION = "v2"
const API_DOMAIN = "app.cardiomatics.com"

const baseApi = axios.create({
  baseURL: `https://${API_DOMAIN}/api/${API_VERSION}`,
})

baseApi.interceptors.request.use((config) => {
  config.params = config.params || {}
  config.params["private_token"] = store.state.token

  return config
})

const get = async (path, params = {}, config) => {
  try {
    const response = await baseApi.get(path, { params }, config)
    if (!response.headers["x-total"]) {
      return {
        data: response.data,
      }
    }
    return {
      data: response.data,
      pagination: parsePaginationHeaders(response.headers),
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export default { get }
