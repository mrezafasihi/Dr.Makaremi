import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomInput from "./user/test";
function Contact({ placeholder, style, label }: any) {
  return (
   
      <div className="mt-[8%] flex flex-col justify-center  items-center ">
        <p className="text-center text-[#064247] text-[20px] font-[700] font-IRANSansXFaNum">
          شما می توانید در این قسمت با ما در تماس باشید
        </p>

        <div className="mt-[2%] flex items-center justify-between w-[860px] sm:flex-col">
          <div className="flex">
            <CustomInput
              label="نام و نام خانوادگی"
              placeholder="مثال : امیر رئیسی"
              style="w-[430px]"
            />
            <CustomInput
              label="شماره تلفن"
              placeholder="09223620356 :مثال"
              style="w-[430px] mr-[3%]"
            />
          </div>
         
        </div>
        
        <textarea
            className=" text-right w-[860px] h-[220px] border-[1px]  rounded-[4.73px] mt-[2%]"
            placeholder="پیام های خود را در اینجا بنویسید..."
          />
        <button className="w-[248px] h-[66px] border-[1px] border-[#288E87] rounded-[7.963px] mt-[2%] text-[#288E87]">
          ثبت نظر
        </button>

      </div>
  );
}

export default Contact;
