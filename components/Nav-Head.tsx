import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import SliderHead from "./SliderHead";
function NavHead() {
  return (
    <div className=" bg-gradient-to-r from-rgbWhite to-rgbBlack  h-[1000px] ">
      <SliderHead>
        <Navbar />
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          loop={true}
          autoplay={{
            delay: 30000,
            disableOnInteraction: true,
          }}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Header
              title={"چشم پزشکی دکتر مکارمی"}
              desc={
                "سلامتی چشم‌های خود را در کلینیک دکتر علی مکارمی تضمین کنید. با دستگاه‌های پیشرفته و روز دنیا"
              }
              img={"./images/OldMan.png"}
              alt={"OldMan"}
            />
            {/* <img src="./images/OldMan.png" alt="OldMan" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/kidEyeTest.png" alt="kidEyeTest" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/surgery.png" alt="surgery" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/checkingPatient.png" alt="checkingPatient" />
          </SwiperSlide>
        </Swiper>
      </SliderHead>
    </div>
  );
}

export default NavHead;
