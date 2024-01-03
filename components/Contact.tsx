import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomInput from "./user/test";
function Contact({ placeholder, style, label }: any) {
  return (
   
      <div className="mt-[8%] flex flex-col justify-center  items-center w-[70%] mx-auto px-5">
        <p className="text-center text-[#064247] text-[20px] font-[700] font-IRANSansXFaNum">
          شما می توانید در این قسمت با ما در تماس باشید
        </p>

        
          <div className="flex w-[100%] justify-between items-center  flex-col sm:flex-row">
            <CustomInput
              label="نام و نام خانوادگی"
              placeholder="مثال : امیر رئیسی"
              style="w-[100%] sm:w-[50%] "
            />
            <CustomInput
              label="شماره تلفن"
              placeholder="09223620356 :مثال"
              style="w-[100%] sm:w-[50%] sm:mr-[3%] mt-[2%] sm:mt-[0px] "
            />
          </div>
         
       
        
        <textarea
            className=" text-right w-[100%] h-[220px] border-[1px]  rounded-[4.73px] mt-[2%]"
            placeholder="پیام های خود را در اینجا بنویسید..."
          />
        <button className="w-[248px] h-[66px] border-[1px] border-[#288E87] rounded-[7.963px] mt-[2%] text-[#288E87]">
          ثبت نظر
        </button>

      </div>
  );
}

export default Contact;
