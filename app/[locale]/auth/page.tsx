import React from "react";
import SignWithButtons from "@/app/[locale]/auth/components/SignWithButtons";
import { useTranslations } from "next-intl";

const AuthPage = () => {
  const t = useTranslations();
  return (
    <main className="flex w-[49%] z-[100] flex-col justify-center bg-white rounded-[12px] px-[3%] h-[95%] flex-row overflow-hidden items-center">
      <h1 className="font-semibold w-full text-[28px]">
        {t(`authPage.AuthHello`)}
      </h1>
      <h1 className="font-semibold w-full text-[28px]">
        {t(`authPage.Maestri`)}
      </h1>
      <div className="w-full flex items-center text-darkBlue gap-x-2 justify-center mt-[5%]">
        <hr className="w-[30%] h-[1px] bg-darkBlue" />
        <span className="text-[14px]">{t("authPage.Continue")}</span>
        <hr className="w-[30%] h-[1px] bg-darkBlue" />
      </div>

      <section className="mt-[5%] items-center flex gap-x-2">
        <SignWithButtons></SignWithButtons>
      </section>
    </main>
  );
};

export default AuthPage;
