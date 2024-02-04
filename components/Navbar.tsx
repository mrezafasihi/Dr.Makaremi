import React, { useEffect, useRef, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";
import apiRequests from "@/Axios/config";
import { Hidden } from "@mui/material";

function Navbar({ ref }: any) {
  const [token,setToken]=useState<any>()

useEffect(()=>{getData(), setToken(localStorage.getItem("token"))
},[])

  const getData=()=>{
    const token=localStorage.getItem("token")
    if (token) {
      apiRequests.get(`/api/user-document`, { headers: { Authorization: `Bearer ${token}` } }).then((res)=>console.log(res))

    }
   

  }
  
  return (
    <nav className="  flex  justify-between  font-iranSans items-center  py-5  fixed z-10 backdrop-blur-sm  backdrop-filter shadow-2xl bg-black bg-opacity-25  w-full">
      <div className="  flex flex-col justify-center mr-[7.56%]">
        <img
          src="/images/logoo.png"
          className=" w-[66.687px] h-[48px]  flex justify-center text-white"
        />
        <div className=" z-10  relative   flex flex-col  items-center  justify-center ">
          <p className="text-white  z-[20] font-iranSansBold text-[10px]">
            چشم پزشکی
          </p>
          <span className="text-[#45CBC2] flex justify-center  mt-[-5%] font-iranSansBold">
            مکارمی
          </span>
        </div>
      </div>

      <ul className="hidden lg:font-medium	 lg:flex lg:justify-center text-white  lg:gap-[1%] basis-[57%]">
        <a href="#home"
         
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          خانه
        </a>
        <a href="#satisfication"
          
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          رضایت مراجعان
        </a>
        <a href="#insurance"
         
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          بیمه های طرف قرارداد
        </a>
        <a href="#contactUs"
          
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          تماس با ما
        </a>
        <a
          
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          بلاگ
        </a>
        <Link
          
          href="/login"
          className={`hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center  ${token?"hidden":"flex"}`}
        >
          ورود / عضویت
        </Link>
      </ul>
      {token?"salam": <div className="flex  items-center ml-[2%] lg:ml-[7.56%] ">
        <Link
          href="./login"
          className="flex bg-[#45CBC2] w-[149px] h-[44px]  justify-center items-center text-white rounded-lg hover:bg-[#D6F3F1] hover:text-[#064247] group"
        >
          <div className="rounded-full bg-white hover:bg-[#45CBC2]  flex items-center group-hover:bg-[#45CBC2]">
            <svg
              className="z-10"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:stroke-[#45CBC2]"
                d="M12.5 22.25C6.84614 22.25 2.25 17.6539 2.25 12C2.25 6.34614 6.84614 1.75 12.5 1.75C18.1539 1.75 22.75 6.34614 22.75 12C22.75 17.6539 18.1539 22.25 12.5 22.25ZM12.5 2.25C7.12386 2.25 2.75 6.62386 2.75 12C2.75 17.3761 7.12386 21.75 12.5 21.75C17.8761 21.75 22.25 17.3761 22.25 12C22.25 6.62386 17.8761 2.25 12.5 2.25Z"
                stroke="white"
              />
              <path
                className=""
                d="M16.5 12.25H8.5C8.36614 12.25 8.25 12.1339 8.25 12C8.25 11.8661 8.36614 11.75 8.5 11.75H16.5C16.6339 11.75 16.75 11.8661 16.75 12C16.75 12.1339 16.6339 12.25 16.5 12.25Z"
                stroke="#064247"
              />
              <path
                d="M12.5 16.25C12.3661 16.25 12.25 16.1339 12.25 16V8C12.25 7.86614 12.3661 7.75 12.5 7.75C12.6339 7.75 12.75 7.86614 12.75 8V16C12.75 16.1339 12.6339 16.25 12.5 16.25Z"
                stroke="#064247"
              />
            </svg>
          </div>
          <span className="flex mr-[8px] font-iranSansLight">
            درخواست نوبت{" "}
          </span>
        </Link>
        <div className="lg:hidden">
          <IoMenu style={{ fontSize: "2rem" }} />
        </div>
      </div>}
     
    </nav>
  );
}

export default Navbar;
