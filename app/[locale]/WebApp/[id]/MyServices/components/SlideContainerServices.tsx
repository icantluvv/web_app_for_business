"use client"
import { RootState } from "@/redux/store"
import React, { useRef, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Type from "./Type"
import ButtonShowType from "./ButtonShowType"

const SlideContainerServices = ({
  id,
  category,
  data
}: {
  id: string
  category: string
  data: Service[]
}) => {
  const ShowServiceType = useSelector(
    (state: RootState) => state.serviceType.ShowServiceTypes[id]
  )

  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (ShowServiceType && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    } else {
      setContentHeight(0)
    }
  }, [ShowServiceType])

  return (
    <div
      className={`w-full bg-white transition-all overflow-hidden duration-[300ms] ease-in-out flex flex-col rounded-[12px] p-4 relative`}
      style={{
        maxHeight: ShowServiceType ? `${contentHeight + 60}px` : "60px",
        willChange: "max-height, opacity"
      }}
    >
      <h2 className={`text-[18px] ${ShowServiceType && "mb-4"}`}>{category}</h2>

      <div
        ref={contentRef}
        className={`transition-all duration-[300ms]   ${
          ShowServiceType ? "opacity-100 delay-[100ms]" : "opacity-0 "
        }`}
      >
        {data
          .filter((one: any) => one.service.category === category)
          .map((filteredService: any) => (
            <Type key={filteredService.id} service={filteredService} />
          ))}
      </div>

      <ButtonShowType id={id} />
    </div>
  )
}

export default SlideContainerServices
