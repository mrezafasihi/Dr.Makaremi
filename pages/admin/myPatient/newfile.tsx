import React from "react";
import Layout from "../Layout";
import CustomInput from "@/components/user/test";

function newfile() {
  return (
    <Layout>
      <div className="flex flex-col mr-[10%]">
        <div className="flex items-center">
          <p className="text-[#45CBC2] max-w-[71px] h-[24px] text-[16px] ">
            بیماران من
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mr-[2%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#288E87"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p className="text-[20px] font-[700] text-[#757575] mr-[2%]">
            تشکیل پرونده جدید
          </p>
        </div>
        <p className="text-[12px] font-light  font-IRANSansXFaNum text-[#757575] mt-[2%]">
          شماره پرونده به صورت خودکار تعیین می‌شود.
        </p>
        <p className="text-[12px] font-medium  text-[#757575] mt-[1%]">
          شماره پرونده 1256
        </p>
        <div className="flex flex-col ">
          <div className="flex justify-between ml-[14%] mt-[3%]">
            <CustomInput
              label="نام"
              placeholder="مثال:کوروش "
              style="text-[12px] w-[393px] h-[56px]"
            />
            <CustomInput
              label="نام خانوادگی"
              placeholder="مثال : هخامنشی"
              style="text-[12px] w-[393px] "
            />
          </div>
          <div className="flex justify-between ml-[14%] mt-[3%]">
            <CustomInput
              label="کد ملی"
              placeholder="مثال : 0123456789"
              style="text-[12px] w-[393px]"
            />
            <p className="text-[#757575] text-[14px]">تاریخ تولد</p>
            <input type="text" />
          </div>
          <div className="flex justify-between ml-[30%] mt-[3%] ">
            <CustomInput
              label="شماره تلفن"
              placeholder="مثال : 09351112114"
              style="text-[12px] text-[#CBCBCB] w-[393px]"
            />
            <p className="text-[14px] font-[500] font-IRANSansXFaNum text-[#757575]">
              جنسیت :
            </p>
            
            <div className="flex items-center mb-4">
              <input
                id="man"
                type="radio"
                value="man"
                name="gender"
                className="w-4 "
              />
              <label
                htmlFor="man"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                آقا
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="woman"
                type="radio"
                value="woman"
                name="gender"
                className="w-4 "
           
              />
              <label
                htmlFor="woman"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                خانم
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[10%]">
        <button className="w-[200px] h-[53.226px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%]">
          تشکیل پرونده
        </button>
      </div>
    </Layout>
  );
}

export default newfile;
