"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { unsetChannelData } from "@/redux/ChannelSlice"
import logo from "@/public/assets/images/SideBar_Logo.svg"

const LogoButton = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleClick = () => {
    dispatch(unsetChannelData())
    router.push("/WebApp")
  }

  return (
    <div className="w-full flex justify-center">
      <button onClick={handleClick}>
        <Image src={logo} width={56} height={31} alt={"SideBarLogo"} />
      </button>
    </div>
  )
}

export default LogoButton
