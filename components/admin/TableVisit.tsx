import React from "react";

export default function TableVisit() {
  const visit = [
    { reason: "ضعیفی چشم", date: "1402 / 02 / 28", time: "12:00" },
    { reason: "کدورت چشم", date: "1402 / 02 / 28", time: "12:00" },
    { reason: "عمل لازک", date: "1402 / 02 / 28", time: "12:00" },
    { reason: "ضعیفی چشم", date: "1402 / 02 / 28", time: "12:00" },
  ];
  return (
    <div className="border rounded-[11.9px] text-center w-[86.15%] mx-[6.92%] mb-[10%]">
      <table className="  w-full  ">
        <thead className="w-full h-[44px]">
          <tr className="w-full text-[12px] font-medium ">
            <th className="  ">علت مراجعه</th>
            <th className=" ">تاریخ مراجعه</th>
            <th className=" pr-[10%]">ساعت مراجعه</th>
            <th></th>
            <th className=" flex items-center justify-end  text-[#45CBC2] pl-[15%] pt-[6%] ">
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
                <td className=" text-[#0D0630] font-medium  pr-[40%]">
                  مشاهده
                </td>
                <td className=" flex flex-col items-center justify-center mt-[4%] h-full  pr-[65%] ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9999 3.98617C11.7799 3.76617 9.54655 3.65283 7.31988 3.65283C5.99988 3.65283 4.67988 3.7195 3.35988 3.85283L1.99988 3.98617"
                      fill="#C70000"
                    />
                    <path
                      d="M13.9999 3.98617C11.7799 3.76617 9.54655 3.65283 7.31988 3.65283C5.99988 3.65283 4.67988 3.7195 3.35988 3.85283L1.99988 3.98617"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66663 3.3135L5.81329 2.44016C5.91996 1.80683 5.99996 1.3335 7.12663 1.3335H8.87329C9.99996 1.3335 10.0866 1.8335 10.1866 2.44683L10.3333 3.3135"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5667 6.09326L12.1334 12.8066C12.06 13.8533 12 14.6666 10.14 14.6666H5.86002C4.00002 14.6666 3.94002 13.8533 3.86668 12.8066L3.43335 6.09326"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.88672 11H9.10672"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.33337 8.3335H9.66671"
                      stroke="#C70000"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#C70000] text-[10px] font-iranSansLight">
                    حذف
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
