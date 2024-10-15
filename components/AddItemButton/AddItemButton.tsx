"use client";
import React from "react";
import Image from "next/image";
import plusImage from "../../public/assets/images/plus_black.svg";

const AddItemButton: React.FC<AddItemButtonProps> = ({ id }) => {
  return (
    <button
      onClick={() => handleClick(id)}
      className="transition-all duration-400 w-[80px] active:bg-lightGray bg-white rounded-[16px] flex items-center justify-center"
    >
      <Image src={plusImage} width={25} height={25} alt={""}></Image>
    </button>
  );
};

export default AddItemButton;

async function handleClick(id: number) {
  switch (id) {
    case 1:
      console.log("it's 1st");
    case 1:
      console.log("it's 1st");
    case 3:
      console.log("it's 3rd");
  }
}
