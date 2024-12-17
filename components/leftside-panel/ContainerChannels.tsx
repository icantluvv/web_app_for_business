import React from "react"
import OneChannel from "./ChannelButton"
import { GetWorkShops } from "@/services/getAllWorkShops"
import SkeletonLeftSidePanel from "./SkeletonLeftSidePanel"
import { redirect } from "next/navigation"
import ClientWrapper from "./../ClientWrapper"

const ContainerChannels = async () => {
  const response = await GetWorkShops()

  if (response.redirect) {
    redirect(response.redirect)
  }
  const { error, data } = response

  if (error || !data) {
    return <SkeletonLeftSidePanel />
  }

  return (
    <ClientWrapper initialChannels={data}>
      <section className="flex flex-col w-full gap-y-2 no-scrollbar items-center">
        {data.length > 0 ? (
          data.map((channel: any, index: number) => (
            <OneChannel
              data={channel}
              index={index}
              key={index || channel.id}
            />
          ))
        ) : (
          <div>No channels available</div>
        )}
      </section>
    </ClientWrapper>
  )
}

export default ContainerChannels
