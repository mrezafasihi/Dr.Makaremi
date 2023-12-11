import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

function NavHead() {
  return (
    <div className="h-[1000px] relative ">
      <Navbar />
      <Swiper
        className="mt-[-10px]"
        direction="vertical"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        autoplay={{
          delay: 300,
          disableOnInteraction: true,
        }}
        mousewheel={true}
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
    </div>
  );
}

export default NavHead;
