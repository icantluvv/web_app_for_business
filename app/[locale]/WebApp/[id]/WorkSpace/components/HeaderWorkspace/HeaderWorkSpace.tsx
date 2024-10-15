import React from "react";
import ButtonSettingsHeader from "./ButtonSettingsHeader";
import ButtonPeopleHeader from "./ButtonPeopleHeader";
import MiniCalendarHeader from "./MiniCalendarHeader";

const Header = () => {
  return (
    <>
      <MiniCalendarHeader></MiniCalendarHeader>
      <ButtonPeopleHeader></ButtonPeopleHeader>
      <ButtonSettingsHeader></ButtonSettingsHeader>
    </>
  );
};

export default Header;
