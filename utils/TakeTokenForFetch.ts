import { validateAndRefreshToken } from "./CheckTokens";

export async function takeToken() {
  const response = await validateAndRefreshToken();

  if (!response || !response.cookies) {
    return null;
  }

  const accessTokenCookie = response.cookies.get("accessToken");
  if (!accessTokenCookie) {
    return null;
  }

  const parsedToken = JSON.parse(accessTokenCookie.value);
  const accessToken = parsedToken.value;

  return accessToken;
}
