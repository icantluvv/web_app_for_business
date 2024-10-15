import React from "react";
import "@/globals.css";
import ClientProvider from "@/components/ClientProvider";
import LeftSidePanel from "@/components/leftside-panel/LeftSidePanel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <LeftSidePanel />
      {children}
    </ClientProvider>
  );
}
