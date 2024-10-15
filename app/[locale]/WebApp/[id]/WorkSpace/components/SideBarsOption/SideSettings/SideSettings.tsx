"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const SideSettings = ({ option }: SideBarsProps) => {
  const showSideSettings = useSelector(
    (state: RootState) => state.sideSettings.ShowSideSettings
  );

  return (
    <section
      className={` transition-all duration-500 ${
        showSideSettings ? "w-[30%] pl-4 opacity-100 ml-4" : "w-[0px] opacity-0"
      } h-[97.5%] bg-white rounded-l-[12px]`}
    >
      <h2
        className={`transition-all delay-200 duration-400 ${
          showSideSettings ? "opacity-100" : "opacity-0"
        } mt-[5%] text-[26px] font-semibold whitespace-nowrap`}
      >
        {option}
      </h2>
    </section>
  );
};

export default SideSettings;
