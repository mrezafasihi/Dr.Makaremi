import React, { useState } from "react";
import Navbar from "@/components/user/Navbar";
import TextNobat from "@/components/user/TextNobat";
import CustomInput from "@/components/user/test";
import CustomButton from "@/components/user/CustomButton";
import toast, { Toaster } from "react-hot-toast";
import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";
function password() {
  const [pass, setPass] = useState();
  const [rePass, setRePass] = useState();
  if (typeof window !== "undefined") {
  }

  const router = useRouter();
  const handleSetPass = () => {
    if (pass == rePass) {
      const phone = localStorage.getItem("phone");
      apiRequests
        .post("/api/set-password", {
          phone_number: phone,
          password: pass,
        })
        .then((res) => {
          console.log(res), localStorage.setItem("token", res.data.data.token);
          router.push("/user/reservation/register");
        });
    } else {
      toast.error("رمز ها برابر نیست");
    }
  };
  return (
    <div>
      <Navbar />
      <TextNobat mb="mb-[5.5%]" />
      <CustomInput
        placeholder="یک رمز عبور برای خود انتخاب کنید."
        label="رمز عبور "
        style="w-[740px] mx-auto mb-[2%]"
        onChange={(e: any) => setPass(e.target.value)}
      />
      <CustomInput
        placeholder="رمز عبور خود را دوباره وارد کنید."
        label="تکرار رمز عبور "
        style="w-[740px] mx-auto mb-[2%]"
        onChange={(e: any) => setRePass(e.target.value)}
      />
      <CustomButton
        text="تایید"
        style="text-[#288E87]"
        onClick={handleSetPass}
      />
      <Toaster />
    </div>
  );
}

export default password;
