import React from "react";

import Navigation from "@/components/page-navigation/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation></Navigation>
      {children}
    </>
  );
}
