import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const response = await fetch(
      `${process.env.URL_BACKEND_MAESTRI}/auth/test/001811.3a8cf4590bed409181c547aa91f8e093.0650`,
      {
        method: "POST"
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error: `API error: ${response.status} ${
            errorData.message || "Unknown error"
          }`
        },
        { status: response.status }
      );
    }

    const { accessToken, refreshToken } = await response.json();

    const cookieStore = cookies();

    cookieStore.set("accessToken", JSON.stringify(accessToken), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 5,
      path: "/"
    });

    cookieStore.set("refreshToken", JSON.stringify(refreshToken), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/"
    });

    return NextResponse.redirect(new URL("/WebApp", request.url));
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
