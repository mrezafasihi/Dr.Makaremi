import React, { useRef } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
function Header() {
  // const test=window.localStorage.getItem("mytest");

  return (
    <Swiper
      className="h-[screen] lg:h-[700px] -z-10"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      centeredSlides={true}
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide className=" bg-oldMan text-white bg-[length:1440px_700px] bg-no-repeat  ">
        <div className=" mx-[10%]  flex flex-col justify-between ">
          <h1 className=" text-[64px] mt-[15%] font-kalameh mb-[5%]">
            چشم پزشکی <span className="text-[#45CBC2]">دکتر مکارمی</span>
          </h1>
          <p className="text-[20px] flex flex-col mb-[7%]">
            سلامتی چشم‌های خود را در کلینیک دکتر علی مکارمی تضمین کنید.{" "}
            <span>با دستگاه‌های پیشرفته و روز دنیا</span>
          </p>
          <button className="text-[#45CBC2] border  group border-[#45CBC2] hover:bg-[#45CBC2] hover:text-[white] rounded-[10px] flex justify-center items-center px-[10px] py-[20px] mb-[5%] w-[225px] h-[68px]">
            <span className="ml-[4%]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="  group-hover:stroke-white"
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className=" group-hover:stroke-white"
                  d="M12 8V13"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className=" group-hover:stroke-white"
                  d="M11.9941 16H12.0031"
                  stroke="#45CBC2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            دربارۀ دکتر علی مکارمی
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-kidEyeTest text-white bg-[length:1440px_700px] bg-no-repeat">
        <div className="h-[580px] mx-[10%] justify-between">
          <h1 className="font-bold text-[64px] mt-[15%] mb-[5%]">
            عمل <span className="text-[#45CBC2]"> لیزیک</span> و{" "}
            <span className="text-[#45CBC2]">لازک</span>
          </h1>
          <p className="text-[20px] flex flex-col mb-[7%]">
            سلامتی چشم‌های خود را در کلینیک دکتر علی مکارمی تضمین کنید.{" "}
            <span>با دستگاه‌های پیشرفته و روز دنیا</span>
          </p>
          <button className="text-[#45CBC2] border border-[#45CBC2] rounded-[10px] hover:stroke-black hover:bg-[#45CBC2]  flex w-[225px] h-[68px] items-center justify-center hover:text-white group font-iranSansMedium">
            <span className="ml-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-white"
                  d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="group-hover:stroke-white"
                  d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            مشاهده بیشتر
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-surgery text-white bg-[length:1440px_700px] bg-no-repeat">
        <div className="h-[580px] mx-[10%] justify-between">
          <h1 className="font-bold text-[64px] mt-[15%] mb-[5%]">
            عمل<span className="text-[#45CBC2]"> آب مروارید</span>
          </h1>
          <p className="text-[20px] flex flex-col mb-[7%]">
            سلامتی چشم‌های خود را در کلینیک دکتر علی مکارمی تضمین کنید.{" "}
            <span>با دستگاه‌های پیشرفته و روز دنیا</span>
          </p>
          <button className="text-[#45CBC2] border border-[#45CBC2] rounded-[10px] hover:stroke-black hover:bg-[#45CBC2]  flex w-[225px] h-[68px] items-center justify-center hover:text-white group font-iranSansMedium">
            <span className="ml-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-white"
                  d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="group-hover:stroke-white"
                  d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            مشاهده بیشتر
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-check text-white bg-[length:1440px_700px] bg-no-repeat">
        <div className="h-[580px] mx-[10%] justify-between ">
          <h1 className="font-bold text-[64px] mt-[15%] mb-[5%]">
            عمل<span className="text-[#45CBC2]"> PRK</span>
          </h1>
          <p className="text-[20px] flex flex-col mb-[7%]">
            سلامتی چشم‌های خود را در کلینیک دکتر علی مکارمی تضمین کنید.{" "}
            <span>با دستگاه‌های پیشرفته و روز دنیا</span>
          </p>
          <button className="text-[#45CBC2] border border-[#45CBC2] rounded-[10px] hover:stroke-black hover:bg-[#45CBC2]  flex w-[225px] h-[68px] items-center justify-center hover:text-white group font-iranSansMedium">
            <span className="ml-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-white"
                  d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="group-hover:stroke-white"
                  d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                  stroke="#45CBC2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            مشاهده بیشتر
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
