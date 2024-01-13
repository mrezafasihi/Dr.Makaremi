'use client'
import React from "react";
import Layout from "./Layout";
import { Checkbox } from "@mui/material";

function chart() {
  const data = [
    { id:1 ,name: "ستایش الوندی", time: "8:00-8:30" },
    { id: 2,name: "ستایش الوندی", time: "8:30-9:30" },
    { id: 3,name: "ستایش الوندی", time: "10:00-10:30" },
    { id: 4,name: "ستایش الوندی", time: "10:30-11:30" },
    { id: 5,name: "ستایش الوندی", time: "14:00-15:30" },
    // {
    //     id:1,
    //     p1:'میلاد محمودی',
    //     p2:'ستاره رحمانی',
    //     p3:'',
    //     p4:'امیر محمدی',
    //     p5:'محمد ملکی',
    //     p6:'ستایش الوندی',
    //     day:'شنبه'
    // },
  ];
  return (
    <Layout>
      <h1 className="text-[#45CBC2] text-[16px] font-iranSansBold mt-[5%] mr-[7%]">
        جدول زمانبندی
      </h1>
      <div className="flex items-center mx-auto mt-[5%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M24.2006 18.1682C24.7589 17.6099 24.7589 16.7046 24.2006 16.1463L15.1019 7.04753C14.5435 6.48918 13.6383 6.48918 13.0799 7.04753C12.5216 7.60587 12.5216 8.51112 13.0799 9.06947L21.1677 17.1572L13.0799 25.245C12.5216 25.8033 12.5216 26.7086 13.0799 27.2669C13.6383 27.8253 14.5435 27.8253 15.1019 27.2669L24.2006 18.1682ZM21.7599 18.587H23.1896V15.7275H21.7599V18.587Z"
            fill="#288E87"
          />
        </svg>
        <p className="text-[16px] text-[#064247]">هفته دوم مهر</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M10.4264 18.1682C9.86803 17.6099 9.86803 16.7046 10.4264 16.1463L19.5251 7.04753C20.0834 6.48918 20.9887 6.48918 21.547 7.04753C22.1054 7.60587 22.1054 8.51112 21.547 9.06947L13.4593 17.1572L21.547 25.245C22.1054 25.8033 22.1054 26.7086 21.547 27.2669C20.9887 27.8253 20.0834 27.8253 19.5251 27.2669L10.4264 18.1682ZM12.8671 18.587H11.4373V15.7275H12.8671V18.587Z"
            fill="#288E87"
          />
        </svg>
      </div>
      <div className="flex items-center mx-auto mt-[1%]">
        <Checkbox />
        <p className="text-[14px] text-[#313131] font-iranSansLight">
          غیر فعال کردن نوبت‌دهی این هفته
        </p>
      </div>
<table className="">
        <tr >
          {data.map((item,id) => {
            return <th key={item.id}>{item.time}</th>;
          })}
        </tr>
        <div className="flex">
        <tr className="flex flex-col">
          <td>شنبه</td>
          <td>یکشنبه</td>
          <td>دوشنبه</td>
          <td>سه‌شنبه</td>
          <td>چهارشنبه</td>
        </tr>
        {data.map((item,id) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              
            </tr>
          );
        })}
        </div>
      </table>
    </Layout>
  );
}

export default chart;
