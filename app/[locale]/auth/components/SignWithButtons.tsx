"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import appleIcon from "@/public/assets/images/Apple.svg";
import googleIcon from "@/public/assets/images/Google.svg";

const SignWithButtons = () => {
  const router = useRouter();

  async function Sign() {
    try {
      const response = await fetch("/api/auth/testSignIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.redirected) {
        router.push(response.url);
      } else {
        const responseData = await response.json();
        if (responseData.error) {
          console.error("Server error:", responseData.error);
        } else {
          console.log("Success:", responseData);
        }
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  }

  return (
    <>
      <button
        className="h-[60px] w-[60px]"
        onClick={() => router.push("/auth/registration")}
      >
        <Image src={googleIcon} width={50} height={50} alt="Google logo" />
      </button>
      <button className="w-[50px] h-[50px] relative" onClick={Sign}>
        <Image src={appleIcon} layout="fill" alt="Apple logo" />
      </button>
    </>
  );
};

export default SignWithButtons;
