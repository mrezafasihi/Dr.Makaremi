import React from "react";
import NavbarConfirm from "./user/NavbarConfirm";

function Information() {
  const dataofpayment = [
    {
      name: "علی مکارمی",
      date: "12/02/1402",
      lasttimes: "12",
      money: "300toman",
    },
  ];
  return (
    <div>
      <p className="1440px text-[16px] font-[400] mr-[23%] mt-[5%]">
        اطلاعات ثبت نوبت برای سرکار خانم
        <span className="mr-[.5%] text-[16px] font-[700]  ">زهرا محمدی</span>
      </p>
      <div>
        <table>
          
            
              {dataofpayment.map((item) => {
                return (
                  <tr>
                  <td>{item.name}</td>  
                   <td> {item.date}</td>
                   <td>{item.lasttimes}</td> 
                   <td> {item.money}</td> 
                  </tr>
                );
              })}
            
          
        </table>
      </div>
    </div>
  );
}

export default Information;
