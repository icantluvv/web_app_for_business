"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMasters } from "@/redux/SideMastersSlice";
import { RootState } from "@/redux/store";
import { toggleSideCalendar } from "@/redux/SideCalendarSlice";
import { toggleSideSettings } from "@/redux/SideSettingsSlice";

import tagsButton from "@/public/assets/images/tags-button.svg";
import tagsButtonActive from "@/public/assets/images/tags-button-active.svg";

const ButtonPeopleHeader = () => {
  const dispatch = useDispatch();

  const showSideCalendar = useSelector(
    (state: RootState) => state.sideCalendar.ShowSideCalendar
  );

  const showSideSettings = useSelector(
    (state: RootState) => state.sideSettings.ShowSideSettings
  );

  const showSideMasters = useSelector(
    (state: RootState) => state.sideMasters.ShowSideMasters
  );

  const handleClick = () => {
    dispatch(toggleSideMasters());

    if (showSideCalendar) {
      dispatch(toggleSideCalendar());
    }
    if (showSideSettings) {
      dispatch(toggleSideSettings());
    }
  };

  return (
    <button onClick={handleClick}>
      <Image
        src={showSideMasters ? tagsButtonActive : tagsButton}
        width={65}
        height={35}
        alt={""}
      ></Image>
    </button>
  );
};

export default ButtonPeopleHeader;
