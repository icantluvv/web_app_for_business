"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideCalendar } from "@/redux/SideCalendarSlice";
import { RootState } from "@/redux/store";
import { toggleSideMasters } from "@/redux/SideMastersSlice";
import { toggleSideSettings } from "@/redux/SideSettingsSlice";

import calendarButton from "@/public/assets/images/calendar-button.svg";
import calendarButtonActive from "@/public/assets/images/calendar-button-active.svg";

const ButtonCalendarHeader: React.FC = () => {
  const showSideMasters = useSelector(
    (state: RootState) => state.sideMasters.ShowSideMasters
  );
  const showSideSettings = useSelector(
    (state: RootState) => state.sideSettings.ShowSideSettings
  );

  const showSideCalendar = useSelector(
    (state: RootState) => state.sideCalendar.ShowSideCalendar
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSideCalendar());

    if (showSideMasters) {
      dispatch(toggleSideMasters());
    }
    if (showSideSettings) {
      dispatch(toggleSideSettings());
    }
  };

  return (
    <button onClick={handleClick} className="w-[40px] h-[42px] relative">
      <Image
        src={showSideCalendar ? calendarButtonActive : calendarButton}
        width={40}
        height={42}
        alt=""
      />
    </button>
  );
};

export default ButtonCalendarHeader;
