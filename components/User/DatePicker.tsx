import React from "react";

function DatePicker() {
  

  let day: any = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 9; j++) {
      if (i == 0 && j == 0) {
      } else if (i == 0) {
        day = [...day, "0" + j];
      } else if (i == 1) {
        day = [...day, "1" + j];
      } else if (i == 2) {
        day = [...day, "2" + j];
      }
    }
  }
  let month: any = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  let year: any = [];
  for (let i = 1300; i <= 1401; i++) {
    year = [...year, i];
  }

  return (
    <div className="flex md:basis-1/2 w-[393px] justify-between">
      <select className="border rounded-[6px] basis-[20%]" name="" id="">
        {day.map((item: any) => {
          
          return <option value={item}>{item}</option>;
        })}
      </select>
      <select className="border rounded-[6px] basis-[50%]" id="">
        {month.map((item:any)=>{return(<option value={item}>{item}</option>)})}
      </select>
      <select className="border rounded-[6px] basis-[20%]" name="" id="">
        {year.map((item:any)=>{return(<option value={item}>{item}</option>)})}
      </select>
    </div>
  );
}

export default DatePicker;
