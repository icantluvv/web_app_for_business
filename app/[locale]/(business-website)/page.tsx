import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="">
      <h1>{t("home")}</h1>
      <div className=""></div>
    </main>
  );
}
