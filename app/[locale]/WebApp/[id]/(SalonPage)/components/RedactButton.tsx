import React from "react";
import { useTranslations } from "next-intl";

const RedactButton = () => {
  const t = useTranslations();
  return (
    <button className="absolute z-[1500] right-4 text-[14px] top-4 text-textBlue active:text-lightText transition-all duration-200">
      {t("OrganizationPage.ChangeButton")}
    </button>
  );
};

export default RedactButton;
