import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function PersonalInfoPatient({ onDataUpdate }: any) {
  const [patient, setPatient] = useState<any>([]);

  const router = useRouter();
  const query = router.query.patientId;
  console.log(query);

  useEffect(() => {
    const { patientId } = router.query;
    {
      patientId ? getData() : null;
    }
  }, [query]);
  const getData = () => {
    const token = localStorage.getItem("token");
    const query = router.query.patientId;
    console.log(query);
    apiRequests
      .get(`/api/document/${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setPatient(res.data.data), console.log(res);
        onDataUpdate(res.data.data);
        // localStorage.setItem("idTestResult", res.data.data.test_result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col text-[#757575] max-w-[482px] border rounded-[11.94px] h-[289px]">
      <div className="flex justify-center mt-[25px]">
        <p className="font-iranSansBold">اطلاعات شخصی</p>
        <div className="flex flex-col items-center mr-[39%]">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.54317 8.19369H15.6177V9.91862H17.3427V4.74382C17.3427 3.7951 16.5664 3.01888 15.6177 3.01888H14.7552V1.29395H13.0303V3.01888H6.13057V1.29395H4.40564V3.01888H3.54317C2.58583 3.01888 1.82686 3.7951 1.82686 4.74382L1.81824 16.8184C1.81824 17.7671 2.58583 18.5433 3.54317 18.5433H9.58044V16.8184H3.54317V8.19369ZM3.54317 4.74382H15.6177V6.46875H3.54317V4.74382ZM18.9296 13.61L18.3172 14.2223L16.4888 12.3939L17.1012 11.7815C17.4375 11.4452 17.9809 11.4452 18.3172 11.7815L18.9296 12.3939C19.266 12.7303 19.266 13.2736 18.9296 13.61ZM15.8765 13.0063L17.7049 14.8347L13.1338 19.4058H11.3054V17.5773L15.8765 13.0063Z"
              fill="#190C5D"
            />
          </svg>
          <p className="text-[#190C5D] ">ویرایش اطلاعات</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col ml-[4%] ">
          <label className="font-iranSansLight">تاریخ تولد</label>
          <input
            className="border rounded-[3.1px] h-[28.67px] "
            type="text"
            value={"۱۳۳۰/۰۵/۲۳"}
          />
        </div>
        <div className="flex flex-col mr-[4%]">
          <label className="block font-iranSansLight">آدرس</label>
          <input
            className="border rounded-[3.1px] h-[28.67px]"
            type="text"
            value={patient.address}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col ml-[4%] ">
          <label className="font-iranSansLight" htmlFor="">
            شهر
          </label>
          <input
            className="border rounded-[3.1px]"
            type="text"
            value={patient.city}
          />
        </div>
        <div className="flex flex-col mr-[4%]">
          <label className="font-iranSansLight" htmlFor="">
            جنسیت
          </label>
          <input
            className="border rounded-[3.1px]"
            type="text"
            value={patient.gender}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col ml-[4%]">
          <label className="font-iranSansLight" htmlFor="">
            تاریخ اولین ویزیت
          </label>
          <input
            className="border rounded-[3.1px] placeholder:font-iranSansLight"
            type="text"
            value={"۱۴۰۲/۰۵/۱۰"}
          />
        </div>
        <div className="flex flex-col mr-[4%]">
          <label className="font-iranSansLight" htmlFor="">
            شماره تلفن{" "}
          </label>
          <input
            className="border rounded-[3.1px]"
            type="text"
            value={patient.phone_number}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoPatient;
