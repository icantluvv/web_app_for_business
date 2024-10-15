"use client";

import React from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const InputBoxMessage = () => {
  const router = useRouter();
  async function login() {
    try {
      const response = await axios.post("/api/proxy/auth/signin", {
        // token: "sldkmsdf"
      });

      console.log("Login successful:", response.data);
      router.push("/WebApp/WorkSpace");
    } catch (error) {
      console.error("axios:", error);
    }
  }

  return (
    <div className="absolute bottom-0 rounded-b-[12px] px-[11%] py-[2%] gap-y-5 bg-white w-full min-h-[130px] flex flex-col items-center justify-center">
      <div className="absolute top-[-20px] inset-0 h-[35px] bg-gradient-to-b from-transparent via-white to-white"></div>

      <div className="w-full flex relative items-center">
        <input
          placeholder="Введите текст"
          className="bg-lightBlue w-full px-4 min-h-[65px] rounded-[12px]"
        />
        <button
          onClick={() => login()}
          className="flex absolute right-[4%] pr-[0.7px] items-center justify-center h-[60%]  bg-white/30 active:bg-lightText transition-all duration-100 rounded-[50%] w-[40px]"
        >
          <Image
            src={"/images/send-message.svg"}
            width={20}
            height={20}
            alt={""}
          ></Image>
        </button>
      </div>
      <button className="hover:text-lightText active:text-lightGray transition-all duration-100 ">
        Пропустить
      </button>
    </div>
  );
};

export default InputBoxMessage;
