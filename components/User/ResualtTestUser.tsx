import React from "react";

function ResualtTestUser() {
  const medicalTest = [
    { title: "اپتومتیک", date: "1402 / 02 / 28" },
    { title: "آزمایش فشار چشم", date: "1402 / 02 / 10" },
    { title: "عکس‌برداری", date: "1402 / 02 / 06" },
  ];
  return (
    <div className="max-w-[482px] ">
      <p className="text-[12px] text-[#064247]">نتایج آزمایشات</p>
      <div className="border  border-[#EDEDEE] rounded-[11.94px] text-center w-full h-[138px] overflow-auto ">
        <table className=" w-full h-full">
          <tbody className="w-full h-[46px] text-center">
            {medicalTest.map((item) => {
              return (
                <tr className=" text-right  odd:bg-[#f3fffe] ">
                  <td className=" text-[#757575]  pr-[4.9%] text-[12px]">
                    {item.title}
                  </td>
                  <td
                    style={{ direction: "ltr" }}
                    className="text-[#757575] font-iranSansLight pr-[5%] text-[12px] "
                  >
                    {item.date}
                  </td>
                  <td className="text-[#0D0630] pr-[9%] opacity-80 text-[12px] font-iranSansMedium">
                    مشاهده
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResualtTestUser;
