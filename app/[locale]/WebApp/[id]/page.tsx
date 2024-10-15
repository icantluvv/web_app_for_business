import { GetInfoAboutWorkShop } from "@/services/getInfoAboutWorkShop";
import React from "react";

const SalonPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const response = await GetInfoAboutWorkShop(id);

  return <div></div>;
};

export default SalonPage;
