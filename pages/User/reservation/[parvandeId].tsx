import React, { useEffect, useState } from "react";
import NavbarConfirm from "../../../components/user/NavbarConfirm";
import apiRequests from "@/Axios/config";
import Info from "@/components/user/Info";
import ResualtTestUser from "@/components/user/ResualtTestUser";
import TableVisitUser from "@/components/user/TableVisitUser";
import { useSearchParams } from "next/navigation";

function Fainalpay() {
  const test=useSearchParams()
  console.log(test)
  return (
    <div>
      <NavbarConfirm />
      <div className="flex flex-col justify-center items-center mt-[15%]   gap-[2%] [@media(min-width:900px)]:flex-row [@media(min-width:928px)]:items-end mb-[2%]">
        <Info />
        <ResualtTestUser />
      </div>
      <TableVisitUser />
    </div>
  );
}

export default Fainalpay;
