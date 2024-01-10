import React from "react";

function TextChangePass({mb}:any) {
  return (
    <div className={`flex items-center justify-center mt-[6%] text-[#064247] ${mb} `}>
      <hr className=" w-[20%] sm:w-[30%] bg-white  border-[#45CBC2]" />
      <p className=" font-kalamehBold mx-[2.5%] text-[22px] md:text-[28px] lg:text-[32px]">تغییر رمز عبور</p>
      <hr className="w-[20%] sm:w-[30%] border-[#45CBC2]" />
    </div>
  );
}

export default TextChangePass;
