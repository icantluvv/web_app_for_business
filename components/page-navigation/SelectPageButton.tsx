"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { selectPage } from "@/redux/SelectPageSlice";
import { useDispatch } from "react-redux";

const SelectPageButton = ({ title, address, isLast, index }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useParams();

  const selectedChannelId = params.id;

  const selectedPage = useSelector((state: any) => state.page.selectedPageId);

  const isSelected = selectedPage === index;

  function OpenPage() {
    if (isSelected) {
    } else {
      dispatch(selectPage(index));
    }
    router.push(`/WebApp/${selectedChannelId}/${address}`);
  }

  return (
    <button
      onClick={OpenPage}
      className={`w-full h-[52px] ${
        index === 0 && "rounded-t-[12px]"
      } hover:bg-lightBlue active:bg-lightGray transition-all duration-200 ${
        isSelected && "bg-lightBlue"
      } text-start pl-[10%] relative`}
    >
      {!isLast && <div className="absolute w-[90%] h-[1px] bottom-0"></div>}
      <div className=" w-full font-medium">{title}</div>
    </button>
  );
};

export default SelectPageButton;
