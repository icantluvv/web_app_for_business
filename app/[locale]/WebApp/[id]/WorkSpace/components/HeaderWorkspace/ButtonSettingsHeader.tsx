"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSideCalendar } from "@/redux/SideCalendarSlice";
import { toggleSideMasters } from "@/redux/SideMastersSlice";
import { toggleSideSettings } from "@/redux/SideSettingsSlice";

import optionsButton from "@/public/assets/images/options-button.svg";
import optionsButtonActive from "@/public/assets/images/options-button-active.svg";

const ButtonSettingsHeader = () => {
  const showSideCalendar = useSelector(
    (state: RootState) => state.sideCalendar.ShowSideCalendar
  );

  const showSideMasters = useSelector(
    (state: RootState) => state.sideMasters.ShowSideMasters
  );

  const showSideSettings = useSelector(
    (state: RootState) => state.sideSettings.ShowSideSettings
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSideSettings());

    if (showSideMasters) {
      dispatch(toggleSideMasters());
    }
    if (showSideCalendar) {
      dispatch(toggleSideCalendar());
    }
  };

  return (
    <button onClick={handleClick}>
      <Image
        src={showSideSettings ? optionsButtonActive : optionsButton}
        width={32}
        height={24}
        alt="Настройки"
        className="hover:fill"
      />
    </button>
  );
};

export default ButtonSettingsHeader;
