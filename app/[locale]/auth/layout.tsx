import React from "react";
import Image from "next/image";

import ClientProvider from "@/components/ClientProvider";
import SidePicture from "@/app/[locale]/auth/components/SidePicture";
import bgImage from "@/public/assets/images/bg-gradient.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex h-screen overflow-hidden items-center">
      <Image
        src={bgImage}
        alt={""}
        layout="fill"
        objectFit="cover"
        className="absolute"
      ></Image>
      <ClientProvider>
        <div className="w-[49%] z-[100] flex items-center justify-center">
          <SidePicture></SidePicture>
        </div>
        {children}
      </ClientProvider>
    </div>
  );
}
