import React from "react"
import SearchForm from "./SearchForm"
import ContainerButtonsSelect from "./ContainerButtonsSelect"
import WorkShopButton from "./WorkShopButton"

const RightCol = () => {
  return (
    <div
      className={`w-[17%] h-screen bg-[#f9f9f9] flex min-w-[17%] flex-col h-full gap-y-4 py-6 pr-4`}
    >
      <SearchForm></SearchForm>
      {/* <WorkShopButton></WorkShopButton> */}
      <ContainerButtonsSelect></ContainerButtonsSelect>
    </div>
  )
}

export default RightCol
