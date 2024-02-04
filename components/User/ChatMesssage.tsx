import React from "react";
import ChatItem from "./ChatItem";
import CustomImage from "./CustomImage";

function ChatMesssage() {
  return (
    <div className=" h-screen w-[73%] flex flex-col justify-between px-[2%] ">
      <div style={{ direction: "ltr" }} className="overflow-y-auto  ">
        <ChatItem />
      </div>
      <div className="w-full h-[96px] flex bg-[#F9F9F9]">
        <input
          type="text"
          placeholder="پیام خود را بنویسید..."
          className="w-full bg-[#F9F9F9] h-full rounded-[10px] placeholder:px-[32px]"
        />
        <button>send</button>
      </div>
    </div>
  );
}

export default ChatMesssage;
