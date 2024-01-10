import React from "react";

export default function TableVisitUser() {
  const visit = [
    {
      reason: "ضعیفی چشم",
      date: "1402 / 02 / 28",
      time: "12:00",
      codePayment: 2355216,
    },
    {
      reason: "کدورت چشم",
      date: "1402 / 02 / 28",
      time: "12:00",
      codePayment: 2355216,
    },
    {
      reason: "عمل لازک",
      date: "1402 / 02 / 28",
      time: "12:00",
      codePayment: 2355216,
    },
    {
      reason: "ضعیفی چشم",
      date: "1402 / 02 / 28",
      time: "12:00",
      codePayment: 2355216,
    },
  ];
  return (
    <div className="border rounded-[11.9px] text-center max-w-[897px] mx-auto mb-[10%]">
      <table className="  w-full h-full ">
        <thead className="w-full h-[44px]">
          <tr className="w-full text-[12px] font-medium ">
            <th className="  ">علت مراجعه</th>
            <th className=" ">تاریخ مراجعه</th>
            <th className=" pr-[10%]">ساعت مراجعه</th>
            <th>کد پیگیری پرداخت</th>
            <th className=" flex items-center justify-center  text-[#45CBC2]  pt-[11px] ">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[3%]"
              >
                <path
                  d="M11.9482 6.8251H7.68252V11.0908C7.68252 11.56 7.29861 11.9439 6.82938 11.9439C6.36016 11.9439 5.97625 11.56 5.97625 11.0908V6.8251H1.71056C1.24133 6.8251 0.857422 6.44119 0.857422 5.97196C0.857422 5.50274 1.24133 5.11883 1.71056 5.11883H5.97625V0.853138C5.97625 0.383912 6.36016 0 6.82938 0C7.29861 0 7.68252 0.383912 7.68252 0.853138V5.11883H11.9482C12.4174 5.11883 12.8013 5.50274 12.8013 5.97196C12.8013 6.44119 12.4174 6.8251 11.9482 6.8251Z"
                  fill="#45CBC2"
                />
              </svg>
              نوبت جدید
            </th>
          </tr>
        </thead>
        <tbody className=" h-[132px] overflow-auto max-w-[896px]">
          {visit.map((item) => {
            return (
              <tr className="text-[#757575] text-[12px] font-medium odd:bg-[#f3fffe] h-[44px] max-w-[896px] ">
                <td className=" ">{item.reason}</td>
                <td style={{ direction: "ltr" }} className=" ">
                  {item.date}
                </td>
                <td className="pr-[10%] ">{item.time}</td>
                <td>{item.codePayment}</td>
                <td className=" text-[#0D0630] font-medium  ">مشاهده</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
