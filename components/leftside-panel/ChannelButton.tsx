"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setChannelData, unsetChannelData } from "@/redux/ChannelSlice";
import { selectPage } from "@/redux/SelectPageSlice";
import { useRouter, useParams } from "next/navigation";

const Channel = ({ data }: any) => {
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();
  const { id, logo } = data;

  const syncChannelData = () => {
    localStorage.setItem("selectedChannel", JSON.stringify(data));
    dispatch(setChannelData(data));
    dispatch(selectPage(""));
  };

  useEffect(() => {
    const storedChannel = JSON.parse(localStorage.getItem("selectedChannel") || "");

    if (!storedChannel) {
      router.push("/WebApp");
      dispatch(unsetChannelData());
      return;
    }

    if (data.id === params.id) {
      syncChannelData();
    }
  }, [params.id, data, dispatch, router]);

  return (
    <button
      onClick={() => {
        syncChannelData();
        router.push(`/WebApp/${id}`);
      }}
      className={`w-[72px] min-h-[72px] flex items-center justify-center rounded-[16px] transition-all ${
        data.id === params.id ? "border-2 border-[#6F97FF] w-[72px] h-[72px]" : ""
      }`}
    >
      <Image
        src={logo}
        alt={""}
        width={64}
        height={64}
        className="w-[64px] h-[64px] rounded-[12px]"
      />
    </button>
  );
};

export default Channel;
