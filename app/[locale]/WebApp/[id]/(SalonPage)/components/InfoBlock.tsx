import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const InfoBlock = ({ workshop }: WorkShopProps) => {
  const t = useTranslations();

  return (
    <div className="w-full transition-all duration-300 gap-y-4 flex flex-col">
      <div className="relative w-full flex gap-x-3  items-center">
        <Image
          src={workshop.logo}
          alt={""}
          width={100}
          height={100}
          className="rounded-[15px]"
        ></Image>
        <div className="flex flex-col">
          <p className="text-lightText">Салон красоты</p>
          <h5 className="text-[24px] font-semibold">{workshop.name}</h5>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h5 className="font-medium">
          {t("OrganizationPage.InformationAbout")}
        </h5>
        <p className="text-[14px]">{workshop.description}</p>
      </div>
      <div></div>
    </div>
  );
};

export default InfoBlock;
