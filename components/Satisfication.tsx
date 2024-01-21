import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import Buttonswiper from "./Buttonswiper";

function Satisfication({satisfic}:any) {
  const costomer = [
    {
      img: "/images/landin/smiling.png",
      name: "درسا حیدری",
      title: "عمل لیزیک",

      desc: "من مشکل بینایی داشتم. بعد از سه ماه رفتن به دکترهای دیگر به هیچ نتیجه‌‌ای نرسیدم. به آقای دکتر مکارمی مراجعه کردم و ایشان به بهترین نحو مشکل بینایی منو به صورت کامل برطرف کردن. از لطف و زحمات ایشون بسیار سپاسگزارم.",
    },
    {
      img: "/images/landin/Beautiful.png",
      name: " امیر جعفری",
      title: "عمل لیزیک",

      desc: "با عرض سلام و خسته نباشید. من مشکلی در تاری دید داشتم. به آقای دکتر راجعه کردم و پس از جلسه اول به من عینک پیشنهاد کردن. ایشون تشخیصشون بسیار خوب هست.",
    },
    {
      img: "/images/landin/young_man.png",
      name: "محمد امیری",
      title: "عمل لیزیک",

      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، ",
    },
  ];

  return (
    <div className=" sm:mr-[1%]" >
      <Swiper modules={[A11y]} spaceBetween={50} slidesPerView={1}>
        {costomer.map((item) => {
          return (
            <SwiperSlide>
              <div className="flex md:flex-row flex-col mx-[10%] md:justify-evenly  ">
                  <div className="bg-[#ededee] sm:rounded-full rounded-full w-[258px] h-[258px] mt-[8] justify-center">
                    <img
                      className="rounded-full sm:rounded-full"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="mt-[4%]  hidden md:flex ">
                    <img className="w-[70px] h-[70px]" src="images/landin/quote.png" />
                  </div>
                  <div className=" flex flex-col justify-between w-[67%] mt-[3%]">
                    <p>{item.desc}</p>
                    <div className="flex flex-col ">
                      <p className="text-[16px] ">{item.name}</p>
                      <p className=" text-[#757575] text-[12px]">عمل لیزیک</p>
                    </div>
                  </div>
                
              </div>
            </SwiperSlide>
          );
        })}

        <Buttonswiper />
      </Swiper>
    </div>
  );
}
export default Satisfication;
