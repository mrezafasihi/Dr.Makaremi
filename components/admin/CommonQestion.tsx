import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CommonQestion() {
  const [dataCommonQestion, setDataCommnQestion] = useState<any>([]);
const route=useRouter()
  useEffect(() => {
    qestion();
  }, []);
  const qestion = () => {
    const token = localStorage.getItem("token");
    apiRequests
      .get("/api/questions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDataCommnQestion(res.data.data));
  };
  console.log(dataCommonQestion);
//   const edit =()=>{
//     const token = localStorage.getItem("token");
// apiRequests.put('/api/questions/:question_id',{
//   "question": "question edited",
//   "answer": "answer edited"
// }, {
//   headers: { Authorization: `Bearer ${token}` },
// })
//   }


  const deleteQ=(idQ:any)=>{
    const token = localStorage.getItem("token");

apiRequests.delete(`/api/questions/${idQ}`,{
  headers: { Authorization: `Bearer ${token}` },
}).then((res)=>route.reload())
  }
  // const dataCommonQ = [
  //   {
  //     title: "بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟",
  //     desc: "حساسیت به نور، سوزش مختصرچشم‌ها، اشک ریزش بعد از عمل و ورم پلک‌ها در چند روز اول طبیعی است. از داروها طبق دستور استفاده نمایید. درروز اول بعد از عمل برای کم کردن درد از کمپرس سرد استفاده کنید. به این‌صورت که خرده‌های یخ را داخل نایلون ریخته و در دستمال گذاشته و 5 دقیقه روی چشم بگذارید.",
  //   },
  //   {
  //     title: "بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟",
  //     desc: "حساسیت به نور، سوزش مختصرچشم‌ها، اشک ریزش بعد از عمل و ورم پلک‌ها در چند روز اول طبیعی است. از داروها طبق دستور استفاده نمایید. درروز اول بعد از عمل برای کم کردن درد از کمپرس سرد استفاده کنید. به این‌صورت که خرده‌های یخ را داخل نایلون ریخته و در دستمال گذاشته و 5 دقیقه روی چشم بگذارید.",
  //   },
  //   {
  //     title: "بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟",
  //     desc: "حساسیت به نور، سوزش مختصرچشم‌ها، اشک ریزش بعد از عمل و ورم پلک‌ها در چند روز اول طبیعی است. از داروها طبق دستور استفاده نمایید. درروز اول بعد از عمل برای کم کردن درد از کمپرس سرد استفاده کنید. به این‌صورت که خرده‌های یخ را داخل نایلون ریخته و در دستمال گذاشته و 5 دقیقه روی چشم بگذارید.",
  //   },
  //   {
  //     title: "بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟",
  //     desc: "حساسیت به نور، سوزش مختصرچشم‌ها، اشک ریزش بعد از عمل و ورم پلک‌ها در چند روز اول طبیعی است. از داروها طبق دستور استفاده نمایید. درروز اول بعد از عمل برای کم کردن درد از کمپرس سرد استفاده کنید. به این‌صورت که خرده‌های یخ را داخل نایلون ریخته و در دستمال گذاشته و 5 دقیقه روی چشم بگذارید.",
  //   },
  //   {
  //     title: "بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟",
  //     desc: "حساسیت به نور، سوزش مختصرچشم‌ها، اشک ریزش بعد از عمل و ورم پلک‌ها در چند روز اول طبیعی است. از داروها طبق دستور استفاده نمایید. درروز اول بعد از عمل برای کم کردن درد از کمپرس سرد استفاده کنید. به این‌صورت که خرده‌های یخ را داخل نایلون ریخته و در دستمال گذاشته و 5 دقیقه روی چشم بگذارید.",
  //   },
  //   {
  //     title: "بعد از عمل لازک چشم چه علایم موقتی پدیدار می شود؟",
  //     desc: "حساسیت به نور، سوزش مختصرچشم‌ها، اشک ریزش بعد از عمل و ورم پلک‌ها در چند روز اول طبیعی است. از داروها طبق دستور استفاده نمایید. درروز اول بعد از عمل برای کم کردن درد از کمپرس سرد استفاده کنید. به این‌صورت که خرده‌های یخ را داخل نایلون ریخته و در دستمال گذاشته و 5 دقیقه روی چشم بگذارید.",
  //   },
  // ];
  return (
    <div
      style={{ direction: "ltr" }}
      className="flex flex-col h-[476px] overflow-auto  max-w-[824px] justify-between gap-[5%]"
    >
      {dataCommonQestion?.map((item: any) => {
        return (
          <div className="flex flex-col h-[167px] max-w-[802px] justify-between ">
            <div className="flex text-[#3F1EE3] justify-between h-[24px] mb-6 ">
              <h4 key={item.id}> {item.question}</h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // onClick={edit}
              >
                <path
                  d="M13.26 3.60022L5.05 12.2902C4.74 12.6202 4.44 13.2702 4.38 13.7202L4.01 16.9602C3.88 18.1302 4.72 18.9302 5.88 18.7302L9.1 18.1802C9.55 18.1002 10.18 17.7702 10.49 17.4302L18.7 8.74022C20.12 7.24022 20.76 5.53022 18.55 3.44022C16.35 1.37022 14.68 2.10022 13.26 3.60022Z"
                  stroke="#0D0630"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.89 5.0498C12.32 7.8098 14.56 9.9198 17.34 10.1998"
                  stroke="#064247"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 22H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                onClick={()=>deleteQ(item.id)}
              >
                <path
                  d="M18.7622 5.15682C15.8902 4.87221 13.0009 4.72559 10.1203 4.72559C8.4126 4.72559 6.70491 4.81183 4.99723 4.98433L3.23779 5.15682"
                  fill="#C70000"
                />
                <path
                  d="M18.7622 5.15682C15.8902 4.87221 13.0009 4.72559 10.1203 4.72559C8.4126 4.72559 6.70491 4.81183 4.99723 4.98433L3.23779 5.15682"
                  stroke="#C70000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.98157 4.28711L8.17131 3.15728C8.30931 2.33794 8.4128 1.72559 9.87037 1.72559H12.13C13.5876 1.72559 13.6997 2.37244 13.8291 3.16591L14.0188 4.28711"
                  stroke="#C70000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9082 7.8833L16.3476 16.5683C16.2527 17.9224 16.1751 18.9746 13.7688 18.9746H8.23179C5.8255 18.9746 5.74788 17.9224 5.65301 16.5683L5.09241 7.8833"
                  stroke="#C70000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.55969 14.2305H12.4317"
                  stroke="#C70000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.84363 10.7812H13.156"
                  stroke="#C70000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[14px] font-light text-[#757575] h-[62px] mr-[1.5%]">
              {item.answer}
            </p>
            <hr className="w-[417px] mr-[2%]" />
          </div>
        );
      })}
    </div>
  );
}

export default CommonQestion;
