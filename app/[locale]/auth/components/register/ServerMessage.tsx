import React from "react";

const ServerMessage = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <div className="max-w-[40%] p-4 flex items-center justify-center text-darkBlue rounded-[12px] bg-lightBlue break-normal">
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

export default ServerMessage;
