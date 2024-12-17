import React from "react";
import OneDaySchedule from "./OneDaySchedule";
import { GetScheduleWorkShop } from "@/services/getScheduleWorkShop";
import { useTranslations } from "next-intl";

const TimeBlock = async ({ id }: IdProps) => {
  const t = useTranslations();
  const data = await GetScheduleWorkShop(id);
  const time = await data.json();
  const weekSchedule = time[0];
  
  const daysOrder = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];

  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="font-medium">{t("OrganizationPage.TimeTable.Title")}</h3>
      <div>
        {daysOrder.map(
          (day) =>
            (
              <OneDaySchedule key={day} time={weekSchedule?.[day]} day={t(`OrganizationPage.TimeTable.Weekday.${day}`)} />
            )
        )}
      </div>
    </div>
  );
};

export default TimeBlock;
