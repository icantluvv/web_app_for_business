import React from "react";
import OneChannel from "./ChannelButton";
import { GetWorkShops } from "@/services/getAllWorkShops";
import SkeletonLeftSidePanel from "./SkeletonLeftSidePanel";
import { redirect } from "next/navigation";

const ContainerChannels = async () => {
  const response = await GetWorkShops();

  if (response.redirect) {
    redirect(response.redirect);
  }
  const { error, data } = response;

  if (error || !data) {
    return <SkeletonLeftSidePanel />;
  }

  return (
    <section className="flex flex-col w-full max-h-[395px] gap-y-2 no-scrollbar overflow-y-auto items-center">
      {data.length > 0 ? (
        data.map((channel: any, index: number) => (
          <OneChannel data={channel} index={index} key={index || channel.id} />
        ))
      ) : (
        <div>No channels available</div>
      )}
    </section>
  );
};

export default ContainerChannels;
