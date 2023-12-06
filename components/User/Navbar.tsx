import React from "react";
import Logo from "../Logo";
import { BsPlusCircleFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex justify-between mx-[5%] items-center mt-[32px] ">
      <Logo />
      <ul className="flex justify-between basis-[22%] font-medium mr-[8%] ">
        <li>خانه</li>
        <li>تماس با ما</li>
        <li className="text-[#288E87]">ورود / عضویت</li>
      </ul>
      <button className="flex bg-[#bdbdbd] w-[149px] h-[44px]  justify-center items-center text-white rounded-lg">
        <div className=" rounded-full bg-[#bdbdbd] text-white w-6 h-6">
          <BsPlusCircleFill style={{ width: "1.501rem", height: "1.501rem" }} />
        </div>
        <span className="flex mx-[8px]">درخواست نوبت </span>
      </button>
    </div>
  );
}

export default Navbar;
