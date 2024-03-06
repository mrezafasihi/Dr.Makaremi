// @ts-nocheck
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
  useEffect(() => {
    convertDate();
  }, [workDays]);
  // useEffect(() => {
  //   getWeeksInMonth(2024,1);
  // }, [workDays]);
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

  const convertDate = () => {
    console.log(
      moment(workDays[0]?.date, "YYYY/MM/DD").locale("fa").format("dddd")
    );
    console.log(workDays[0]?.date);
    // console.log(new Intl.DateTimeFormat('fa-IR').format(workDays[0]?.date))
    console.log(
      moment("2024-04-20", "YYYY-MM-DD").locale("fa").format("YYYY-MM-DD")
    );
  };
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
  // function getWeeksInMonth(year:any, month:any) {

  //   const weeks = [],
  //     firstDate = new Date(year, month, 1),
  //     lastDate = new Date(year, month + 1, 0),
  //     numDays = lastDate.getDate();

  //   let dayOfWeekCounter = firstDate.getDay();

  //   for (let date = 1; date <= numDays; date++) {
  //     if (dayOfWeekCounter === 0 || weeks.length === 0) {
  //       weeks.push([]);
  //     }
  //     weeks[weeks.length - 1].push(date);
  //     dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  //   }

  //   return weeks
  //     .filter((w) => !!w.length)
  //     .map((w) => ({
  //       start: w[0],
  //       end: w[w.length - 1],
  //       dates: w,
  //     }));
  // }
  // const getWeekOfMonth = () => {
  //   let day;
  //   let date;
  //   let adjustedDate;
  //   let dayNum;
  //   let prefixes = ["0", "1", "2", "3", "4", "5"];
  //   for (let i = 0; i < workDays.length; i++) {
  //     day = workDays[i];
  //     date = new Date(day.date);
  //     dayNum = date.getDay();
  //     // if (dayNum == 6) {
  //     //   dayNum = -1;
  //     // }

  //     let weekNum = Math.ceil((22 - 1 - dayNum) / 7) + 1;

  //     let convertDate = +moment(day.date, "YYYY/MM/DD")
  //       .locale("fa")
  //       .format("DD");
  //     console.log(day, dayNum, (convertDate - 1 - dayNum ) / 7 + 1);
  //   }
  // };
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
