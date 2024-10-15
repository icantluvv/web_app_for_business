import React from "react";

const Registration = ({ title, start, end }: any) => {
  return (
    <div className="absolute text-[15px] font-medium h-full bg-[#D4E2FF] flex flex-col border border-t-0 border-darkBlue/10 w-full shadow-lg rounded-[12px]">
      <div className="w-full h-[30px] rounded-[12px] rounded-t-[12px] bg-[#DCF7FF] py-1 px-2">
        {start}:00 - {end}:00
      </div>
      <div className="p-2 flex flex-col h-full overflow-y-hidden">
        <div className="flex flex-col flex-grow mb-1">
          <span className="text-[16px]">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
