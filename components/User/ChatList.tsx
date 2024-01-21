import React from "react";
import CustomImage from "./CustomImage";

function ChatList() {
  const person = [
    { name: "فائزه ملکی", image: "", id: "1" },
    { name: "شاهین احمدی", image: "", id: "2" },
    { name: "مرتضی حمیدی", image: "", id: "3" },
  ];
  return (
    <div className="bg-slate-400 w-[27.01%] h-screen">
      {person.map((item) => {
        return (
          <div
            key={item.id}
            className="flex mr-[17.99%] w-[75.83%] h-[63px] border bg-[#D6F3F1] mb-[4px] items-center rounded-[10px] pr-[5.42%]"
          >
            <CustomImage />
            <p className="mr-[8px] font-iranSansLight text-[#064247]">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ChatList;
