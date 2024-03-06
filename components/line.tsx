import React from "react";

function Line() {
  return (
    <div className="flex items-center justify-center mt-[12%] mb-[6%] ">
      <hr className=" w-[30%] border-[#45CBC2]  [@media(max-width:1060px)]:w-[25%] [@media(max-width:734px)]:w-[17%] [@media(max-width:554px)]:hidden" />
      <p className="font-Kalameh  text-[32px] text-center bold text-[#064247] mx-[1%] [@media(max-width:1060px)]:text-[28px]">
        کلینیک دکتر مکارمی از دید شما
      </p>
      <hr className=" w-[30%] border-[#45CBC2]  [@media(max-width:1060px)]:w-[25%] [@media(max-width:734px)]:w-[17%] [@media(max-width:554px)]:hidden" />
    </div>
  );
}

export default Line;
