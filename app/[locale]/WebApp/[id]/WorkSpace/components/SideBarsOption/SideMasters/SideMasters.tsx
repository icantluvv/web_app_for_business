"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import ChooseAllButton from "./ChooseAllButton";
import MastersContainer from "./MastersContainer";

const SideMasters = ({ option, params }: SideBarsProps) => {
  const ShowSideMasters = useSelector(
    (state: RootState) => state.sideMasters.ShowSideMasters
  );

  return (
    <section
      className={` transition-all duration-500 ${
        ShowSideMasters
          ? "w-[30%] pb-4 pl-4 opacity-100 ml-4"
          : "w-[0px] opacity-0"
      }  h-[97.5%] bg-white rounded-l-[12px] overflow-y-auto`}
    >
      <h2
        className={`transition-all delay-200 duration-400 ${
          ShowSideMasters ? "opacity-100" : "opacity-0"
        } mt-[5%] text-[26px] font-semibold whitespace-nowrap`}
      >
        {option}
      </h2>
      <div className="w-full flex justify-end px-2 my-[2%]">
        <ChooseAllButton params={params}></ChooseAllButton>
      </div>

      <MastersContainer></MastersContainer>
    </section>
  );
};

export default SideMasters;
