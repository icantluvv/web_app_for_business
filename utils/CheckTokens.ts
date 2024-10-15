import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function validateAndRefreshToken() {
  const cookieStore = cookies();

  const accessTokenCookie = cookieStore.get("accessToken")?.value;
  const refreshTokenCookie = cookieStore.get("refreshToken")?.value;

  if (!accessTokenCookie && !refreshTokenCookie) {
    return NextResponse.json({
      status: 401,
      text: "Unauthorized"
    });
  }

  let accessToken, refreshToken;

  if (refreshTokenCookie) {
    try {
      const parsedRefreshToken = JSON.parse(refreshTokenCookie);
      refreshToken = parsedRefreshToken.value;
    } catch {
      return NextResponse.json({
        status: 400,
        text: "Invalid refresh token format"
      });
    }
  }

  if (accessTokenCookie) {
    try {
      const parsedAccessToken = JSON.parse(accessTokenCookie);
      accessToken = parsedAccessToken.value;
    } catch {
      return NextResponse.json({
        status: 400,
        text: "Invalid access token format"
      });
    }
  }

  if (!refreshToken) {
    return;
  }

  const isTokenExpired = await checkTokenExpiration(accessToken);

  if (isTokenExpired && refreshToken) {
    try {
      const response = await fetch(
        `${process.env.URL_BACKEND_MAESTRI}/refresh`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${refreshToken}`
          }
        }
      );

      const responseBody = await response.json();

      if (response.ok) {
        const newAccessToken = responseBody.accessToken?.value;

        const responseWithCookies = NextResponse.next();
        responseWithCookies.cookies.set(
          "accessToken",
          JSON.stringify({ value: newAccessToken }),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 15,
            path: "/"
          }
        );

        return responseWithCookies;
      } else {
        throw new Error("Unauthorized: Failed to refresh token");
      }
    } catch (error) {
      console.error("Error during token refresh:", error);
      throw new Error("Unauthorized: Error during token refresh");
    }
  }

  if (!isTokenExpired && accessToken) {
    const responseWithCookies = NextResponse.next();
    responseWithCookies.cookies.set(
      "accessToken",
      JSON.stringify({ value: accessToken }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 15,
        path: "/"
      }
    );

    return responseWithCookies;
  }

  return NextResponse.next();
}

async function checkTokenExpiration(token: string): Promise<boolean> {
  if (!token) return true;
  try {
    const { exp } = JSON.parse(atob(token.split(".")[1]));
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
}
