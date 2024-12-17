import React from "react"
import Schedule from "./components/Schedule/ScheduleWorkSpace"
import HeaderWorkspace from "./components/HeaderWorkspace/HeaderWorkSpace"
import SideCalendar from "./components/SideBarsOption/SideCalendar/SideCalendar"
import SideMasters from "./components/SideBarsOption/SideMasters/SideMasters"
import SideSettings from "./components/SideBarsOption/SideSettings/SideSettings"
import { useTranslations } from "next-intl"
import BackGradient from "@/components/background-gradient-image/BackGradient"

const WorkSpace = () => {
  const t = useTranslations()
  return (
    <main className="w-[76%] h-screen flex flex-col relative bg-[#f9f9f9] ">
      <BackGradient></BackGradient>
      <section className="min-h-[80px] w-full flex items-center pr-4 z-[1] gap-x-4 justify-end">
        <HeaderWorkspace></HeaderWorkspace>
      </section>
      <section className="flex w-full z-[1] mb-[2%] transition-all duration-1000 overflow-hidden">
        <Schedule></Schedule>
        <SideCalendar
          params={null}
          option={t("SideBarsRegistrations.Calendar")}
        ></SideCalendar>
        <SideMasters
          option={t("SideBarsRegistrations.AllMasters.title")}
          params={t("SideBarsRegistrations.AllMasters.params")}
        ></SideMasters>
        <SideSettings
          params={null}
          option={t("SideBarsRegistrations.Options")}
        ></SideSettings>
      </section>
    </main>
  )
}

export default WorkSpace
