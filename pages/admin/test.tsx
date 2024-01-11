import apiRequests from "@/Axios/config";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
function test() {
  const { register, handleSubmit } = useForm();
  const [allSelectedDay, setAllSelectedDay] = useState<any>([]);
  const [selectdedDay, setSelectedDay] = useState<any>([]);
  const [select, setSelect] = useState();
  const harchi = {
    [selectdedDay.lenght - 1]: {
      start_time: "08:00",
      end_time: "16:00",
      visit_length: "15",
      rest_time: "5",
      visit_cost: "300",
    },
  };

  console.log(harchi);

  const confirm = (data: any) => {
    setSelect(data);
  };

  // useEffect(() => {
  //   localStorage.getItem("token");

  //   getData();
  // }, []);
  // useEffect(()=>{},[selectdedDay])

  const getData = async () => {
    const token = localStorage.getItem("token");
    const response = await apiRequests.post(
      `/api/time-pattern`,
      {
        pattern: {
          "1": {
            start_time: "08:00",
            end_time: "16:00",
            visit_length: "15",
            rest_time: "5",
            visit_cost: "300",
          },
          "5": {
            start_time: "09:00",
            end_time: "13:00",
            visit_length: "20",
            rest_time: "5",
            visit_cost: "300",
          },
        },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
  };
  // console.log(selectdedDay[0]?.day);
  // let bodyApi:any
  // for(let i=0;i<selectdedDay.length;i++){ bodyApi={[i]:selectdedDay[i].day}}
  // console.log(bodyApi)
  // const bodyApi={selectdedDay[i].day:
  const AddDay = () => {
    allSelectedDay?.push({
      [selectdedDay[selectdedDay.length - 1]?.day]: select,
    });
  };
  console.log(allSelectedDay);
  // console.log(selectdedDay[selectdedDay.length-1]?.day)
  return (
    <div>
      <input className="border" type="text" {...register("lenght")} />
      <input className="border" type="text" {...register("rest")} />
      <input className="border" type="text" {...register("startTime")} />
      <input className="border" type="text" {...register("endTime")} />
      <input className="border" type="text" {...register("cost")} />
      <button onClick={AddDay}>تایید</button>
      <Calendar
        value={selectdedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        locale="fa"
        colorPrimary="#45CBC2"
      />
      <button onClick={handleSubmit(confirm)}>جدول</button>
    </div>
  );
}

export default test;
