import { NextResponse } from "next/server";
import axios from "axios";
import { HeadersFoxAxios } from "@/utils/HeadersForAxios";
import { takeToken } from "@/utils/TakeTokenForFetch";

export async function GetInfoAboutWorkShop(id: string) {
  try {
    const body = id;
    const accessToken = await takeToken();
    const ApiURL = `${process.env.URL_BACKEND_MAESTRI}/salons/${body}`;

    const apiResponse = axios.get(ApiURL, {
      headers: HeadersFoxAxios(accessToken)
    });

    return NextResponse.json({ data: apiResponse }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong GET InfoAboutWorkShopID" },
      { status: 500 }
    );
  }
}
