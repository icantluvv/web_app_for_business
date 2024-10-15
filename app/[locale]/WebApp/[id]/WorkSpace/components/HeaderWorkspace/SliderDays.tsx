import React from "react";
import Image from "next/image";
import arrowImage from "@/public/assets/images/arrow-calendar-header.svg";

const SliderDays = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <button>
        <Image src={arrowImage} width={19} height={24} alt={""}></Image>
      </button>
      <div className="w-full px-2 flex justify-between items-center gap-x-2">
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
        <div className="w-[42px] h-[42px] rounded-[50%] bg-[#F2F7FC]"></div>
      </div>
      <button>
        <Image
          src={arrowImage}
          width={19}
          height={24}
          alt={""}
          className="rotate-180"
        ></Image>
      </button>
    </div>
  );
};

export default SliderDays;
