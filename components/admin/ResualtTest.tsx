import React from "react";

function ResualtTest() {
  const medicalTest = [
    { title: "اپتومتیک", date: "۱۴۰۲/۰۲/۲۸" },
    { title: "آزمایش فشار چشم", date: "۱۴۰۲/۰۲/۱۰" },
    { title: "عکس‌برداری", date: "۱۴۰۲/۰۲/۰۶" },
  ];
  return (
    <div className="border  border-[#EDEDEE] rounded-[11.94px] text-center w-[482px] h-[189px] ">
      <table className="w-full h-full">
        <thead className="even:bg-black">
          <tr className="w-full">
            <th className="text-right border ">نتایج آزمایشات</th>
            <th className="text-[#45CBC2]">
              <div className="flex items-center justify-end text-[12px]">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9482 6.8251H7.68252V11.0908C7.68252 11.56 7.29861 11.9439 6.82938 11.9439C6.36016 11.9439 5.97625 11.56 5.97625 11.0908V6.8251H1.71056C1.24133 6.8251 0.857422 6.44119 0.857422 5.97196C0.857422 5.50274 1.24133 5.11883 1.71056 5.11883H5.97625V0.853138C5.97625 0.383912 6.36016 0 6.82938 0C7.29861 0 7.68252 0.383912 7.68252 0.853138V5.11883H11.9482C12.4174 5.11883 12.8013 5.50274 12.8013 5.97196C12.8013 6.44119 12.4174 6.8251 11.9482 6.8251Z"
                    fill="#45CBC2"
                  />
                </svg>
                افزودن گزارش
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="h-[46px]">
          {medicalTest.map((item) => {
            return (
              <tr className=" text-right  odd:bg-[#f3fffe] ">
                <td className="  pr-[4.9%]">{item.title}</td>
                <div className="flex justify-between">
                  <td className=" ">{item.date}</td>
                  <td className=" ">مشاهده</td>
                  <td className=" pl-[4.9%]">
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
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.66663 3.3135L5.81329 2.44016C5.91996 1.80683 5.99996 1.3335 7.12663 1.3335H8.87329C9.99996 1.3335 10.0866 1.8335 10.1866 2.44683L10.3333 3.3135"
                        stroke="#C70000"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5667 6.09326L12.1334 12.8066C12.06 13.8533 12 14.6666 10.14 14.6666H5.86002C4.00002 14.6666 3.94002 13.8533 3.86668 12.8066L3.43335 6.09326"
                        stroke="#C70000"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.88672 11H9.10672"
                        stroke="#C70000"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.33337 8.3335H9.66671"
                        stroke="#C70000"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-[#C70000] text-[10px] font-light">حذف</p>
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResualtTest;
