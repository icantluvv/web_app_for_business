import React, { Suspense } from "react";
import AddChannelButton from "./AddChannelButton";
import ContainerChannels from "./ContainerChannels";
import LogoButton from "./LogoButton";
import Loading from "./SkeletonLeftSidePanel";

const LeftCol = () => {
  return (
    <div className="flex w-[7%] z-[1500] min-h-screen min-w-[100px] bg-[#f9f9f9] py-6 flex-col">
      <div className="flex w-full flex-col gap-y-5 items-center">
        <LogoButton></LogoButton>
        <div className="w-[56px] h-[1px] bg-[#A5A5BB]"></div>
        <Suspense fallback={<Loading />}>
          <ContainerChannels></ContainerChannels>
        </Suspense>
        <AddChannelButton />
      </div>
    </div>
  );
};

export default LeftCol;
