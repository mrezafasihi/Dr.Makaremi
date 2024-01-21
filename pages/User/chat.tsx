import ChatList from "@/components/user/ChatList";
import ChatMesssage from "@/components/user/ChatMesssage";
import NavbarConfirm from "@/components/user/NavbarConfirm";
import React from "react";

function chat() {
  return (
    <div className="flex flex-col">
      <NavbarConfirm />
      <div className="flex mt-[59px]">
        <ChatList />
        <ChatMesssage />
      </div>
    </div>
  );
}

export default chat;
