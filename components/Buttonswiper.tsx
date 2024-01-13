import React from "react";
import { useSwiper } from "swiper/react";

function Buttonswiper() {
  const swiper = useSwiper();
  return (
    <div className=" justify-end ml-[11%] md:flex hidden ">
      <button onClick={() => swiper.slideNext()}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="4" fill="#45CBC2" />
          <path
            d="M16.5 13L23.5 20L16.5 27"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className=" mr-[1%]" onClick={() => swiper.slidePrev()}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="4" fill="#45CBC2" />
          <path
            d="M23.5 27L16.5 20L23.5 13"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Buttonswiper;
