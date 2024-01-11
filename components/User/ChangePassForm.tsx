import React, { useState } from "react";
import CustomButton from "./CustomButton";
import apiRequests from "@/Axios/config";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Modal from "./Modal";
import { Slide } from "@mui/material";

function ChangePassForm() {
  const [password, setPassword] = useState<any>();
  const [showPass, setShowPass] = useState<any>(false);
  const [newpPass, setNewPass] = useState<any>();
  const [openModal, setOpenModal] = useState(false);
  const [confirmNewPass, setConfirmNewPass] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const router = useRouter();
  const icon = (
    <div className="flex items-center justify-center my-[-220px] z-10">
      <Modal text="رمز عبور شما با موفقیت تغییر کرد." />
    </div>
  );
  const confirm = () => {
    if (newpPass == confirmNewPass) {
      const phonee = localStorage.getItem("phone");
      const token = localStorage.getItem("token");
      apiRequests
        .post(
          `/api/new-password`,
          {
            phone_number: phonee,
            new_password: newpPass,
            old_password: password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res), setOpenModal(true);
          setTimeout(() => {
            setOpenModal(false);
            router.push("/user/reservation");
          }, 3000);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("رمز ها یکسان نیستن");
    }
  };
  return (
    <div className="flex flex-col items-center mt-[7%]">
      <div className="flex flex-col items-start mb-[1%]">
        <label htmlFor="" className="mb-[3%]">
          رمز عبور فعلی <span className="text-[#C70000]">*</span>
        </label>
        <div className=" flex items-center border w-[393px] h-[56px] rounded-[4.725px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[3%]"
          >
            <path
              d="M13.1938 9.95289C11.8204 11.3196 9.85376 11.7396 8.12709 11.1996L4.98709 14.3329C4.76042 14.5662 4.31376 14.7062 3.99376 14.6596L2.54042 14.4596C2.06042 14.3929 1.61376 13.9396 1.54042 13.4596L1.34042 12.0062C1.29376 11.6862 1.44709 11.2396 1.66709 11.0129L4.80042 7.87956C4.26709 6.14622 4.68042 4.17956 6.05376 2.81289C8.02042 0.846224 11.2138 0.846224 13.1871 2.81289C15.1604 4.77956 15.1604 7.98622 13.1938 9.95289Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.59326 11.6602L6.12659 13.1935"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.6665 7.33301C10.2188 7.33301 10.6665 6.88529 10.6665 6.33301C10.6665 5.78072 10.2188 5.33301 9.6665 5.33301C9.11422 5.33301 8.6665 5.78072 8.6665 6.33301C8.6665 6.88529 9.11422 7.33301 9.6665 7.33301Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type={showPass ? "text" : "password"}
            className=" border-[#CBCBCB] rounded-[4.725px] w-full h-full"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[3%]"
            onClick={() => setShowPass(!showPass)}
          >
            <path
              d="M10.3861 7.99995C10.3861 9.31995 9.31946 10.3866 7.99946 10.3866C6.67946 10.3866 5.61279 9.31995 5.61279 7.99995C5.61279 6.67995 6.67946 5.61328 7.99946 5.61328C9.31946 5.61328 10.3861 6.67995 10.3861 7.99995Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.9999 13.5128C10.3532 13.5128 12.5466 12.1262 14.0732 9.72616C14.6732 8.78616 14.6732 7.20616 14.0732 6.26616C12.5466 3.86616 10.3532 2.47949 7.9999 2.47949C5.64656 2.47949 3.45323 3.86616 1.92656 6.26616C1.32656 7.20616 1.32656 8.78616 1.92656 9.72616C3.45323 12.1262 5.64656 13.5128 7.9999 13.5128Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-start mb-[1%]">
        <label htmlFor="" className="mb-[3%]">
          رمز عبور جدید <span className="text-[#C70000]">*</span>
        </label>
        <div className=" flex items-center border w-[393px] h-[56px] rounded-[4.725px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[3%]"
          >
            <path
              d="M13.1938 9.95289C11.8204 11.3196 9.85376 11.7396 8.12709 11.1996L4.98709 14.3329C4.76042 14.5662 4.31376 14.7062 3.99376 14.6596L2.54042 14.4596C2.06042 14.3929 1.61376 13.9396 1.54042 13.4596L1.34042 12.0062C1.29376 11.6862 1.44709 11.2396 1.66709 11.0129L4.80042 7.87956C4.26709 6.14622 4.68042 4.17956 6.05376 2.81289C8.02042 0.846224 11.2138 0.846224 13.1871 2.81289C15.1604 4.77956 15.1604 7.98622 13.1938 9.95289Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.59326 11.6602L6.12659 13.1935"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.6665 7.33301C10.2188 7.33301 10.6665 6.88529 10.6665 6.33301C10.6665 5.78072 10.2188 5.33301 9.6665 5.33301C9.11422 5.33301 8.6665 5.78072 8.6665 6.33301C8.6665 6.88529 9.11422 7.33301 9.6665 7.33301Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className=" border-[#CBCBCB] rounded-[4.725px] w-full h-full"
            onChange={(e) => setNewPass(e.target.value)}
          />

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[3%]"
          >
            <path
              d="M10.3861 7.99995C10.3861 9.31995 9.31946 10.3866 7.99946 10.3866C6.67946 10.3866 5.61279 9.31995 5.61279 7.99995C5.61279 6.67995 6.67946 5.61328 7.99946 5.61328C9.31946 5.61328 10.3861 6.67995 10.3861 7.99995Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.9999 13.5128C10.3532 13.5128 12.5466 12.1262 14.0732 9.72616C14.6732 8.78616 14.6732 7.20616 14.0732 6.26616C12.5466 3.86616 10.3532 2.47949 7.9999 2.47949C5.64656 2.47949 3.45323 3.86616 1.92656 6.26616C1.32656 7.20616 1.32656 8.78616 1.92656 9.72616C3.45323 12.1262 5.64656 13.5128 7.9999 13.5128Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-start mb-[1%]">
        <label htmlFor="" className="mb-[3%]">
          تکرار رمز عبور جدید <span className="text-[#C70000]">*</span>
        </label>
        <div className=" flex items-center border w-[393px] h-[56px] rounded-[4.725px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[3%]"
          >
            <path
              d="M13.1938 9.95289C11.8204 11.3196 9.85376 11.7396 8.12709 11.1996L4.98709 14.3329C4.76042 14.5662 4.31376 14.7062 3.99376 14.6596L2.54042 14.4596C2.06042 14.3929 1.61376 13.9396 1.54042 13.4596L1.34042 12.0062C1.29376 11.6862 1.44709 11.2396 1.66709 11.0129L4.80042 7.87956C4.26709 6.14622 4.68042 4.17956 6.05376 2.81289C8.02042 0.846224 11.2138 0.846224 13.1871 2.81289C15.1604 4.77956 15.1604 7.98622 13.1938 9.95289Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.59326 11.6602L6.12659 13.1935"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.6665 7.33301C10.2188 7.33301 10.6665 6.88529 10.6665 6.33301C10.6665 5.78072 10.2188 5.33301 9.6665 5.33301C9.11422 5.33301 8.6665 5.78072 8.6665 6.33301C8.6665 6.88529 9.11422 7.33301 9.6665 7.33301Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className=" border-[#CBCBCB] rounded-[4.725px] w-full h-full"
            onChange={(e) => setConfirmNewPass(e.target.value)}
          />

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[3%]"
          >
            <path
              d="M10.3861 7.99995C10.3861 9.31995 9.31946 10.3866 7.99946 10.3866C6.67946 10.3866 5.61279 9.31995 5.61279 7.99995C5.61279 6.67995 6.67946 5.61328 7.99946 5.61328C9.31946 5.61328 10.3861 6.67995 10.3861 7.99995Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.9999 13.5128C10.3532 13.5128 12.5466 12.1262 14.0732 9.72616C14.6732 8.78616 14.6732 7.20616 14.0732 6.26616C12.5466 3.86616 10.3532 2.47949 7.9999 2.47949C5.64656 2.47949 3.45323 3.86616 1.92656 6.26616C1.32656 7.20616 1.32656 8.78616 1.92656 9.72616C3.45323 12.1262 5.64656 13.5128 7.9999 13.5128Z"
              stroke="#288E87"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <CustomButton text="تایید" onClick={confirm} />
      <Toaster />
      <Slide direction="up" in={openModal}>
        {icon}
      </Slide>
    </div>
  );
}

export default ChangePassForm;
