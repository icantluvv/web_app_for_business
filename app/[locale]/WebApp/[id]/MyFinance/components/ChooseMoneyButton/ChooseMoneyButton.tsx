"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedType } from "@/redux/MoneyTypeSlice";
import { RootState } from "@/redux/store";


const ChooseButton: React.FC<ChooseButtonProps> = ({ type, label, amount }) => {
  const dispatch = useDispatch();

  const selectedType = useSelector(
    (state: RootState) => state.moneyType.selectedType
  );

  return (
    <button
      onClick={() => dispatch(setSelectedType(type))}
      className={`w-[200px] ${
        selectedType === type ? "bg-darkBlue" : "bg-lightBlue"
      } min-h-[122px] rounded-[12px] p-4 gap-y-4 flex flex-col transition-all duration-400`}
    >
      <h5
        className={`${
          selectedType === type ? "text-white" : "text-darkBlue"
        } text-[18px]`}
      >
        {label}
      </h5>
      <span className="w-[50%] text-darkBlue text-center rounded-[12px] bg-white">
        {amount}
      </span>
    </button>
  );
};

export default ChooseButton;
