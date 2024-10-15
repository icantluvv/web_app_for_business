"use client"

import React from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { toggleServiceType } from "@/redux/ServiceTypeSlice"
import { RootState } from "@/redux/store"
import arrowImage from "@/public/assets/images/mui-arrow-small.svg"

const ButtonShowType = ({ id }: { id: string }) => {
  const ShowServiceType = useSelector(
    (state: RootState) => state.serviceType.ShowServiceTypes[id]
  )

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(toggleServiceType(id))
  }

  return (
    <button
      onClick={handleClick}
      className="absolute w-full h-[60px] top-0 right-0 flex items-center justify-end"
    >
      <Image
        src={arrowImage}
        width={20}
        height={34}
        alt={""}
        className={`${ShowServiceType ? "rotate-180" : ""} mr-5`}
      ></Image>
    </button>
  )
}

export default ButtonShowType
