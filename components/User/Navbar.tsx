import React from "react";
import Logo from "../Logo";
import { BsPlusCircleFill } from "react-icons/bs";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between mx-[4.86%] items-center mt-[32px] ">
      <Logo />
      <ul className="flex justify-between [@media(max-width:640px)]:flex-grow  [@media(max-width:850px)]:basis-[40%] [@media(max-width:1100px)]:basis-[30%] basis-[23.76%] font-iranSansMedium mr-[8%] ">
        <Link className="cursor-pointer" href={"/"}>خانه</Link>
        <li className="cursor-pointer">تماس با ما</li>
        <li className="text-[#288E87] font-iranSansMedium cursor-pointer">ورود / عضویت</li>
      </ul>
      <button className=" hidden sm:flex bg-[#bdbdbd] w-[149px] h-[44px]  justify-center items-center text-white rounded-lg">
        <div className=" rounded-full bg-[#bdbdbd] text-white w-6 h-6">
          <BsPlusCircleFill style={{ width: "1.501rem", height: "1.501rem" }} />
        </div>
        <span className="flex mx-[8px]">درخواست نوبت </span>
      </button>
    </div>
  );
}

export default Navbar;
