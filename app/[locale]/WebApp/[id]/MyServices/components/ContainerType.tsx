import React from "react"
import getServicesData from "@/services/getProceduresData"
import SlideContainerServices from "./SlideContainerServices"

const ContainerType = async ({ id }: ParamsProps) => {
  const data = await getServicesData(id)


  const uniqueCategories = data.reduce((acc: string[], item: any) => {
    const category = item.service.category
    if (!acc.includes(category)) {
      acc.push(category)
    }
    return acc
  }, [])

  return (
    <div className="flex gap-y-3 flex-col z-[1000] no-scrollbar pb-10">
      {uniqueCategories.map((category: string, index: string) => (
        <SlideContainerServices
          category={category}
          key={category}
          data={data}
          id={index}
        />
      ))}
    </div>
  )
}

export default ContainerType
