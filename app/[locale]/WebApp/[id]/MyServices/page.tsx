import React from "react"
import Image from "next/image"
import TitlePage from "@/components/TitlePage/TitlePage"
import ContainerType from "./components/ContainerType"
import backgroundImage from "@/public/assets/images/bg-gradient.svg"
import AddItemButton from "@/components/AddItemButton/AddItemButton"

const MyServices = async ({ params }: { params: { id: string } }) => {
  return (
    <main className="w-[76%] h-screen flex flex-col relative bg-[#f9f9f9]">
      <div className="absolute w-full top-0 right-0 z-[0]">
        <Image
          src={backgroundImage}
          width={1520}
          height={1080}
          alt={""}
        ></Image>
      </div>

      <section className="flex w-[99%] min-h-[7vh] gap-x-3 z-[1] mt-[80px] transition-all duration-1000 overflow-x-hidden ">
        <TitlePage option={"services"}></TitlePage>
        <AddItemButton id={2}></AddItemButton>
      </section>

      <section className="w-[99%] flex flex-col gap-y-3 overflow-y-auto no-scrollbar mt-[1%]">
        <ContainerType id={params.id}></ContainerType>
      </section>
    </main>
  )
}

export default MyServices
