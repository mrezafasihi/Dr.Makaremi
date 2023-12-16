import React from "react";
import NavbarConfirm from "../../../components/user/NavbarConfirm";

function Fainalpay() {
  const resid = [
    { name: "زهرا محمد", code: 2355216, function: "مشاهده" },
    { name: "ستایش الوندی", code: 2355216, function: "مشاهده" },
  ];
  return (
    <div>
      <NavbarConfirm />
        <table className="w-[702px] h-[168px] table-auto mx-auto mt-[11%] font-IRANSansXFaNum gride justify-items-center border-[.5px] border-stone-200 rounded-[14.75px] text-center">
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
                  <td className="font-[400] text-[16px] text-[#757575]">{item.name}</td>
                  <td className="font-[400] text-[16px] text-[#757575]">{item.code}</td>
                  <td className="font-[400] text-[16px] text-[#288E87]"><button>{item.function}</button></td>
                </tr>
              </tbody>
            );
          })}
        </table>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="702"
          height="168"
          viewBox="0 0 702 168"
          fill="none"
        >
          <path
            d="M0.5 11.9439C0.5 5.62362 5.62362 0.5 11.9439 0.5H690.056C696.376 0.5 701.5 5.62362 701.5 11.9439V156.056C701.5 162.376 696.376 167.5 690.056 167.5H11.9439C5.62358 167.5 0.5 162.376 0.5 156.056V11.9439Z"
            fill="white"
            stroke="#EDEDEE"
          />
        </svg> */}
    </div>
  );
}

export default Fainalpay;
