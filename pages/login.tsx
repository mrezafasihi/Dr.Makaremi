//@ts-ignore
import CustomButton from "@/components/user/CustomButton";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Navbar from "@/components/user/Navbar";
import TextNobat from "@/components/user/TextNobat";
import CustomInput from "@/components/user/test";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Login } from "@/components/helper/HelperQuery";
import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// export const useLogin = () =>
//   useQuery({
//     queryKey: ["login"],
//     queryFn: () => {
//       return axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((res: any) => res.data);
//     },
//   });

// export const useLogin = () =>{
//  const {mutate}= useMutation({
//     mutationFn: (data) => {
//       return axios.post("https://jsonplaceholder.typicode.com/posts", data);
//     },

//   });
// return mutate
// }

// export const useLogin=()=>{return useMutation({mutationFn:(test)=>apiRequests.post(("/api/login"),test).then((res)=>{res.data,console.log(res)})})}
function login() {
  const schema = yup.object().shape({
    user: yup.string().required(),
    pass: yup.string().required().min(4),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // const login=useQuery({queryKey:["test"],queryFn:()=>{return  axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=> res)}})
  // const logi  = useLogin();
  const router = useRouter();

  const confirm = (data: any) => {
    console.log(data.user);
    if (data.user.length == 11 && data.user[0] == 0) {
      apiRequests
        .post("/api/login", {
          phone_number: data.user,
          password: data.pass,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.data.token),
            localStorage.setItem("phone", data.user);
            
          if (res.data.data.role[0] == "doctor") {
            console.log(res)
            // localStorage.setItem("document",res.data.data)
            router.push("/admin/myPatient");
          } else {
            {
              console.log(res)
              res.data.data.document.length!==0
                ? router.push("/user/reservation")
                : router.push("/user/reservation/register");
            }
            // apiRequests
            //   .get(`/api/document/:${res.data.data.user.id}`, {
            //     headers: { Authorization: `Bearer ${res.data.data.token}` },
            //   })
            //   .then((res) => console.log(res))
            //   .catch((err) => {
            //     err.response.data.message == "Document not found."
            //       ? router.push("/user/reservation/register")
            //       : toast.error(err.response.data.message);
            //   });
          }
        })
        .catch((err) => {
          err.response.data.message == "Incorrect inputs."
            ? toast.error("رمز اشتباه میباشد")
            : err.response.data.message ==
              "The selected phone number is invalid."
            ? toast.error("ثبت نام نکردید")
            : toast.error(err.response.data.message);
        });
    } else {
      toast.error("شماره خود را صحیح وارد نمایید");
    }

    // logi.mutate(data)
  };

  return (
    <div>
      <Navbar />
      <TextNobat mb="mb-[5.5%]" />
      <CustomInput
        hookForm={register("user")}
        style=" max-w-[740px] mx-auto mb-[2%]"
        inputStyle={
          errors.user
            ? "border-[1.5px] border-[#C70000] focus:border-[#C70000] placeholder-shown:border-[#C70000] placeholder-shown:border-[#C70000] border-t-transparent"
            : null
        }
        labelStyle={
          errors.user
            ? `before:border-[#C70000] peer-focus:before:![#C70000] after:border-[#C70000] peer-focus:after:![#C70000]`
            : null
        }
        placeholder="مثال : 09112345678"
        label="شماره تلفن همراه"
        type="number"
      />
      {errors.user && (
        <p className="flex justify-center items-center text-[#C70000]">
          {errors.user?.message}
        </p>
      )}
      <CustomInput
        hookForm={register("pass")}
        type="password"
        style="max-w-[740px] mx-auto mb-[1%]"
        placeholder="رمز عبور خود را وارد کنید."
        label="رمز عبور "
      />

      <div className="font-iranSansLight flex justify-between  mx-[2%] [@media(min-width:750px)]:mx-[5%] [@media(min-width:830px)]:mx-[10%] [@media(min-width:910px)]:mx-[13%] [@media(min-width:980px)]:mx-[24.4%] ">
        <p className="text-[#0D0630]">
          حساب کاربری ندارید؟
          <Link href={"/user/register"} className="text-[#288E87] mr-1">
            ثبت‌نام کنید.
          </Link>
        </p>
        <Link href={"/user"} className="text-[#288E87]">
          فراموشی رمز عبور
        </Link>
      </div>
      <CustomButton
        text="ورود"
        onClick={handleSubmit(confirm)}
        style="text-[#288E87]"
      />
      <Toaster />
    </div>
  );
}

export default login;
