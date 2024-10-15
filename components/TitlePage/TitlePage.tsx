import { useTranslations } from "next-intl";
import React from "react";

const TitlePage: React.FC<TitlePageProps> = ({ option }) => {
  const t = useTranslations();
  return (
    <div className="w-full h-[7vh] flex items-center z-[1] bg-white rounded-[12px] px-5">
      <h1 className="text-[24px] font-semibold">
        {t(`ButtonsChoosePages.${option}`)}
      </h1>
    </div>
  );
};

export default TitlePage;
