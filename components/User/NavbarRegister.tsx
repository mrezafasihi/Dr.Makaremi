import React, { use, useEffect, useState } from "react";
import Logo from "../Logo";
import { BsPlusCircleFill } from "react-icons/bs";
import Link from "next/link";

function NavbarRegister() {
  const arrayNum: any = [
    { id: 1, name: " کاربر", img: "/images/karbar.png" },
   
  ];
  const [valueSelectOption, setValueSelectOption] = useState(arrayNum[0].img);
  const handleSelect = (value: any) => {
    console.log(value);
    setValueSelectOption(value);

    // const test = arrayNum.find((item: any) => {
    //   return item.id == valueSelectOption;
    // });
    // console.log(test);
    // setImage(test.img);
  };
  //  useEffect(()=>{
  //    setValueSelectOption(valueSelectOption)
  //  },[])

  return (
    <div className="flex justify-between mx-[5%] items-center mt-[32px] ">
      <Logo />
      <ul className="flex justify-between basis-[28.96%] font-medium mr-[8%] ">
        <Link href={"/"}>خانه</Link>
        <li className="text-[#CBCBCB]" >پرونده من</li>
        <Link href={"/user/reservation/register"} className="text-[#288E87]">رزرو نوبت</Link>
        <li className="text-[#CBCBCB]">ارسال پیام</li>
      </ul>
      <div className="flex items-center justify-between basis-[18.25%]">
        <div className="flex ml-[4%]">
          <div className="bg-[#ededee] rounded-full">
            <img
              className="w-[60px] rounded-full"
              src={valueSelectOption}
              alt=""
            />
          </div>
          <select
            className="text-[#064247] mr-1 bg-white border-none w-[88px]"
            onChange={(e) => handleSelect(e.target.value)}
          >
            {arrayNum.map((item: any) => {
              return <option value={item.img}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className="w-[0.04px] h-[50px] bg-black ml-[4%]" />
        <div className="flex items-center  ">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M5.93335 5.54016C6.14002 3.14016 7.37335 2.16016 10.0733 2.16016H10.16C13.14 2.16016 14.3334 3.35349 14.3334 6.33349V10.6802C14.3334 13.6602 13.14 14.8535 10.16 14.8535H10.0733C7.39335 14.8535 6.16002 13.8868 5.94002 11.5268"
              stroke="#C70000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99951 8.5H2.41284"
              stroke="#C70000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.90008 6.26709L1.66675 8.50042L3.90008 10.7338"
              stroke="#C70000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="mr-2 font-iranSansLight">خروج</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarRegister;