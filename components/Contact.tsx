import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomInput from "./user/test";
import apiRequests from "@/Axios/config";
import { useForm } from "react-hook-form";
import { number } from "yup";
import toast, { Toaster } from "react-hot-toast";
function Contact({ placeholder, style, label }: any) {
  const { register, handleSubmit } = useForm();
  const [name,setName]=useState<any>()
  const [phone,setPhone]=useState<any>()
  const [token, setToken] = useState<any>();
  useEffect(() => {
    getData(), setToken(localStorage.getItem("token"));
  }, []);
  const onSubmit = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("first")
      apiRequests.post(
        `/api/user/new-comment`,
        {
          comment: "text",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res)=>console.log(res)).catch(()=>toast.error("اپتدا ثبت نام "))
    }
    else{toast.error("اپتدا ثبت نام "),console.log("second")}
  };
  const getData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      apiRequests
        .get(`/api/user-document`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) =>{
        setName(
            response.data.data[0].first_name+'   '+response.data.data[0].last_name 

          ) 
          setPhone(response.data.data[0].phone_number),console.log(response)}
        );
    }
  };
  return (
    <div className="mt-[8%] flex flex-col justify-center  items-center w-[70%] mx-auto px-5">
      <p className="text-center text-[#064247] text-[20px] font-[700] font-IRANSansXFaNum mb-[5%]">
        شما می توانید در این قسمت با ما در تماس باشید
      </p>

    <div className="flex w-[100%] justify-between items-center  flex-col sm:flex-row">
        <CustomInput
          label="نام و نام خانوادگی"
          placeholder="مثال : امیر رئیسی"
          style="w-[100%] sm:w-[50%] "
          {...register("name")}
          value={name}
        />
        <CustomInput
          label="شماره تلفن"
          placeholder="09223620356 :مثال"
          style="w-[100%] sm:w-[50%] sm:mr-[3%] mt-[2%] sm:mt-[0px] "
          {...register("number")}
          value={phone}

        />
      </div>

     <textarea 
        className=" text-right w-[100%] h-[220px] border-[1px]  rounded-[4.73px] mt-[2%]"
        placeholder="پیام های خود را در اینجا بنویسید..."
        {...register("text")}
        
      />
      <button
        className="w-[248px] h-[66px] border-[1px] border-[#288E87] rounded-[7.963px] mt-[2%] text-[#288E87]"
        onClick={handleSubmit(onSubmit)}
      >
        ثبت نظر
      </button>
      <Toaster/>
    </div>
  );
  
}

export default Contact;
