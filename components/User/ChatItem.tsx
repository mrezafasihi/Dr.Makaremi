import React from "react";
import CustomImage from "./CustomImage";

function ChatItem() {
  return (
    <div className="flex items-end mb-[10px]  ">
      <CustomImage styleContainer={"w-[42px] h-[42px] "}/>
      <div className=" mr-[8px] bg-[#83DCD6] rounded-[8px_8px_0_8px] min-w-[214px] max-w-[30%] px-[10px] py-[8px] h-fit text-[#064247] text-[12px] min-h-[42px] break-words ">dddfaasdfghjklmnopqrstsxzouioconsole.logstateusestateconstlwt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur sed quo ipsum adipisci cupiditate accusantium quis asperiores qui totam, commodi dolores nulla. Incidunt numquam velit, quia ipsum officia inventore سلام خوبی</div>
    </div>
  );
}

export default ChatItem;
