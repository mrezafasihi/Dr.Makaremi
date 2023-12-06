import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <nav className=" container flex  justify-between text-center font-iranSans items-center  py-10  sticky  ">
      <div className=" lg:w-[10%] mx-[7.5%]">
        <img src="/images/logoo.png" className=" w-[66.687px] h-[48px] z-[1]" />
        <div className="bg-black z-10 absolute top-[65%]">
        <p className="text-white my-[-10px] z-10 ">چشم پزشکی</p>
        <span className="text-[#45CBC2]">مکارمی</span>
        </div>
      </div>
      <ul className="hidden lg:font-medium	 lg:flex lg:justify-center text-white w-[60%] lg:gap-[6%]">
        <li>خانه</li>
        <li>رضایت مراجعان</li>
        <li>بیمه های طرف قرارداد</li>
        <li>تماس با ما</li>
        <li>بلاگ</li>
        <li>ورود / عضویت</li>
      </ul>
      <div className="flex justify-end items-center w-[90%] lg:w-[20%]">
        <button className="flex bg-[#45CBC2] w-[149px] h-[44px]  justify-center items-center text-white rounded-lg">
          <div className=" rounded-full bg-black text-white w-6 h-6">
            <BsPlusCircleFill
              style={{ width: "1.501rem", height: "1.501rem" }}
            />
          </div>
          <span className="flex mx-[8px]">درخواست نوبت </span>
        </button>
        <div className="lg:hidden">
          <IoMenu style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
