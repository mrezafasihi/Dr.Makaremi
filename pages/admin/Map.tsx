import React from "react";
import Layout from "./Layout";

function Map() {
  return (
    <Layout>
      <div className="flex items-center font-IRANSansXFaNum mr-[8%] mt-[4%]">
        <p className="text-[16px] text-[#45CBC2] font-bold ml-[3%] ">
          تغییر اطلاعات
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          className="ml-[3%]"
        >
          <path
            d="M8 1.5L2 7L8 12.5"
            stroke="#064247"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <p className="font-bold text-[20px] text-[#757575]">آدرس و تلفن</p>
      </div>
      <div className="flex mt-[11%] mr-[8%]">
        <div className="flex flex-col">
          <p className="text-[14px] text-[#064247] mb-[2%]">آدرس مطب</p>

          <p className="rounded-[6.422px] border-[1px] border-[#CBCBCB] w-[470px] h-[145px] text-[16px] text-center pt-[3%]">
            مـازندران، بـابــل، میــدان کشـوری، سـاختمــان پـزشـکـان مهـــر،
            طبقــه ســوم
          </p>
          <div className="flex items-center justify-between mt-[5%] mb-[2%]">
            <p className="text-[14px] text-[#064247]">شماره تلفن</p>
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M11.0908 6.8251H6.8251V11.0908C6.8251 11.56 6.44119 11.9439 5.97196 11.9439C5.50274 11.9439 5.11883 11.56 5.11883 11.0908V6.8251H0.853138C0.383912 6.8251 0 6.44119 0 5.97196C0 5.50274 0.383912 5.11883 0.853138 5.11883H5.11883V0.853138C5.11883 0.383912 5.50274 0 5.97196 0C6.44119 0 6.8251 0.383912 6.8251 0.853138V5.11883H11.0908C11.56 5.11883 11.9439 5.50274 11.9439 5.97196C11.9439 6.44119 11.56 6.8251 11.0908 6.8251Z"
                  fill="#45CBC2"
                />
              </svg>
              <p className=" text-[12px] text-[#45CBC2] ">شماره جدید</p>
            </div>
          </div>
          <div className="rounded-[6.422px] border-[#CBCBCB] border-[1px] h-[62px] flex items-center pr-[4%]">
            011 322 88 888
          </div>
          <p className="text-[14px] mt-[5%] mb-[2%] ">آدرس صفحه اینستاگرام</p>
          <div className="rounded-[6.422px] text-[16px] h-[62px] border-[#CBCBCB] border-[1px] pr-[4%] flex items-center">
            https://instagram.com/drmakaremi
          </div>
          <p className="text-[14px] mt-[5%] mb-[2%] ">آدرس کانال تلگرام</p>
          <div className="rounded-[6.422px] text-[16px] h-[62px] border-[#CBCBCB] border-[1px] pr-[4%] flex items-center">
            t.me/drmakaremi
          </div>
        </div>
        <div className="flex flex-col mt-[.5%] mr-[4%]">
          <p className="text-[14px] text-[#064247] mb-[2%]">
            آدرس مطب روی نقشه
          </p>
          <div className="w-[361px] h-[54px] border-[#CBCBCB] border-[1px] text-[#CBCBCB] text-[14px] flex items-center rounded-[6.422px] ">
            <div className="px-[2%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <circle
                  cx="10.2267"
                  cy="9.7659"
                  r="8.98856"
                  stroke="#757575"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4784 16.4844L20.0024 19.9992"
                  stroke="#757575"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            جست و جوی آدرس در نقشه
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23365.09226922734!2d51.45558337770268!3d35.68559885651431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03f59b014ca5%3A0x76a618025877a10f!2z2YHZhNqp2Ycg2K_ZiNmFINmG24zYsdmI2YfZiNin24zbjA!5e0!3m2!1sen!2s!4v1702980027996!5m2!1sen!2s"
            width="600"
            height="450"
            
            loading="lazy"
           className="w-[361.46px] h-[291px] mt-[6%]"
          ></iframe>
          <p className="text-[14px] text-[#064247] mt-[5%] mb-[2%] ">ایمیل</p>
          <div className="rounded-[6.422px] border-[#CBCBCB] border-[1px] h-[62px] flex items-center pr-[4%]">
            drmakaremi@gmail.com
          </div>
        </div>
      </div>
      <button className="w-[197px] h-[48px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%] mx-auto">
        ویرایش
      </button>
    </Layout>
  );
}

export default Map;
