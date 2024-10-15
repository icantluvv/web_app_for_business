import React from "react";
import ButtonCalendarHeader from "./ButtonCalendarHeader";
import SliderDays from "./SliderDays";

const MiniCalendarHeader = () => (
  <div className="h-[54px] bg-black/10 rounded-[12px] flex items-center px-2">
    <SliderDays></SliderDays>
    <ButtonCalendarHeader></ButtonCalendarHeader>
  </div>
);

export default MiniCalendarHeader;
