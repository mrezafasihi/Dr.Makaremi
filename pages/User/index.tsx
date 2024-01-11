import CustomButton from "@/components/user/CustomButton";

import Modal from "@/components/user/Modal";
import Navbar from "@/components/user/Navbar";
import TextNobat from "@/components/user/TextNobat";
import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import apiRequests from "@/Axios/config";
import { useQuery } from "@tanstack/react-query";
import Countdown from "react-countdown";
import CustomInput from "@/components/user/test";

const icon = (
  <div className="flex items-center justify-center my-[-220px] z-10">
    <Modal text="رمز عبور موقت برای شما پیامک شد" />
  </div>
);

function userPanel() {
  const [phone, setPhone] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [pass, setPass] = useState("");

  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendPhone = () => {
    if (checkPass) {
      apiRequests
        .post("/api/check_reset_pass", {
          phone_number: phone,
          code: pass,
        })
        .then((res: any) => {
          
          localStorage.setItem("phone", phone);
          console.log(res);
          router.push("/user/setPass");
        })
        .catch((error) => {
          console.log(error), toast.error("کد خود را به درستی وارد نمایید");
        });
    } else {
      // const res=apiRequests.post("/api/login",{data:{phone_number:phone}})
      if (phone.length == 11 && phone[0] == "0") {
        apiRequests
          .post("/api/forget-password", {
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
          .catch((error: any) => {
            console.log(error),
              error.response.data.message == "Phone number not found."
                ? toast.error("شماره ی یافت نشد!")
                : toast.error(error.response.data.message);
          });
      } else {
        toast.error("شماره خود را به درستی وارد نمایید");
      }
    }
  };
  const handleResendCode = () => {};
  const handleCountDown = ({ minutes, seconds, completed }: any) => {
    if (completed) {
      return <span>ارسال مجدد رمز </span>;
    } else {
      return (
        <span>
          ارسال مجدد رمز تا: {minutes}:{seconds}
        </span>
      );
    }
  };
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
            <span>
              {" "}
              <Countdown
                date={Date.now() + 180000}
                renderer={handleCountDown}
              />
            </span>
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

      <Slide direction="up" in={openModal}>
        {icon}
      </Slide>
      {isClient && <Toaster />}
    </div>
  );
}

export default userPanel;
