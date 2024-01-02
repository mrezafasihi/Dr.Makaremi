import React from "react";
import Layout from "../Layout";

function Biografi() {
  return (
    <Layout>
      <div className="mt-[3%] mr-[5%]">
        <div className="flex items-center">
          <p className="text-[#45CBC2] text-[16px]">تغییر اطلاعات</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mx-[2%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#064247"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-[20px] text-[#757575]">بیوگرافی</p>
        </div>
        <div className="w-[900px] h-[657px] flex  border-[1px] border-gray-300 mt-[15%] flex-col ">
          <p className="text-[#45CBC2] mt-[2%] mr-[4%]">تجارب و تحصیلات</p>
          <div className="flex mt-[3%] mr-[4%]">
            <li />
            <p className="text-[16px] text-[#023047] ">
              گذراندن دوره پیشرفته جراحی شبکیه در کشور آلمان زیرنظر پروفسور
              ایکارت
            </p>
          </div>
          <div className="flex mt-[3%] mr-[4%]">
            <li />
            <p className="text-[16px] text-[#023047] ">
              دوره تکمیلی تومورها و سرطان ‌های چشم در دانشگاه علوم‌پزشکی ایران
            </p>
          </div>
          <div className="flex mt-[3%] mr-[4%]">
            <li />
            <p className="text-[16px] text-[#023047] ">
              شرکت در کنگره‌های داخلی و خارجی در کشورهای مختلف
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-[197px] h-[48px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%] ">
            ویرایش
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Biografi;
