//@ts-nocheck
import React, { useState } from "react";
import Layout from "../Layout";
import DatePicker, { Calendar } from "react-modern-calendar-datepicker";
import { useForm } from "react-hook-form";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
function setPattern() {
  // const [selectedDay, setSelectedDay] = useState<any>();
  const [selectdedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const onSubmit = (dataa) => {
    let howDay = "";
    if (selectdedDay !== null) {
      howDay = selectdedDay.day.toString();
    }

    setDataa([...data, {[howDay]: dataa}]);
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <button className="text-white bg-[#064247] text-[12px] w-[40px] h-[30px] rounded-md mt-[5%]">
              تایید
            </button>
          </div>
          <div className="ml-[8%] flex flex-col">
            <h1 className="mb-[15%] text-[#064247] text-[14px]">
              این زمان‌بندی برای چه روزهایی از ماه آینده می‌باشند؟
            </h1>
            {/* <DatePicker /> */}
            <Calendar
              value={selectdedDay}
              onChange={setSelectedDay}
              shouldHighlightWeekends
              locale="fa"
              colorPrimary="#45CBC2"
            />
            {/* <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            customDaysClassName={[
              { year: 1402, month: 10, day: 4, className: "bg-[#45CBC2]" },
              { year: 1402, month: 10, day: 12, className: "bg-[#45CBC2]" },
              { year: 1402, month: 10, day: 18, className: "bg-[#45CBC2]" },
              { year: 1402, month: 10, day: 26, className: "bg-[#45CBC2]" },
            ]}
          /> */}
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
          type="submit"
          className="w-[246px] h-[48px] text-white bg-[#288E87] rounded-md mx-auto mt-[10%]"
        >
          جدول زمان‌بندی را بساز
        </button>
        <button
          onClick={() => {
          let d 
            let pattern = {
              "pattern" :{
               dataa
              }
            };
            console.log(pattern)
          }}
          className="w-[246px] h-[48px] text-white bg-[#288E87] rounded-md mx-auto mt-[10%]"
        >
          جدول زمان‌بندی را بساز
        </button>
      </form>
    </Layout>
  );
}

export default setPattern;
