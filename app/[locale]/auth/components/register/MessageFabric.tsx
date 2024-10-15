import React from "react";
import ServerMessage from "./ServerMessage";
import ClientMessage from "./ClientMessage";

const MessageFabric = () => (
  <div className="w-full flex relative gap-y-4 flex-col pt-[5%] pb-[27%] overflow-y-auto no-scrollbar">
    <ServerMessage></ServerMessage>
    <ClientMessage></ClientMessage>
    <ServerMessage></ServerMessage>
    <ServerMessage></ServerMessage>
    <ServerMessage></ServerMessage>
    <ServerMessage></ServerMessage>
  </div>
);

export default MessageFabric;
