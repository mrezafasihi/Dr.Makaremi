import React, { useEffect, useState } from "react";
import apiRequests from "@/Axios/config";

const Info = () => {
  const [patient, setPatient] = useState<any>();
  const [test, setTest] = useState<any>();
  
  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    console.log(id);
    console.log(token);

    apiRequests
      .get(`/api/document/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res), setPatient(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  console.log(patient)
  return (
    <div className="flex  w-[389px] h-[138px]  rounded-[12px] border-[0.5px] justify-evenly items-center shadow-[0_4px_10px_0_rgba(0,0,0,0.07)] ">
      <div className="relative bg-[#ededee] sm:rounded-full rounded-full w-[90px] h-[90px] mt-[8] justify-center">
        <div className="bg-white  rounded-full w-[27px] h-[27px] absolute bottom-0 right-4 ">
          <svg
            className="absolute bottom-[1.5px] right-[1.5px] bg-[#D6F3F1] px-1 py-1 rounded-full w-[24px] h-[24px]"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99999 6.66667C6.73637 6.66667 7.33332 6.06971 7.33332 5.33333C7.33332 4.59695 6.73637 4 5.99999 4C5.26361 4 4.66666 4.59695 4.66666 5.33333C4.66666 6.06971 5.26361 6.66667 5.99999 6.66667Z"
              stroke="#064247"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66668 1.3335H6.00001C2.66668 1.3335 1.33334 2.66683 1.33334 6.00016V10.0002C1.33334 13.3335 2.66668 14.6668 6.00001 14.6668H10C13.3333 14.6668 14.6667 13.3335 14.6667 10.0002V6.66683"
              stroke="#064247"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 3.3335H14.1667"
              stroke="#064247"
              strokeLinecap="round"
            />
            <path
              d="M12.3333 5.16667V1.5"
              stroke="#064247"
              strokeLinecap="round"
            />
            <path
              d="M1.78 12.6335L5.06667 10.4269C5.59333 10.0735 6.35333 10.1135 6.82667 10.5202L7.04667 10.7135C7.56667 11.1602 8.40667 11.1602 8.92667 10.7135L11.7 8.33354C12.22 7.88687 13.06 7.88687 13.58 8.33354L14.6667 9.26687"
              stroke="#064247"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <img className="rounded-full" src="/images/landin/smiling.png" alt="" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#064247] font-iranSansBold">
          {patient?.first_name} <span>{patient?.last_name}</span>
          
        </h3>
        <p className="text-[#757575]  text-[12px] font-iranSansLight">
          شماره پرونده : <span>23664</span>
        </p>
      </div>
      <div>
        <p className="text-[#757575] text-[12px] font-iranSansLight">
          تعداد ویزیت‌ها
        </p>
        <p className="text-[#064247] text-[12px] font-iranSansLight">
          <span>3</span>ویزیت
        </p>
      </div>
    </div>
  );
};

export default Info;
