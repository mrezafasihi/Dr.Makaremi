import React from "react";
import Layout from "../Layout";
import CustomButton from "@/components/user/CustomButton";
import CommonQestion from "@/components/admin/CommonQestion";

function commonQ() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex  items-center mr-[6.9%] mb-[8%] mt-[2%]">
          <p className="text-[#45CBC2] font-bold  ">تغییر اطلاعات</p>
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
          <p className="text-[#757575] font-bold text-[20px]">سوالات متداول</p>
        </div>
        <div className="text-[#064247] mb-[8%] ">
          <div className="flex flex-col mb-6">
            <label className="text-[12px] font-medium mr-[1%] mb-[1%]">متن سوال</label>
            <input
              className="border border-[#CBCBCB] rounded-[4.73px] placeholder:px-[2%] placeholder:py-[2%] placeholder:text-[12px] placeholder:font-semibold h-[63px] max-w-[824px]"
              type="text"
              placeholder="متن سوال متداول را اینجا وارد کنید."
            />
          </div>
          <div className="flex flex-col mb-[3%]">
            <label className="text-[12px] font-medium mr-[1%] mb-[1%] ">پاسخ سوال متداول</label>
            <input
              className="border border-[#CBCBCB] rounded-[4.73px] placeholder:px-[2%] placeholder:py-[2%] placeholder:text-[12px] placeholder:font-semibold h-[63px] max-w-[824px]"
              type="text"
              placeholder="پاسخ سوال متداول را اینجا وارد کنید."
            />
          </div>
          <CustomButton
            text="ثبت"
            style="bg-[#288E87] text-white "
            styleContainer="flex justify-between mx-[30%] "
          />
        </div>
        <CommonQestion />
      </div>
    </Layout>
  );
}

export default commonQ;
