import React from "react"

const Loading = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-[72px] h-[72px] flex items-center justify-center rounded-[12px] bg-darkBlue animate-pulse"
        ></div>
      ))}
    </div>
  )
}

export default Loading
