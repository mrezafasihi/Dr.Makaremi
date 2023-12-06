import React, { useState } from "react";
import 'animate.css';
function Modal() {
  return (
    <div className=" w-[336px] h-[235px] bg-[#EDEDEE] rounded-[40px] flex flex-col items-center justify-center ">
      <img className="w-16" src="/images/iconModal.png" alt="" />
      <p className="text-[#064247] font-bold mt-6">رمز عبور موقت برای شما پیامک شد</p>
    </div>
  );
}

export default Modal;
