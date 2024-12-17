"use server"
import React from "react"
import SelectPageButton from "./SelectPageButton"
import { useTranslations } from "next-intl"

const ContainerButtonsSelect = () => {
  const t = useTranslations()

  const allButtons = {
    1: { title: t("ButtonsChoosePages.Salon"), address: "" },
    2: { title: t("ButtonsChoosePages.registrations"), address: "WorkSpace" },
    3: { title: t("ButtonsChoosePages.services"), address: "MyServices" },
    4: { title: t("ButtonsChoosePages.finance"), address: "MyFinance" },
    5: { title: t("ButtonsChoosePages.masters"), address: "mastera" },
    6: { title: t("ButtonsChoosePages.clients"), address: "klienty" },
    7: { title: t("ButtonsChoosePages.tasks"), address: "zadachi" },
    8: { title: t("ButtonsChoosePages.positions"), address: "dolzhnosti" },
    9: { title: t("ButtonsChoosePages.stats"), address: "statistika" }
  }
  return (
    <div className="flex flex-col w-full bg-white rounded-[12px] text-black text-[18px] font-medium">
      {Object.entries(allButtons).map(
        ([key, { title, address }], index, arr) => (
          <SelectPageButton
            key={key}
            index={index}
            title={title}
            address={address}
            isLast={index === arr.length - 1}
          />
        )
      )}
    </div>
  )
}

export default ContainerButtonsSelect
