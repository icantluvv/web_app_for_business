import axios from "axios"
import { HeadersFoxAxios } from "@/utils/HeadersForAxios"
import { takeToken } from "@/utils/TakeTokenForFetch"

export default async function getServicesData(params: string) {
  try {
    const accessToken = await takeToken()
    const apiURL = `${process.env.URL_BACKEND_MAESTRI}/procedures`

    const response = await axios.get(apiURL, {
      params: {
        salons: params
      },
      headers: HeadersFoxAxios(accessToken)
    })

    if (response.status == 200) {
      return response.data
    }
    throw new Error("Failed to fetch services data")
  } catch {
    throw new Error("Failed to fetch services data")
  }
}
