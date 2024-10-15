"use client";
import React from "react";

const ActionButton = ({ option, color, id }: any) => {
  return (
    <button
      className={`w-full h-1/2 ${color === "blue" && "text-[#428BF9]"} 
        bg-white hover:bg-lightBlue active:bg-darkBlue active:text-white text-[14px] rounded-[12px] flex items-center justify-center transition-all duration-200`}
    >
      <label className="w-[50%] text-center">{option}</label>
    </button>
  );
};

export default ActionButton;
