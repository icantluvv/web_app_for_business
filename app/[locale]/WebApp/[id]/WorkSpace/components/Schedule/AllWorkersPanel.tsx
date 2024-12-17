import React from "react"
import Image from "next/image"
import plusWorkers from "@/public/assets/images/PlusWorkers.svg"


const AllWorkersPanel = ({ Person }: PersonProps) => {
  const people = Person
  const columns = people.length

  return (
    <div className="w-full h-[105px] flex ">
      <div className="w-[99%] h-full relative grid grid-cols-[100px_repeat(5,1fr)] overflow-hidden">
        <button className="h-full w-full active:bg-lightGray transition-all duration-200 text-white flex items-center justify-center">
          <Image src={plusWorkers} width={36} height={36} alt={""}></Image>
        </button>

        {people.map((man, index) => (
          <div key={index} className="relative w-full px-2">
            <div className="h-full w-full flex flex-col gap-y-2 items-center justify-center">
              <button className="w-[45px] h-[45px] border-2 rounded-[50%]"></button>
              <label>{man.name}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllWorkersPanel
