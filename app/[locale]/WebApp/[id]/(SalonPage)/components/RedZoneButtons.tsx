import { useTranslations } from "next-intl";
import React from "react";

const RedZoneButtons = () => {
  const t = useTranslations();

  return (
    <div className="w-full flex mt-[2%] justify-end gap-x-10  ">
      <div className="flex gap-x-4">
        <div>
          <h6 className="font-medium">{t("OrganizationPage.Disable")}</h6>
          <p className="text-[14px] text-lightText">
            {t("OrganizationPage.Stop")}
          </p>
        </div>
        <button className="w-[100px] h-[45px] text-darkBlue rounded-[30px] bg-[#F2F7FC] transition-all duration-200 active:bg-[#E2F1FF] text-[14px]">
          {t("OrganizationPage.DisableButton")}
        </button>
      </div>
      <div className="flex gap-x-4">
        <div>
          <h6 className="font-medium">{t("OrganizationPage.DeleteSalon")}</h6>
          <p className="text-[14px] text-lightText">
            {t("OrganizationPage.ActionIrreversible")}
          </p>
        </div>
        <button className="w-[100px] h-[45px] bg-[#FFE3E5] rounded-[30px] active:bg-[#FFC7CA] transition-all duration-200 text-[#DB2D37] text-[14px]">
          {t("OrganizationPage.DeleteButton")}
        </button>
      </div>
    </div>
  );
};

export default RedZoneButtons;
