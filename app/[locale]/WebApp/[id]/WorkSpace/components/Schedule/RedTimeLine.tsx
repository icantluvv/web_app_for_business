"use client";

import React, { useEffect, useState } from "react";

const CurrentTimeLine = ({ startHour, endHour, hourRange }: any) => {
  const [currentPosition, setCurrentPosition] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>("");

  useEffect(() => {
    const updateCurrentPosition = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();

      if (currentHour >= startHour && currentHour <= endHour) {
        const minutesSinceStart =
          (currentHour - startHour) * 60 + currentMinutes;

        const totalMinutes = hourRange * 60;

        const gridElementHeight = 70;

        const totalHeight = hourRange * gridElementHeight;

        const position = (minutesSinceStart / totalMinutes) * totalHeight;

        setCurrentPosition(position);

        if (currentMinutes < 10) {
          setCurrentTime(`${currentHour}:0${currentMinutes}`);
        } else {
          setCurrentTime(`${currentHour}:${currentMinutes}`);
        }
      } else {
        setCurrentPosition(null);
      }
    };

    updateCurrentPosition();
    const interval = setInterval(updateCurrentPosition, 60000);

    return () => clearInterval(interval);
  }, [startHour, endHour, hourRange]);

  return (
    currentPosition !== null && (
      <div
        className={`absolute w-[99%] right-0 flex h-[1px] bg-red-500`}
        style={{
          top: `${currentPosition + 70}px`
        }}
      >
        <span className="text-[11px] text-red-500">{currentTime}</span>
      </div>
    )
  );
};

export default CurrentTimeLine;
