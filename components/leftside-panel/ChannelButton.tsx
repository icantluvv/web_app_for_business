"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectChannel, setChannelData } from "@/redux/ChannelSlice";
import { selectPage } from "@/redux/SelectPageSlice";
import { useRouter } from "next/navigation";

const Channel = ({ data }: any) => {
  const router = useRouter();
  const { id, logo } = data;
  const dispatch = useDispatch();
  const selectedChannelId = useSelector(
    (state: any) => state.channel.selectedChannelId
  );

  const ChannelData = useSelector((state: any) => state.channel.channelData);
  const isSelected = selectedChannelId === id;

  const handleClick = async () => {
    sessionStorage.setItem("selectedChannelId", id);
    dispatch(setChannelData(data));
    dispatch(selectPage(""));
    dispatch(selectChannel(id));
    router.push(`/WebApp/${id}`);
  };

  useEffect(() => {
    const storedChannelId = sessionStorage.getItem("selectedChannelId");
    if (storedChannelId) {
      dispatch(selectChannel(storedChannelId));
    }

    if (ChannelData === null) {
      router.push("/WebApp");
      dispatch(selectChannel(""));
    }
  }, [dispatch]);

  return (
    <button
      onClick={handleClick}
      className={`w-[72px] min-h-[72px] flex items-center justify-center rounded-[16px] transition-all ${
        isSelected ? "border-2 border-[#6F97FF] w-[72px] h-[72px]" : ""
      }`}
    >
      <Image
        src={`${logo}`}
        alt={""}
        width={64}
        height={64}
        className="w-[64px] h-[64px] rounded-[12px]"
      />
    </button>
  );
};

export default Channel;
