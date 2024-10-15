import React from "react";
import TitlePage from "@/components/TitlePage/TitlePage";
import AllWorkersPanel from "./AllWorkersPanel";
import AllRegistrationsTimeLine from "./AllRegistrationsTimeLine";

const ScheduleWorkSpace = () => {
  const Person = [
    {
      name: "Alice",
      events: [
        { start: 9, end: 11, title: "Meeting" },
        { start: 11, end: 12.5, title: "Code Review" }
      ]
    },
    {
      name: "Bob",
      events: [
        { start: 10, end: 11, title: "Design Discussion" },
        { start: 13, end: 14, title: "Lunch" }
      ]
    }
  ];

  const startHour = 9;
  const endHour = 22;
  return (
    <section className="w-[99%] rounded-[12px] transition-all duration-500 flex  flex-col ">
      <div>
        <TitlePage option={"registrations"}></TitlePage>
      </div>
      <div className="w-full mt-[1%] bg-white rounded-[16px] overflow-y-auto">
        <AllWorkersPanel Person={Person}></AllWorkersPanel>
        <AllRegistrationsTimeLine
          Person={Person}
          endHour={endHour}
          startHour={startHour}
        ></AllRegistrationsTimeLine>
      </div>
    </section>
  );
};

export default ScheduleWorkSpace;
