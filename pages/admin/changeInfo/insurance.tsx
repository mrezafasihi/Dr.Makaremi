import React from "react";
import Layout from "../Layout";

function insurance() {
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
  return (
    <Layout>
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
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-[#757575] font-bold text-[20px]">
          بیمه‌های طرف قرارداد
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-[15%] gap-[3%] max-w-[727px] overflow-y-auto ">
        {insurance.map((item, index) => {
          if (index == 0) {
            return (
              <div className="flex flex-col justify-center items-center w-[157px] bg-[#EDEDEE] rounded-[10px]">
                <svg
                  width="77"
                  height="76"
                  viewBox="0 0 77 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.1033 38H51.4367"
                    stroke="#757575"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.77 50.6673V25.334"
                    stroke="#757575"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.27 69.6663H48.27C64.1033 69.6663 70.4367 63.333 70.4367 47.4997V28.4997C70.4367 12.6663 64.1033 6.33301 48.27 6.33301H29.27C13.4367 6.33301 7.10333 12.6663 7.10333 28.4997V47.4997C7.10333 63.333 13.4367 69.6663 29.27 69.6663Z"
                    stroke="#757575"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>افزودن بیمه</p>
              </div>
            );
          }
          return (
            <div className="flex flex-col w-[157px] justify-center h-[196px] items-center rounded-[10px] hover:bg-black hover:opacity-40  ">
              <div className="h-[144px] w-[100px] flex items-center">
                <img className="" src={item.img} alt="" />
              </div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default insurance;
