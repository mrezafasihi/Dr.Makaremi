import React, { useEffect, useState } from "react";
import NavbarConfirm from "../../../components/user/NavbarConfirm";
import apiRequests from "@/Axios/config";
import Info from "@/components/user/Info";
import ResualtTestUser from "@/components/user/ResualtTestUser";
import TableVisitUser from "@/components/user/TableVisitUser";

function Fainalpay() {

  const resid = [
    { name: "زهرا محمد", code: 2355216, function: "مشاهده" },
    { name: "ستایش الوندی", code: 2355216, function: "مشاهده" },
  ];
  
  return (
    <div>
      <NavbarConfirm />
      <div className="flex flex-col justify-center items-center mt-[15%]   gap-[2%] [@media(min-width:900px)]:flex-row [@media(min-width:928px)]:items-end">
        <Info />
        <ResualtTestUser />
      </div>
      <TableVisitUser />
    </div>
  );
}

export default Fainalpay;
