import React from "react";
import Image from "next/image";
import sideImage from "@/public/assets/images/logo-auth.svg";

const SidePicture = () => {
  return <Image src={sideImage} width={960} height={1080} alt={""}></Image>;
};

export default SidePicture;
