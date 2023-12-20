import React from "react";
import Layout from "../Layout";

import CustomInput from "@/components/user/test";
import CustomButton from "@/components/user/CustomButton";
import Paymenticon from "@/components/Paymenticon";

function payment() {
  return (
    <Layout>
      <div>
        <div className="flex  items-center mr-[6.9%] mb-[8%] mt-[2%]">
          <p className="text-[#45CBC2] font-bold  ">نوبت‌دهی</p>
          <svg
            className="mx-[23px]"
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L2 6.5L8 12"
              stroke="#288E87"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-[#757575] font-bold text-[20px]">ستایش الوندی</p>
        </div>
        <Paymenticon/>
        <div className="mt-[7%]">
          <p className="mr-[13%] mb-[7%]">
            اطلاعات ثبت نوبت برای سرکار خانم{" "}
            <span className="text-[#064247] font-bold">ستایش الوندی</span>
          </p>
          <div className="flex justify-between text-[#757575] mx-[12.5%] ">
            <div className="flex flex-col items-center">
              <p className="font-bold">دکتر</p>
              <hr className="w-[135px]" />
              <p>علی مکارمی</p>
            </div>
            <div className="flex flex-col items-center">
              <p>روز</p>
              <hr className="w-[135px]" />
              <p>1402/07/30</p>
            </div>
            <div className="flex flex-col items-center">
              <p>ساعت</p>
              <hr className="w-[135px]" />
              <p>08:00</p>
            </div>
            <div className="flex flex-col items-center">
              <p>مبلغ پیش‌ پرداخت</p>
              <hr className="w-[135px]" />
              <p>300 هزار تومان</p>
            </div>
          </div>
          <div className="mx-[12.5%] mt-[6%]">
            <input
              className="border rounded-[4px] h-[56px] w-[350px] sm:w-[400px] md:w-[500px] lg:w-[788px] placeholder:pr-4 placeholder:py-4 placeholder:text-[#151618] mx-auto"
              type="text"
              placeholder="کد پیگیری"
            />
            <p className="text-[#525252] mt-[1%] mb-[2%]">کد پیگیری رسید پرداخت را وارد کنید.</p>
            <CustomButton text="تایید و رزرو نهایی"  style="bg-[#288E87] text-white"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default payment;
