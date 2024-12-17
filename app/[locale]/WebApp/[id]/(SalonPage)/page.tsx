import BackGradient from "@/components/background-gradient-image/BackGradient"
import TitlePage from "@/components/TitlePage/TitlePage"
import { GetInfoAboutWorkShop } from "@/services/getInfoAboutWorkShop"
import React from "react"
import InfoBlock from "./components/InfoBlock"
import RedZoneButtons from "./components/RedZoneButtons"
import RedactButton from "./components/RedactButton"
import AdressBlock from "./components/AdressBlock"
import TimeBlock from "./components/TimeBlock"

const SalonPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const response = await GetInfoAboutWorkShop(id)

  const workshop: WorkShop = await response.json()
  const address: Address = await workshop.address

  return (
    <main className="w-[76%] h-screen flex flex-col relative bg-[#f9f9f9] ">
      <BackGradient></BackGradient>

      <section className="flex w-[99%] min-h-[7vh] gap-x-3 z-[1] mt-[80px] transition-all duration-1000 overflow-x-hidden ">
        <TitlePage option="Salon"></TitlePage>
      </section>

      <section className="w-[99%] bg-white p-4 rounded-[12px] gap-y-3 z-[1000] relative mt-[1%]">
        <RedactButton></RedactButton>
        <InfoBlock workshop={workshop}></InfoBlock>
        <RedZoneButtons></RedZoneButtons>
      </section>

      <section className="w-[99%] gap-x-3 z-[1000] flex relative mt-[1%]">
        <div className="relative w-1/2 flex flex-col bg-white p-4 rounded-[12px]">
          <RedactButton></RedactButton>
          <AdressBlock AddressProp={address}></AdressBlock>
        </div>

        <div className="w-1/2 relative flex flex-col bg-white p-4 rounded-[12px]">
          <RedactButton></RedactButton>
          <TimeBlock id={id}></TimeBlock>
        </div>
      </section>
    </main>
  )
}

export default SalonPage
