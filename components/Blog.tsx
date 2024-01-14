import { dividerClasses } from "@mui/material";
import React from "react";

function Blog() {
  const blogData = [
    {
      img: "/images/oldManTest.png",
      title: "درمان تنبلی چشم",
      desc: "تنبلی چشم یکی از انواع اختلالات بینایی است که بر اثر آن در ی...",
      data: "دوشنبه 19 تیر 1402",
      dataIcon: "/images/timer.svg",
      comment: "2 دیدگاه",
      commentIcon: "/images/message-notif.svg",
    },
    {
      img: "/images/halfWoman.png",
      title: "چشم‌های آبی شما واقعا آبی نیستند",
      desc: "چشم های آبی شما واقعاً به رنگ آبی نیستند رنگ چشم‌ها را دو...",
      data: "شنبه 17 تیر 1402",
      dataIcon: "/images/timer.svg",
      comment: "2 دیدگاه",
      commentIcon: "/images/message-notif.svg",
    },
    {
      img: "/images/childTest.png",
      title: "معاینه و تست چشم",
      desc: "انجام معاینه چشم و تست بینایی بخشی مهمی در سالم ماندن ...",
      data: "شنبه 17 تیر 1402",
      dataIcon: "/images/timer.svg",
      comment: "2 دیدگاه",
      commentIcon: "/images/message-notif.svg",
    },
  ];
  return (
    <div className="flex flex-col mx-[7.5%] ">
      <p className="border-r-[1px] text-2xl px-2  font-bold border-[#288E87] text-[#064247] font-iranSansBold">
        بلاگ و مقالات
      </p>
      <div className="flex justify-end ml-[2%] pb-4">
        <p className="text-[#83DCD6] px-2 ">مشاهده همه</p>
        <img src="/images/back.svg" alt="" />
      </div>

      <div className="flex flex-col gap-[6%] items-center  lg:flex-row lg:justify-center max-w-[1224px]">
        {blogData.map((item) => {
          return (
            <div className="shadow-lg flex flex-col justify-between lg:basis-1/3   rounded-[10px]  max-w-[347px] h-[460px] hover:shadow-[0_8px_8px_rgb(211,211,211)] text-black bg-white ease-out hover:translate-y-3 transition-all">
              <img
                className="mx-[1rem]  max-w-[313px] max-h-[313px] rounded-[10px] my-4"
                src={item.img}
                alt=""
              />
              <div className="mx-[6%] ">
                <h4 className="text-[#064247] font-bold">{item.title}</h4>
                <p className="text-xs mt-2 font-light">{item.desc}</p>
              </div>
              <div className="flex justify-between  my-[3.5%] mx-[6%]">
                <div className="flex basis-full items-center">
                  <img className="ml-2" src={item.dataIcon} alt="" />
                  <p className="text-xs text-[#757575]">{item.data}</p>
                </div>
                <div className="flex basis-full items-center justify-end">
                  <img className="ml-2" src={item.commentIcon} alt="" />
                  <p className="text-xs text-[#757575]">{item.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
