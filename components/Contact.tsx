import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomInput from "./user/test";
import apiRequests from "@/Axios/config";
import { useForm } from "react-hook-form";
import { number } from "yup";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./user/Modal";
import { Slide } from "@mui/material";
function Contact({ placeholder, style, label }: any) {
<<<<<<< HEAD
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState<any>();
  const [phone, setPhone] = useState<any>();
=======
  const [openModal,setOpenModal]=useState<any>()
  const { register, handleSubmit ,reset} = useForm();
  const [name,setName]=useState<any>()
  const [phone,setPhone]=useState<any>()
>>>>>>> b3953462aa8bedcc1545898a63152757b288e7a0
  const [token, setToken] = useState<any>();
  let role: any;
  if (typeof window !== "undefined") {
    role = localStorage.getItem("role");
  }
  useEffect(() => {
    getData()
    , 
    setToken(localStorage.getItem("token"));
  }, []);
  const onSubmit = (data:any) => {

    console.log(data.name)
      
    const token = localStorage.getItem("token");
<<<<<<< HEAD
    if (token && role == "user") {
      console.log("first");
      apiRequests
        .post(
          `/api/user/new-comment`,
          {
            comment: "text",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res))
        .catch(() => toast.error("اپتدا ثبت نام "));
    } else {
      toast.error("اپتدا ثبت نام "), console.log("second");
    }
=======
    if (token) {
      apiRequests.post(
        `/api/user/new-comment`,
        {
          comment: data.text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then(()=>
      {
        setOpenModal(true)
        reset({
          name: "",
          number: "",
          text:"",
        }),setTimeout(() => {
         setOpenModal(false)
        },3000 );}
        ).catch(()=>toast.error(" اپتدا ثبت نام کنید"))
    }
    else{toast.error("اپتدا ثبت نام "),console.log("second")}

>>>>>>> b3953462aa8bedcc1545898a63152757b288e7a0
  };
  const getData = () => {
    const token = localStorage.getItem("token");
    if (token && role == "user") {
      apiRequests
        .get(`/api/user-document`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setName(
            response.data.data[0].first_name +
              "   " +
              response.data.data[0].last_name
          );
          setPhone(response.data.data[0].phone_number);
          console.log(response);
        });
    }
  };
  const icon = (
    <div className="flex items-center justify-center my-[-220px] z-10">
            <Modal text="نظر شما با موفقیت ثبت شد و پس از تایید در سایت قرار میگیرد."/>

    </div>
  );
  console.log(name)
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
          hookForm={register("name")}
          value={name}
        />
        <CustomInput
          label="شماره تلفن"
          placeholder="09223620356 :مثال"
          style="w-[100%] sm:w-[50%] sm:mr-[3%] mt-[2%] sm:mt-[0px] "
          hookForm={register("number")}
          value={phone}
        />
      </div>
<<<<<<< HEAD

      <textarea
        className=" text-right w-[100%] h-[220px] border-[1px]  rounded-[4.73px] mt-[2%] pr-[19.7px] pt-[20.08px] placeholder:text-[#757575]"
=======
    
     <textarea 
        className=" text-right w-[100%] h-[220px] border-[1px]  rounded-[4.73px] mt-[2%]"
>>>>>>> b3953462aa8bedcc1545898a63152757b288e7a0
        placeholder="پیام های خود را در اینجا بنویسید..."
        {...register("text")}
      />
      <button
        className="w-[248px] h-[66px] border-[1px] border-[#288E87] rounded-[7.963px] mt-[2%] text-[#288E87] transition ease-in-out duration-500 hover:bg-[#288E87] hover:text-[#FFF] "
        onClick={handleSubmit(onSubmit)}
      >
        ثبت نظر
      </button>
<<<<<<< HEAD
      <Toaster />
=======
      <Toaster/>
      <div >
      <Slide direction="up" in={openModal}>
        {icon}
      </Slide>
      </div>
>>>>>>> b3953462aa8bedcc1545898a63152757b288e7a0
    </div>
  );
}

export default Contact;
