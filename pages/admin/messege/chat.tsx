import React from "react";
import Layout from "../Layout";

function chat() {
  return (
    <Layout>
      <div>
        <p className="text-[#45CBC2] text-[16px] mr-[4%] mt-[2%]">پیام‌ها</p>
        <div className="flex items-center mt-[4%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
          >
            <path
              d="M24.05 10.3838L34.1667 20.5005L24.05 30.6171"
              stroke="#45CBC2"
              strokeWidth="3"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83333 20.5H33.8833"
              stroke="#45CBC2"
              strokeWidth="3"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <img
            src="/images/landin/Beautiful.png"
            className="w-[54px] h-[57px] rounded-full mx-[2%]"
          />
          <div className="flex flex-col">
            <p className="text-[16px] text-[#288E87]">فائزه ملکی</p>
            <p className="text-[16px] text-[#757575]">شماره پرونده : 2106</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default chat;
