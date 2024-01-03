import React from "react";

function BusinessDays() {
  const businesDaysData = [
    { day: "شنبه", time: " 8:00 الی 23:00" },
    { day: "یکشنبه", time: " 8:00 الی 23:00" },
    { day: "دوشنبه", time: " 8:00 الی 23:00" },
    { day: "سه شنبه", time: " 8:00 الی 23:00" },
    { day: "چهارشنبه", time: " 8:00 الی 23:00" },
  ];
  return (
    <div className="mt-[7%] mb-[10%] mx-[7.5%] ">
      <h6 className="border-r-[1px] text-2xl px-2 mb-[6%]  border-[#288E87] text-[#064247] basis-1/3 font-iranSansBold">
        روزهای کاری مطب
      </h6>
      <div className="flex w-full items-center">
        <img
          className="hidden  [@media(min-width:928px)]:flex max-w-xl:w-[454px] md:h-[298px] "
          src="/images/litterGirl.png"
          alt=""
        />
        <div className="sm:mr-4">
          <div className="flex flex-col  items-center  justify-center gap-4   sm:flex-row flex-wrap  ">
            {businesDaysData.map((item) => {
              return (
                <div className="flex flex-col items-center justify-center bg-[#D6F3F1] w-[136px] h-[176px] space-y-8 rounded-[12.55px] ">
                  <p>{item.day}</p>
                  <p>{item.time}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center mt-[2%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-[1%]"
            >
              <circle cx="8" cy="8" r="8" fill="#FF7F48" />
              <path
                d="M7.99984 14C8.73622 14 9.33317 13.403 9.33317 12.6667C9.33317 11.9303 8.73622 11.3333 7.99984 11.3333C7.26346 11.3333 6.6665 11.9303 6.6665 12.6667C6.6665 13.403 7.26346 14 7.99984 14Z"
                fill="white"
              />
              <path
                d="M7.99984 2C7.2665 2 6.6665 2.6 6.6665 3.33333V8.66667C6.6665 9.4 7.2665 10 7.99984 10C8.73317 10 9.33317 9.4 9.33317 8.66667V3.33333C9.33317 2.6 8.73317 2 7.99984 2Z"
                fill="white"
              />
            </svg>
            <p className="text-[#064247] font-iranSansLight">روزهای کاری ثابت نیستند و بر اساس شرایط ممکن است تغییر کنند.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDays;
