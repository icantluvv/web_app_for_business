"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { selectChannel } from "@/redux/ChannelSlice";
import logo from '@/public/assets/images/SideBar_Logo.svg'

const LogoButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(selectChannel(""));
    sessionStorage.setItem("selectedChannelId", "");
    router.push("/WebApp");
  };

  return (
    <button onClick={handleClick}>
      <Image
        src={logo}
        width={56}
        height={31}
        alt={"SideBarLogo"}
      />
    </button>
  );
};

export default LogoButton;
