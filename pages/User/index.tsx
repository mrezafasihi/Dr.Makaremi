import CustomButton from "@/components/user/CustomButton";
import CustomInput from "@/components/user/CustomInput";
import Modal from "@/components/user/Modal";
import Navbar from "@/components/user/Navbar";
import TextNobat from "@/components/user/TextNobat";
import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Datepicker, Input, initTE } from "tw-elements";
// initTE({ Datepicker, Input }, { allowReinits: true });

function userPanel() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 3000);
  };

  const handleResendCode = () => {};
  const handleEditNum = () => {};
  return (
    <div className="">
      <Navbar />
      <TextNobat mb="mb-[5.5%]" />

      <CustomInput
        label="شماره تلفن همراه"
        placeholder="مثال : ۰۹۱۱۲۳۴۵۶۷۸"
        style="mx-auto w-[51.5%]"
      />
      <div className="flex justify-between text-[#45CBC2] mx-[24.4%]">
        {openModal ? (
          <>
            <p onClick={handleResendCode}>ارسال مجدد رمز</p>
            <p onClick={handleEditNum}>تصحیح شماره تلفن</p>
          </>
        ) : (
          <div className="my-[1.64%]"></div>
        )}
      </div>
      <CustomButton
        onClick={handleClick}
        text="تایید"
        style="text-[#288E87] hover:bg-[#303136] bg-white"
      />

      <div className="flex justify-center ">
        <div>{openModal ? <Modal /> : null}</div>
      </div>
    </div>
  );
}

export default userPanel;