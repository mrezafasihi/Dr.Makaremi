import { dividerClasses } from "@mui/material";
import React from "react";

function Blog() {
  const blogData = [
    {
      img: "/images/oldManTest.png",
      title: "درمان تنبلی چشم",
      desc: "تنبلی چشم یکی از انواع اختلالات بینایی است که بر اثر آن در یک چشم به ظاهر سالم، کاهش دید مرکزی به وجود می آید.",
      data: "دوشنبه 19 تیر 1402",
      dataIcon: "/images/timer.svg",
      comment: "2 دیدگاه",
      commentIcon: "/images/message-notif.svg",
    },
    {
      img: "/images/halfWoman.png",
      title: "چشم‌های آبی شما واقعا آبی نیستند",
      desc: "چشم های آبی شما واقعاً به رنگ آبی نیستند رنگ چشم‌ها را دو فقط عامل می تواننند تعیین کنند",
      data: "شنبه 17 تیر 1402",
      dataIcon: "/images/timer.svg",
      comment: "2 دیدگاه",
      commentIcon: "/images/message-notif.svg",
    },
    {
      img: "/images/childTest.png",
      title: "معاینه و تست چشم",
      desc: "انجام معاینه چشم و تست بینایی بخشی مهمی در سالم ماندن است. اما آیا می دانید",
      data: "شنبه 17 تیر 1402",
      dataIcon: "/images/timer.svg",
      comment: "2 دیدگاه",
      commentIcon: "/images/message-notif.svg",
    },
  ];
  return (
    <div className="flex flex-col mx-[10%]">
      <p className="border-r-[1px] text-2xl px-2  border-[#288E87] text-[#064247]">
        بلاگ و مقالات
      </p>
      <div className="flex justify-end">
        <p className="text-[#83DCD6]">مشاهده همه</p>
        <img src="/images/back.svg" alt="" />
      </div>

      <div className="flex flex-col gap-[4%] items-center lg:flex-row ">
        {blogData.map((item) => {
          return (
            <div className="shadow-lg flex flex-col lg:basis-1/3 rounded-[10px]  max-w-[346px] h-[460px] ">
              <img
                className="mx-auto w-80 h-80 rounded-[10px] my-4"
                src={item.img}
                alt=""
              />
              <h4 className="text-[#064247]">{item.title}</h4>
              <p>{item.desc}</p>
              <div className="flex justify-between">
                <div className="flex basis-full items-center">
                  <img src={item.dataIcon} alt="" />
                  <p className="text-xs">{item.data}</p>
                </div>
                <div className="flex basis-full items-center justify-end">
                  <img src={item.commentIcon} alt="" />
                  <p className="text-xs">{item.comment}</p>
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
