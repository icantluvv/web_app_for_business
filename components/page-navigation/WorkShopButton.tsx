"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectPage } from "@/redux/SelectPageSlice";

const WorkShopButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const SelectedSalon = useSelector(
    (state: any) => state.channel.selectedChannelId
  );
  const ChannelData = useSelector((state: any) => state.channel.channelData);
  const SelectedPageID = useSelector((state: any) => state.page.selectedPageId);

  const isSelected = SelectedPageID;

  function clickWorkShopButton() {
    if (!isSelected) {
      dispatch(selectPage(""));
    }
    router.push(`/WebApp/${SelectedSalon}`);
  }

  return (
    <button
      onClick={() => {
        clickWorkShopButton();
      }}
      className="min-h-[80px] hover:bg-lightBlue active:bg-lightGray transition-all duration-200 w-full p-3 flex bg-white rounded-[12px] gap-x-2"
    >
      <Image
        src={ChannelData?.logo}
        width={56}
        height={56}
        className="rounded-[12px] bg-lightText"
        alt={""}
      ></Image>
      <div className="flex w-full flex-col justify-start">
        <h1 className="text-[24px] font-semibold text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[9ch]">
          {ChannelData?.name}
        </h1>
        <p className="text-[14px] text-start overflow-hidden whitespace-nowrap text-ellipsis max-w-[15ch] font-light text-lightText">
          {ChannelData?.address.address}
        </p>
      </div>
    </button>
  );
};

export default WorkShopButton;
