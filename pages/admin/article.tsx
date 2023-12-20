import React from "react";
import Layout from "./Layout";

function article() {
  return (
    <Layout>
      <div className="mr-[8%] mt-[3%] ">
        <div className="flex items-center mb-[5%] rounded-[6.422px]">
          <p className="text-[16px] text-[#45CBC2]">تغییر اطلاعات</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mx-[3%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#064247"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <p className=" text-[20px] text-[#757575]">بلاگ و مقالات</p>
        </div>
        <div className="flex">
          <div className="flex flex-col ">
            <div className="w-[347px] h-[461px] bg-[#EDEDEE] flex items-center justify-center rounded-[6.422px] mr-[4%] shadow-xl mb-[10%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
              >
                <path
                  d="M27 40.5H54"
                  stroke="#757575"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.5 54V27"
                  stroke="#757575"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.375 74.25H50.625C67.5 74.25 74.25 67.5 74.25 50.625V30.375C74.25 13.5 67.5 6.75 50.625 6.75H30.375C13.5 6.75 6.75 13.5 6.75 30.375V50.625C6.75 67.5 13.5 74.25 30.375 74.25Z"
                  stroke="#757575"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-[347px] h-[461px] bg-white rounded-[6.422px] shadow-xl">
              <img
                src="/images/Adminchanel/eyesight.png"
                className="w-[313px] h-[313px] rounded-[6.422px]"
              />
            </div>
          </div>
          <div className="flex flex-col mr-[5%]">
            <div className="w-[347px] h-[461px] bg-white rounded-[6.422px] shadow-xl mb-[10%]">
              <img
                src="/images/Adminchanel/Maneye.png"
                className="w-[313px] h-[313px] rounded-[6.422px]"
              />
            </div>
            <div className="w-[347px] h-[461px] bg-white rounded-[6.422px] shadow-xl">
              <img
                src="/images/Adminchanel/Half face.png"
                className="w-[313px] h-[313px] rounded-[6.422px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default article;
