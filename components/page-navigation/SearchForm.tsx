import Image from "next/image";
import React from "react";

import searchImage from "@/public/assets/images/SideBar_Search.svg";
import { useTranslations } from "next-intl";

const SearchForm = () => {
  const t = useTranslations();
  return (
    <form className="flex items-center w-full rounded-[16px]">
      <Image
        src={searchImage}
        width={15}
        height={24}
        alt={"SideBarLogo"}
        className="absolute ml-3"
      ></Image>

      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
      <input
        type="search"
        id="search"
        className="w-full p-2 ps-10 text-[14px] rounded-[16px] focus:border-blue-500"
        placeholder={t("SearchingWidget")}
        required
      />
    </form>
  );
};

export default SearchForm;
