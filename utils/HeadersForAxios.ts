import { headers } from "next/headers";

export function HeadersFoxAxios(accessToken: string) {
  const acceptLanguage = headers().get("accept-language") || "en-US;q=1.0";
  return {
    Authorization: `Bearer ${accessToken}`,
    Accept: "*/*",
    "Requester-Type": "professional",
    "Accept-Language": acceptLanguage,
    "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8"
  };
}
