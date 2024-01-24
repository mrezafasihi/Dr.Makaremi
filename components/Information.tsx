import React, { useEffect, useState } from "react";
import NavbarConfirm from "./user/NavbarConfirm";
import apiRequests from "@/Axios/config";
import moment from "jalali-moment";
function Information() {
  const [shamsi, setShamsi] = useState<any>();
  const [selectedPatient, setSelectedPatient] = useState<any>({});
  const [accept, setAccept] = useState<any>(false);
  const [infoDate, setInfoDate] = useState<any>();
  useEffect(() => {
    getData();
    let text: any = localStorage.getItem("selectedPatient");
    setSelectedPatient(JSON.parse(text));
    // setTest(infoDate.day.date)
  }, []);
  const getData = () => {
    const idReserve = localStorage.getItem("idReserve");
    const token = localStorage.getItem("token");
    apiRequests
      .get(`/api/time/${idReserve}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        let date = res.data.data.day.date;
        setInfoDate(res.data.data);
        setShamsi(moment(date, "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD"));
      });
  };

  return (
    <div>
      <p className=" text-[16px]  mr-[23%] mt-[5%] text-[#0D0630] ">
        اطلاعات ثبت نوبت برای{" "}
        <span className="text-[#0D0630]">
          {selectedPatient.gender == "مرد" ? "جناب آقای" : "سرکار خانم"}
        </span>{" "}
        <span className=" text-[16px] font-iranSansBold text-[#064247] ">
          {selectedPatient.first_name} <span>{selectedPatient.last_name}</span>
        </span>
      </p>
      <div>
        <table
          className=" w-[862px] h-[116.086px]  mx-auto mt-[7%] font-IRANSansXFaNum  border-[.5px] border-stone-200   rounded-[10px]
         text-center "
        >
          <thead className="mt-[5%] h-[50%] ">
            <tr>
              <th className="font-[700] text-[16px]">دکتر</th>
              <th className="font-[700] text-[16px]">روز</th>
              <th className="font-[700] text-[16px]">ساعت مراجعه</th>
              <th className="font-[700] text-[16px]">مبلغ پیش‌ پرداخت</th>
            </tr>
          </thead>

          <tbody className="even:bg-[#F2FFFE]">
            <tr>
              <td className="font-[400] text-[16px]">علی مکارمی</td>
              <td className="font-[400] text-[16px]">{shamsi}</td>
              <td className="font-[400] text-[16px]">{infoDate?.start_time}</td>
              <td className="font-[400] text-[16px]"> {infoDate?.cost}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-[862px] h-[235.815px] border-[.5px] border-stone-200 rounded-[10px] mx-auto mt-[5%]">
        <p className=" pr-[5%] pt-[3%]">
          به مرکز اجازه تصرف پیش‌پرداخت را می‌دهم.
        </p>
        <p className="mt-[5%] w-[100%] pr-[5%]">
          چناچه نوبت را اخذ نمودید نوبت شما قطعی می‌باشد و تا ۱ روز قبل امکان
          مرجوع آن وجود ندارد با شماره پیگیری خود به مرکز درمانی مراجعه نمایید
          پذیرش دریافت کنید و بعد از پذیرش میتوانید به پزشک مراجعه نمایید. (نوبت
          اخذ شده توسط شما محفوظ میباشد.)
        </p>
        <div className="flex items-center ">
          <div className="inline-flex items-center pr-[3%]">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer  mt-[20%]"
              htmlFor="check"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check"
                onClick={() => setAccept(!accept)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className=" font-400 text-gray-500 cursor-pointer select-none text-[16px] mt-[20%] "
              htmlFor="check"
            >
              موارد بالا را می پذیرم
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-[200px] h-[53.226px] rounded-[6.422px] text-white bg-[#288E87] mt-[5%]">
          تایید و پرداخت
        </button>
      </div>
    </div>
  );
}

export default Information;
