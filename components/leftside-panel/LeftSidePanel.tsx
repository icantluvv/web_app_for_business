import React, { Suspense } from "react"
import AddChannelButton from "./AddChannelButton"
import ContainerChannels from "./ContainerChannels"
import LogoButton from "./LogoButton"
import Loading from "./SkeletonLeftSidePanel"
import UserLogo from "./UserLogo"
import NotifyButton from "./NotifyButton"

const LeftCol = () => {
  return (
    <div className="flex w-[7%] z-[1500] h-screen flex-col min-w-[100px] bg-[#f9f9f9] py-6 relative items-center">
      <div className="max-h-[4%]">
        <LogoButton />
      </div>

      <div className="w-[56px] h-[1px] bg-[#A5A5BB] my-[3vh]" />

      <div className="flex flex-col w-full items-center overflow-y-auto no-scrollbar pb-[18vh]">
        <Suspense fallback={<Loading />}>
          <ContainerChannels />
        </Suspense>

        <div className="my-[2vh]">
          <AddChannelButton />
        </div>
      </div>

      <div className="w-full bg-[#f9f9f9] flex absolute bottom-0 flex-col h-[18vh] gap-3  items-center py-[2vh]">
        <NotifyButton />
        <UserLogo />
      </div>
    </div>
  )
}

export default LeftCol
