"use client";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Checkbox } from "@mui/material";
import apiRequests from "@/Axios/config";
import moment from "jalali-moment";

function chart() {
  const [date, setDate] = useState<any>();
  const [showDetailDay, setShowDetailDay] = useState<any>();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const token = localStorage.getItem("token");
    apiRequests
      .get("/api/time", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res: any) => {
        console.log(res), setDate(res.data.data);
      });
  };
  console.log(date);
  const daies = [
    { day: "شنبه" },
    { day: "یکشنبه" },
    { day: "دوشنبه" },
    { day: "سه‌شنبه" },
    { day: "چهارشنبه" },
  ];
  const showTime = (day: any) => {
    const filterDay = date?.filter((item: any) => {
      return (
        moment(item.day.date, "YYYY/MM/DD").locale("fa").format("dddd") == day
      );
    });
    setShowDetailDay(filterDay);
  };
  console.log(showDetailDay);
  return (
    <Layout>
      <h1 className="text-[#45CBC2] text-[16px] font-iranSansBold mt-[5%] mr-[7%]">
        جدول زمانبندی
      </h1>
      {/* <div>
        {date?.map((item: any) => {
          return (
            <div className="flex justify-between" key={item.id}>
              <p>{item.start_time}-{item.end_time}</p>
              
              <p>
                {moment(item.day.date, "YYYY/MM/DD")
                  .locale("fa")
                  .format("YYYY/MM/DD")}
              </p>
              <p>
                {moment(item.day.date, "YYYY/MM/DD")
                  .locale("fa")
                  .format("dddd")}
              </p>
            </div>
          );
        })}
      </div> */}
      {showDetailDay?.map((item: any) => {
        return (
          <div>
            <p>
              {item.start_time}-{item.end_time}
            </p>
            <p>
                {moment(item.day.date, "YYYY/MM/DD")
                  .locale("fa")
                  .format("YYYY/MM/DD")}
              </p>
          </div>
        );
      })}

      <div>
        {daies.map((item) => {
          return (
            <div className="cursor-pointer" onClick={() => showTime(item.day)}>
              {item.day}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default chart;
