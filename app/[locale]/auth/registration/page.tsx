import React from "react";
import InputBoxMessage from "@/app/auth/components/register/InputBoxMessage";
import MessageFabric from "@/app/auth/components/register/MessageFabric";

const RegistrationPage = () => {
  return (
    <main className="flex w-[49%] relative z-[100] flex-col justify-center bg-white rounded-[12px] px-[3%] h-[95%] flex-row overflow-hidden items-center">
      <div className="absolute  z-[101] inset-0 h-[35px] bg-gradient-to-t from-transparent via-white to-white"></div>
      <MessageFabric></MessageFabric>
      <InputBoxMessage></InputBoxMessage>
    </main>
  );
};

export default RegistrationPage;
