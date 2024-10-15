import React from "react";
import Image from "next/image";
import plusImage from '@/public/assets/images/Plus_White.svg'

const AddChannelButton = () => {
  return (
    <div className="w-[40px] h-[40px] bg-gray-300 rounded-[13px] hover:w-[45px] hover:h-[45px] transition-all active:bg-[#e6e6e6] active:w-[42px] active:h-[42px] flex items-center justify-center select-none">
      <Image
        src={plusImage}
        width={16}
        height={16}
        alt={""}
      ></Image>
    </div>
  );
};

export default AddChannelButton;
