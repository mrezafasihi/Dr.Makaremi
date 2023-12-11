import React from "react";

function TextNobat({mb}:any) {
  return (
    <div className={`flex items-center justify-center mt-[6%] text-[#064247] ${mb} `}>
      <hr className=" w-[20%] sm:w-[30%] bg-white  border-[#064247]" />
      <p className=" font-bold mx-[2.5%] text-[23px] md:text-[28px] lg:text-[32px]">نوبت‌دهی دکتر مکارمی</p>
      <hr className="w-[20%] sm:w-[30%] border-[#064247]" />
    </div>
  );
}

export default TextNobat;
