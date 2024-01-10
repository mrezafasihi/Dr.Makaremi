import React, { useEffect } from "react";
import NavbarConfirm from "../../../components/user/NavbarConfirm";
import apiRequests from "@/Axios/config";
import Info from "@/components/user/Info";
import ResualtTestUser from "@/components/user/ResualtTestUser";
import TableVisitUser from "@/components/user/TableVisitUser";

function Fainalpay() {
  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    console.log(id);
    console.log(token);
    apiRequests
      .get(`/api/document/:${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const resid = [
    { name: "زهرا محمد", code: 2355216, function: "مشاهده" },
    { name: "ستایش الوندی", code: 2355216, function: "مشاهده" },
  ];
  return (
    <div>
      <NavbarConfirm />
      {/* <table className="w-[702px] h-[168px] table-auto mx-auto mt-[11%] font-IRANSansXFaNum gride justify-items-center border-[.5px] border-stone-200 rounded-[14.75px] text-center">
        <thead className="h-[30%]">
          <tr>
            <th className="font-[400] text-[16px]">شرح</th>
            <th className="font-[400] text-[16px]">کد پیگیری پرداخت</th>
            <th className="font-[400] text-[16px]">عملیات </th>
          </tr>
        </thead>
        {resid.map((item) => {
          return (
            <tbody className="even:bg-[#F2FFFE]">
              <tr>
                <td className="font-[400] text-[16px] text-[#757575]">
                  {item.name}
                </td>
                <td className="font-[400] text-[16px] text-[#757575]">
                  {item.code}
                </td>
                <td className="font-[400] text-[16px] text-[#288E87]">
                  <button>{item.function}</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table> */}

      <div className="flex flex-col justify-center items-center mt-[15%]   gap-[2%] [@media(min-width:900px)]:flex-row [@media(min-width:928px)]:items-end">
        <Info />
        <ResualtTestUser />
      </div>
      <TableVisitUser />
    </div>
  );
}

export default Fainalpay;
