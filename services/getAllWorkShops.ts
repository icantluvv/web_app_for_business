import axios from "axios";
import { HeadersFoxAxios } from "@/utils/HeadersForAxios";
import { takeToken } from "@/utils/TakeTokenForFetch";

export async function GetWorkShops() {
  try {
    const accessToken = await takeToken();

    if (!accessToken) {
      return { redirect: "/auth" };
    }

    const apiUrl = `${process.env.URL_BACKEND_MAESTRI}/salons/workshops`;
    const apiResponse = await axios.get(apiUrl, {
      headers: HeadersFoxAxios(accessToken)
    });

    const workshops = apiResponse.data;
    return { error: false, data: workshops };
  } catch (error) {
    console.error(error);
    return { redirect: "/error" };
  }
}
