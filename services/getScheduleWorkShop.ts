import { NextResponse } from "next/server";
import axios from "axios";
import { HeadersFoxAxios } from "@/utils/HeadersForAxios";
import { takeToken } from "@/utils/TakeTokenForFetch";

export async function GetScheduleWorkShop(id: string) {
  try {
    const body = id;
    const accessToken = await takeToken();
    const ApiURL = `${process.env.URL_BACKEND_MAESTRI}/timetables/schedules`;

    const res = await axios.get(ApiURL, {
      headers: HeadersFoxAxios(accessToken),
      params: {
        "owners[]": [`salon:${body}`]
      }
    });

    const schedules = res.data.map((item: any) => item.schedule);

    return NextResponse.json(schedules, { status: 200 } as globalThis.ResponseInit);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong GET InfoAboutWorkShopID" },
      { status: 500 } as globalThis.ResponseInit
    );
  }
}
