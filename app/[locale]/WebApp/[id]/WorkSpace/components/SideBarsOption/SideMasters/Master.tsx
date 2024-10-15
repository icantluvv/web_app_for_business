import React from "react";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";

const Master = () => {
  function Include() {
    window.location.reload();
  }
  return (
    <div className="flex w-full pr-4 items-center justify-between">
      <div className="flex w-full items-center gap-x-2">
        <div className="rounded-[50%] w-[34px] h-[34px] border relative">
          <Image
            src={"/"}
            layout="fill"
            className="rounded-[50%]"
            alt={""}
          ></Image>
        </div>
        <div className="flex flex-col">
          <p className="text-[12px] text-lightText">Бровист патимейкер</p>
          <h3>Виктория Васильева</h3>
        </div>
      </div>

      <Checkbox onChange={Include} defaultChecked color="default" />
    </div>
  );
};

export default Master;
