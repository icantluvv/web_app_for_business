import React from "react";

const ClientMessage = () => {
  return (
    <div className="w-full flex items-center justify-end">
      <div className="max-w-[40%] p-4 flex items-center justify-center text-darkBlue rounded-[12px] bg-gradient-to-br from-[#FFECED] to-[#F2F7FC] break-normal">
        <p>
          <span className="font-medium">
            Войдите или зарегистрируйтесь&nbsp;
          </span>
          чтобы пользоваться сервисом на любом устройстве
        </p>
      </div>
    </div>
  );
};

export default ClientMessage;
