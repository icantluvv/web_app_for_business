import React from "react";
import { useTranslations } from "next-intl";

const OneDaySchedule = ({ time, day }: ScheduleProps) => {
  const t = useTranslations();

  return (
    <div className="flex w-full justify-between text-[14px] min-h-[32px]">
      <p>{day}</p>
      <div className="min-w-[100px] flex flex-col items-end">
        {time ? (
          <>
            <p>{time.workTime}</p>
            <p className="text-[12px] text-lightText">{time.offTime}</p>
          </>
        ) : (
          <p className="text-red-600">{t("OrganizationPage.TimeTable.Weekday.none")}</p>
        )}
      </div>
    </div>
  );
};

export default OneDaySchedule;
