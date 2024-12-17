import { useTranslations } from "next-intl";
import React from "react";

const AdressBlock = ({ AddressProp }: AddressProps) => {
  const t = useTranslations();
  const address = AddressProp;
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col w-full">
        <h3 className="text-[20] font-semibold">
          {t("OrganizationPage.Address")}
        </h3>
        <p className="text-lightText text-[14px]">{address.address}</p>
      </div>
      <div className="h-[220px] bg-lightGray rounded-[12px]"></div>
    </div>
  );
};

export default AdressBlock;
