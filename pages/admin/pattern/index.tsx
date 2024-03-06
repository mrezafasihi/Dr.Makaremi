//@ts-nocheck
import React, { useState } from "react";
import Layout from "../Layout";
import { utils } from "react-modern-calendar-datepicker";
import { useForm } from "react-hook-form";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import toast, { Toaster } from "react-hot-toast";
import apiRequests from "@/Axios/config";
function setPattern() {
  const nameDaies = [
    { day: "شنبه", id: 1, value: "saturday", select: false },
    { day: "یک شنبه", id: 2, value: "sunday", select: false },
    { day: "دوشنبه", id: 3, value: "monday", select: false },
    { day: "سه شنبه", id: 4, value: "tuesday", select: false },
    { day: "چهارشنبه", id: 5, value: "wednesday", select: false },
    { day: "پنج شنبه", id: 6, value: "thursday", select: false },
  ];
  const [test, setTest] = useState<any>(nameDaies);
  const [selectedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState({});
  const [storeDay, setStoreDay] = useState<any>([]);
  const [day, setDay] = useState<any>();
  // const [pattern, setPattern] = useState<any>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let month;
  const onSubmit = (dataa, day, i) => {
    console.log(dataa);
    setStoreDay([...storeDay, day]);
    const repeatDay = storeDay?.some((item) => {
      return item == day;
    });
    if (repeatDay) {
      toast.error("برنامه این روز ساخته شده است");
    } else {
      setData({ ...data, [day]: dataa });
      test[i - 1].select = true;
    }
    reset({
      visit_length: "",
      rest_time: "",
      start_time: "",
      end_time: "",
      visit_cost: "",
    });
  };
  const persianToday = utils("fa").getToday();
  const sendPattern = () => {
    const token = localStorage.getItem("token");
    let pattern = {
      data,
    };
    console.log(pattern);
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
  switch (persianToday.month) {
    case 1:
      month = "فروردین";
      break;
    case 2:
      month = "اردیبهشت";
      break;
    case 3:
      month = "خرداد";
      break;
    case 4:
      month = "تیر";
      break;
    case 5:
      month = "مرداد";
      break;
    case 6:
      month = "شهریور";
      break;
    case 7:
      month = "مهر";
      break;
    case 8:
      month = "آبان";
      break;
    case 9:
      month = "آذر";
      break;
    case 10:
      month = "دی";
      break;
    case 11:
      month = "بهمن";
      break;
    case 12:
      month = "اسفند";
      break;
    default:
    // code block
  }
  console.log(data);
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
            {...register("visit_length", {
              required: "مدت زمان هر ویزیت را وارد نمایید",
            })}
            type="text"
            className=" placeholder:text-[#757575] placeholder:text-[12px] rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:pr-[8px] my-[2%]"
            placeholder="15 دقیقه"
          />
          <p className="text-red-600 text-[12px] font-iranSansLight">
            {errors.visit_length?.message}
          </p>
          <p className="text-[#CBCBCB] text-[12px]">
            لطفا مدت زمان هر ویزیت را به دقیقه تعیین کنید.
          </p>
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            مدت‌زمان استراحت بین هر ویزیت
          </p>
          <input
            {...register("rest_time", {
              required: "مدت زمان استراحت بین هر ویزیت را وارد نمایید",
            })}
            type="text"
            placeholder="0 دقیقه"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-red-600 text-[12px] font-iranSansLight">
            {errors.rest_time?.message}
          </p>
          <p className="text-[#CBCBCB] text-[12px] ">
            لطفا مدت زمان استراحت بین هر ویزیت را به دقیقه تعیین کنید.
          </p>
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            ساعت شروع ویزیت‌ها
          </p>
          <input
            {...register("start_time", {
              required: "ساعت شروع ویزیت‌ها را وارد نمایید",
            })}
            type="text"
            placeholder="16:00"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-red-600 text-[12px] font-iranSansLight">
            {errors.start_time?.message}
          </p>
          <p className="text-[#CBCBCB] text-[12px] ">
            لطفا ساعت دقیق شروع روز را مشخص کنید.
          </p>
          <p className="text-[#064247] text-[14px] font-iranSansBold mt-[15%]">
            ساعت پایان ویزیت‌ها
          </p>
          <input
            {...register("end_time", {
              required: "مدت زمان استراحت بین هر ویزیت را وارد نمایید",
            })}
            type="text"
            placeholder="20:00"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-red-600 text-[12px] font-iranSansLight">
            {errors.end_time?.message}
          </p>
          <p className="text-[#CBCBCB] text-[12px] ">
            لطفا ساعت دقیق پایان روز را مشخص کنید.
          </p>
        </div>
        <div className="ml-[8%] flex flex-col">
          <h1 className="mb-[15%] text-[#064247] text-[14px]">
            این زمان‌بندی برای چه روزهایی از ماه آینده می‌باشند؟
          </h1>

          <div>
            {/* <h6>{month}</h6> */}
            <div className="flex flex-wrap  justify-between h-52 ">
              {test.map((item) => {
                return (
                  <p
                    className={`rounded-[29px]  text-[#064247] w-[30%] items-center justify-center flex h-[35%] hover:scale-110 hover:shadow-lg hover:opacity-90 transition duration-500 ease-in-out cursor-pointer ${
                      item.select
                        ? "bg-green-900 border text-white"
                        : "bg-[#D6F3F1]"
                    }`}
                    key={item.id}
                    onClick={handleSubmit((data) =>
                      onSubmit(data, item.value, item.id)
                    )}
                  >
                    {item.day}
                  </p>
                );
              })}
            </div>
          </div>

          <p className="text-[14px] text-[#064247] font-iranSansBold mt-[10%]">
            هزینه ویزیت
          </p>
          <input
            {...register("visit_cost", {
              required: "هزینه هر ویزیت را وارد نمایید",
            })}
            type="text"
            placeholder="300,000 تومان"
            className=" rounded-md border-[1px] border-gray-300 w-[386px] h-[63px] placeholder:text-[#757575] placeholder:text-[12px] placeholder:pr-[8px] my-[2%]"
          />
          <p className="text-red-600 text-[12px] font-iranSansLight">
            {errors.end_time?.message}
          </p>
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
