//@ts-nocheck
import React, { useState } from "react";
import Layout from "../Layout";
import DatePicker, { Calendar } from "react-modern-calendar-datepicker";
import { useForm } from "react-hook-form";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import toast, { Toaster } from "react-hot-toast";
import apiRequests from "@/Axios/config";
function setPattern() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState({});
  const [storeDay, setStoreDay] = useState<any>([]);
  // const [pattern, setPattern] = useState<any>();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (dataa, selectedDay) => {
    let howDay = selectedDay.day;
    setStoreDay([...storeDay, selectedDay.day]);
    const repeatDay = storeDay?.some((item) => {
      return item == selectedDay.day;
    });
    if (repeatDay) {
      toast.error("برنامه این روز ساخته شده است");
    } else {
      setData({...data,  [howDay]: dataa });
    }
    reset({
      visit_length: "",
      rest_time: "",
      start_time: "",
      end_time: "",
      visit_cost: "",
    });
  };

  const sendPattern = () => {
    const token = localStorage.getItem("token");
    let pattern = {
       
        data,
      
    };
console.log(pattern)
    apiRequests
      .post(
        "/api/time-pattern",
        { pattern },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => console.log(res));
  };

  return (
    <Layout>
      <h1 className="text-[16px] text-[#45CBC2] font-iranSansBold mt-[5%] mr-[5%]">
        جدول زمانبندی
      </h1>
      <div className="flex justify-between mt-[10%]">
        <div className="flex flex-col">
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            مدت‌زمان هر ویزیت
          </p>
          <input
            {...register("visit_length")}
            type="text"
            className=" placeholder:text-[#757575] placeholder:text-[12px] rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:pr-[8px] my-[2%]"
            placeholder="15 دقیقه"
          />
          <p className="text-[#CBCBCB] text-[12px]">
            لطفا مدت زمان هر ویزیت را به دقیقه تعیین کنید.
          </p>
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            مدت‌زمان استراحت بین هر ویزیت
          </p>
          <input
            {...register("rest_time")}
            type="text"
            placeholder="0 دقیقه"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-[#CBCBCB] text-[12px] ">
            لطفا مدت زمان استراحت بین هر ویزیت را به دقیقه تعیین کنید.
          </p>
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            ساعت شروع ویزیت‌ها
          </p>
          <input
            {...register("start_time")}
            type="text"
            placeholder="16:00"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            ساعت پایان ویزیت‌ها
          </p>
          <input
            {...register("end_time")}
            type="text"
            placeholder="20:00"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-[#CBCBCB] text-[12px] ">
            لطفا ساعت دقیق پایان روز را مشخص کنید.
          </p>
        </div>
        <div className="ml-[8%] flex flex-col">
          <h1 className="mb-[15%] text-[#064247] text-[14px]">
            این زمان‌بندی برای چه روزهایی از ماه آینده می‌باشند؟
          </h1>

          <Calendar
          
            value={selectedDay}
            onChange={handleSubmit(onSubmit)}
            shouldHighlightWeekends
            locale="fa"
            colorPrimary="#D6F3F1"
            
          />

          <p className="text-[14px] text-[#064247] font-iranSansBold mt-[10%]">
            هزینه ویزیت
          </p>
          <input
            {...register("visit_cost")}
            type="text"
            placeholder="300,000 تومان"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-[#CBCBCB] text-[12px] ">
            لطفا هزینه هر ویزیت را به تومان وارد کنید.
          </p>
          <div className="flex justify-between mt-[10%]">
            <button className=" text-white bg-[#064247] text-[12px] rounded-3xl w-[111px] h-[36px]">
              برنامه اول
            </button>
            <button className=" text-white bg-[#064247] text-[12px] rounded-3xl w-[111px] h-[36px]">
              برنامه دوم
            </button>
            <button className=" text-white bg-[#064247] text-[12px] rounded-3xl w-[111px] h-[36px]">
              برنامه سوم
            </button>
          </div>
        </div>
      </div>
      <button
        className="w-[246px] h-[48px] text-white bg-[#288E87] rounded-md mx-auto mt-[10%]"
        onClick={sendPattern}
      >
        جدول زمان‌بندی را بساز
      </button>
      
      {/* <button
          onClick={() => {
            let pattern = {
              pattern: {
                data,
              },
            };
            console.log(pattern);
          }}
          className="w-[246px] h-[48px] text-white bg-[#288E87] rounded-md mx-auto mt-[10%]"
        >
          جدول زمان‌بندی را بساز
        </button> */}
      <Toaster />
    </Layout>
  );
}

export default setPattern;
