import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import PatientInfo from "@/components/admin/PatientInfo";
import PersonalInfoPatient from "@/components/admin/PersonalInfoPatient";
import ResualtTest from "@/components/admin/ResualtTest";
import TableVisit from "@/components/admin/TableVisit";
import Link from "next/link";

import { useRouter } from "next/router";


function PatientId() {
  const router = useRouter();
  const [sharedData,setSharedData]=useState([])
  
  return (
    <Layout>
      <div>
        <div className="flex items-center mb-[2%] mt-[4%] mr-[6%]">
          <Link
            href={"/admin/myPatient"}
            className="ml-[1%] text-[#45CBC2] font-bold"
          >
            بیماران من
          </Link>
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L2 6.5L8 12"
              stroke="#288E87"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="mr-[1%] text-[#757575] font-bold text-[20px]">
            امیر رئیسی
          </p>
        </div>
        <div className="flex justify-center">
          <PatientInfo  />
          <div className="flex flex-col basis-[46.34%] mr-[2%] justify-between">
            <PersonalInfoPatient onDataUpdate={(data:any)=>setSharedData(data)} />
            <ResualtTest data={sharedData} />
          </div>
        </div>
        <h6 className="font-bold text-[#064247] mr-[6%] mt-[2%] mb-[1%]">
          ویزیت‌ ها
        </h6>
        <TableVisit />
      </div>
    </Layout>
  );
}

export default PatientId;
