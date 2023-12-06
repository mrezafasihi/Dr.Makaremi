import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { url } from "inspector";
function Header({ title, desc, btn, img, alt }: any) {
  return (
    <div style={{ backgroundImage: `url(${img})` }}>
      <img src={img} alt={alt} />
      <h2 className=" text-white">{title}</h2>
      <p>{desc}</p>
      <button>{btn}</button>
    </div>
  );
}

export default Header;
