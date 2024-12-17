import React from "react";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/bg-gradient.svg";

const BackGradient = () => {
  return (
    <div className="absolute w-full top-0 right-0 z-[0]">
      <Image src={backgroundImage} width={1520} height={1080} alt={""}></Image>
    </div>
  );
};

export default BackGradient;
