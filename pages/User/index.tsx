import CustomButton from "@/components/user/CustomButton";
import CustomInput from "@/components/user/CustomInput";
import Modal from "@/components/user/Modal";
import Navbar from "@/components/user/Navbar";
import TextNobat from "@/components/user/TextNobat";
import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const icon = (
  <div className="flex items-center justify-center my-[-220px] z-10">
    <Modal  text="رمز عبور موقت برای شما پیامک شد"/>
  </div>
);

function userPanel() {
  const [phone, setPhone] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [pass, setPass] = useState("");
 const  [token,setToken]=useState("")
 const router=useRouter()
  useEffect(() => {
    setIsClient(true);
  }, []);
  const sendPhone = () => {
    if (checkPass) {
      axios
        .post("http://drmakaremi.v1r.ir/api/check-pass", {
          phone_number: phone,
          password: pass,
        })
        .then((res: any) => {
          // setToken(res.data.data.token);
          localStorage.setItem("myTest", res.data.data.token);
          
          router.push("/user/reservation/register")
        }).catch((error)=>console.log(error))
    } else {
      if (phone.length == 11 && phone[0] == "0") {
        axios
          .post("http://drmakaremi.v1r.ir/api/login", {
            phone_number: phone,
          })
          .then((res: any) => {
            setOpenModal(true);
            setTimeout(() => {
              setOpenModal(false);
            }, 3000);
            setCheckPass(true);

            console.log(res);
          })
          .catch((error: any) => console.log(error));
      } else {
        toast.error("شماره خود را به درستی وارد نمایید");
      }
    }
  };
  const handleResendCode = () => {};

  return (
    <div className=" font-iranSans">
      <Navbar />
      <TextNobat mb="mb-[5.5%]" />
      <CustomInput
        label={checkPass ? "رمز عبور موقت" : "شماره تلفن همراه"}
        placeholder={checkPass ? "مثال: ۱۲۳۴" : "مثال : ۰۹۱۱۲۳۴۵۶۷۸"}
        style="mx-auto w-[51.5%] "
        onChange={
          checkPass
            ? (e: any) => setPass(e.target.value)
            : (e: any) => setPhone(e.target.value)
        }
        type="number"
        value={checkPass ? pass : phone}
      />
      <div className="flex justify-between text-[#45CBC2] mx-[24.4%]">
        {checkPass ? (
          <>
            <p onClick={handleResendCode}>ارسال مجدد رمز</p>
            <p
              className="hover:text-green-500 cursor-pointer"
              onClick={() => setCheckPass(false)}
            >
              تصحیح شماره تلفن
            </p>
          </>
        ) : (
          <div className="my-[1.64%]"></div>
        )}
      </div>
      <CustomButton
        onClick={sendPhone}
        text="تایید"
        style="text-[#288E87] hover:bg-[#303136] bg-white"
      />
      <Toaster />
      {/* <div className="flex justify-center">
        <div>{openModal ? <Modal /> : null}</div>
      </div> */}
      <Slide direction="up" in={openModal}>
        {icon}
      </Slide>
      {isClient && <Toaster />}
    </div>
  );
}

export default userPanel;
