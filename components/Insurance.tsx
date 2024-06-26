"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LiaAngleLeftSolid } from "react-icons/lia";

export const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      className=" absolute left-0 bg-[#45CBC2] rounded-full top-20 z-10 w-12 h-12 text-white flex items-center justify-center text-xl"
    >
      <LiaAngleLeftSolid />
    </div>
  );
};

function Insurance() {
  const insurance = [
    {
      img: "/images/insurance/salamat.png",
      name: "بیمه سلامت ایران",
      alt: "salamt_insurance",
    },
    {
      img: "/images/insurance/khadamatdarmani.png",
      name: "بیمه خدمات درمانی",
      alt: "khadamatdarmani_insurance",
    },
    {
      img: "/images/insurance/razi.png",
      name: "بیمه رازی",
      alt: "razi_insurance",
    },
    {
      img: "/images/insurance/moalem.png",
      name: "بیمه معلم",
      alt: "moalem_insurance",
    },
    {
      img: "/images/insurance/toseae.png",
      name: "بیمه توسعه",
      alt: "toseae_insurance",
    },
    {
      img: "/images/insurance/dana.png",
      name: "بیمه دانا",
      alt: "dana_insurance",
    },
    {
      img: "/images/insurance/sina.png",
      name: "بیمه سینا",
      alt: "sina_insurance",
    },
    {
      img: "/images/insurance/novin.png",
      name: "بیمه نوین",
      alt: "novin-insurance",
    },
    {
      img: "/images/insurance/saman.png",
      name: "بیمه سامان",
      alt: "saman_insurance",
    },
    {
      img: "/images/insurance/iran.png",
      name: "بیمه ایران",
      alt: "iran_insurance",
    },
    {
      img: "/images/insurance/pasargad.png",
      name: "بیمه پاسارگاد",
      alt: "pasargad_insurance",
    },
    {
      img: "/images/insurance/parsian.png",
      name: "بیمه پارسیان",
      alt: "parsianin_surance",
    },
  ];

  const swiper = useSwiper();

  return (
    <div className=" mx-[7.5%]">
      <p className="border-r-[1px] text-2xl px-2  border-[#288E87] text-[#064247]">
        بیمه‌های طرف قرارداد
      </p>
      <Swiper
        className="my-[5%]"
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6.5}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1241: { slidesPerView: 6 },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {insurance.map((item) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col  items-center text-[18px] rounded-[15px] hover:shadow-xl h-52">
                <div className="h-36">
                  <img className="h-full " src={item.img} alt={item.alt} />
                </div>
                <p className="pb-2">{item.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperButton />
      </Swiper>
    </div>
  );
}

export default Insurance;
