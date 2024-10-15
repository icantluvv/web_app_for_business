import React from "react";
import CurrentTimeLine from "./RedTimeLine";
import Registration from "./Registration";

interface event {
  start: number;
  end: number;
  title: string;
}

const AllRegistrationsTimeLine = ({ endHour, startHour, Person }: any) => {
  const columns = 5;
  const hourRange = endHour - startHour;

  const people = Person;
  return (
    <div className="w-[99%] mb-[5%] pb-2 relative grid grid-cols-[100px_repeat(5,1fr)] overflow-hidden">
      <div style={{ gridRow: `span ${hourRange + 1}` }}>
        {Array.from({ length: hourRange + 1 }, (_, i) => (
          <div key={i} className="min-h-[70px] relative flex justify-end pr-3">
            <span className="absolute text-[11px] bottom-[-10%]">{`${
              startHour + i
            }:00`}</span>
          </div>
        ))}
      </div>

      {Array.from({ length: columns }, (_, columnIndex) => {
        const person = people[columnIndex];

        return (
          <div key={columnIndex}>
            {Array.from({ length: hourRange + 1 }, (_, i) => (
              <div key={i} className="border-b border-[#a9a9a9] h-[70px]"></div>
            ))}

            {person &&
              person.events.map((event: event, index: number) => {
                const topPosition = (event.start - startHour) * 70 + 70;
                const eventHeight = (event.end - event.start) * 70;

                return (
                  <div
                    key={index}
                    className="absolute w-full px-2"
                    style={{
                      top: `${topPosition}px`,
                      height: `${eventHeight}px`
                    }}
                  >
                    <div className="relative h-full w-[18%] ">
                      <Registration
                        name={person.name}
                        start={event.start}
                        end={event.end}
                        title={event.title}
                      ></Registration>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}

      <CurrentTimeLine
        startHour={startHour}
        endHour={endHour}
        hourRange={hourRange}
      ></CurrentTimeLine>
    </div>
  );
};

export default AllRegistrationsTimeLine;
