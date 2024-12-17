import React from "react"
import Image from "next/image"

import NotifyImage from "@/public/assets/images/notify.svg"
const NotifyButton = () => {
  return (
    <button className="w-[25px] h-[38px]">
      <Image
        src={NotifyImage}
        alt={""}
        width={25}
        height={28}
        layout="responsive"
      ></Image>
    </button>
  )
}

export default NotifyButton
