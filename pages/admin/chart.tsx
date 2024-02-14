"use client";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Checkbox } from "@mui/material";
import apiRequests from "@/Axios/config";
import moment from "jalali-moment";
import id from "./messege/[id]";

function chart() {
  const [workDays, setWorkDays] = useState<any>([]);
  const [showDetailDay, setShowDetailDay] = useState<any>();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const token = localStorage.getItem("token");
    apiRequests
      .get("/api/work-days", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res: any) => {
        console.log(res), setWorkDays(res.data.data);
      });
  };
  console.log(moment(workDays[0]?.date, "YYYY-MM-DD").locale("fa").format("dddd"));
  const daies = [
    { day: "شنبه", id: 1 },
    { day: "یکشنبه", id: 2 },
    { day: "دوشنبه", id: 3 },
    { day: "سه‌شنبه", id: 4 },
    { day: "چهارشنبه", id: 5 },
  ];
  const showTime = (day: any) => {
    const filterDay = workDays?.filter((item: any) => {
      return (
        moment(item.day.workDays, "YYYY/MM/DD").locale("fa").format("dddd") ==
        day
      );
    });
    setShowDetailDay(filterDay);
  };
  return (
    <Layout>
      <h1 className="text-[#45CBC2] text-[16px] font-iranSansBold mt-[5%] mr-[7%]">
        جدول زمانبندی
      </h1>
      {/* <div>
        {workDays?.map((item: any) => {
          return (
            <div className="flex justify-between" key={item.id}>
              <p>{item.start_time}-{item.end_time}</p>
              
              <p>
                {moment(item.day.workDays, "YYYY/MM/DD")
                  .locale("fa")
                  .format("YYYY/MM/DD")}
              </p>
              <p>
                {moment(item.day.workDays, "YYYY/MM/DD")
                  .locale("fa")
                  .format("dddd")}
              </p>
            </div>
          );
        })}
      </div> */}
      {showDetailDay?.map((item: any) => {
        return (
          <div key={item.id}>
            <p>
              {item.start_time}-{item.end_time}
            </p>
            <p>
              {moment(item.day.workDays, "YYYY/MM/DD")
                .locale("fa")
                .format("YYYY/MM/DD")}
            </p>
          </div>
        );
      })}

      <div>
        {daies.map((item) => {
          return (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => showTime(item.day)}
            >
              {item.day}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default chart;
