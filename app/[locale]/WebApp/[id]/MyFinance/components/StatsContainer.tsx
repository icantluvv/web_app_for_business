"use client";
import React from "react";
import { useSelector } from "react-redux";
import CashInfo from "./cash/CashInfo";
import CashlessInfo from "./cashless/CashlessInfo";
import SafeInfo from "./safe/SafeInfo";
import SalaryInfo from "./salary/SalaryInfo";
import { RootState } from "@/redux/store";

const StatsContainer = () => {
  const selectedType = useSelector(
    (state: RootState) => state.moneyType.selectedType
  );

  return (
    <div className="w-[99%] bg-white rounded-[12px]">
      {selectedType === "cash" && <CashInfo />}
      {selectedType === "cashless" && <CashlessInfo />}
      {selectedType === "safe" && <SafeInfo />}
      {selectedType === "salary" && <SalaryInfo />}
    </div>
  );
};

export default StatsContainer;
