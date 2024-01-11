import React from "react";
import Layout from "../Layout";
import Link from "next/link";

function Search() {
  const patient = [
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
    {
      name: "ستایش الوندی",
      parvande: "شماره پرونده",
      shomare: 1552,
      codemeli: "کد ملی",
      shomaremeli: 2220336698,
      lasttime: "آخرین تاریخ مراجعه",
      lastdate: "23 فروردین 1402",
      button: "نوبت بده!",
      img: "/images/landin/smiling.png",
    },
  ];
  return (
    <Layout>
      <div className="mr-[8%] mt-[3%]">
        <p className="text-[#45CBC2] text-[16px] font-bold mb-[2%]">  </p>
        <p className="text-[16px] text-[#064247] mb-[1%]">جست‌و‌جوی بیمار</p>
       <div className="flex border-[1px] border-[#c5c4c4] rounded-[6.422px] w-[30%] h-[8%] items-center ">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          className="m-[2%]"
        >
          <circle
            cx="9.76663"
            cy="9.76688"
            r="8.98856"
            stroke="#757575"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0183 16.4854L19.5423 20.0002"
            stroke="#757575"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
       <input
          type="text"
          placeholder="جست و جوی نام بیمار، شماره پرونده و ..."
        />
        
       </div>
        <div className="flex mt-[1%] mb-[5%]">
          <p className="text-[12px] text-[#064247]">بیمار وجود ندارد؟</p>
          <p className="text-[12px] text-[#064247]">تشکیل پرونده جدید</p>
        </div>
        {patient.map((item) => {
          return (
            <div className="mt-[2%] flex border-[1px] border-gray-200 w-[90%] h-[14%] items-center  rounded-[6.422px] ">
              <img
                className="w-[56px] h-[57px] rounded-full bg-gray-200 mr-[2%]"
                src={item.img}
              />
              <div className="flex flex-col mr-[2%] ml-[10%] text-center">
                <p className="text-[#0D0630] text-[16px] font-IRANSansXFaNum font-medium">
                  {item.name}
                </p>
                <p className="text-[#757575)] text-[12px] font-light">
                  شماره پرونده
                </p>
                <p className=" text-[12px] font-light"> {item.shomare}</p>
              </div>
              <div className="flex flex-col text-center ml-[10%]">
                <p className="text-[#757575] text-[12px] font-light">
                کد ملی
                </p>

                <p className="text-[12px] font-light"> {item.shomaremeli}</p>
              </div>
              <div className="flex flex-col text-center ml-[10%]">
                <p className="text-[12px] text-[#757575]"> آخرین تاریخ مراجعه</p>
                <p className="text-[12px] font-light"> {item.lastdate}</p>
              </div>
              <Link href={"/admin/reservation/time"}>
              <button className="text-[#45CBC2] text-[16px] border-[1px] border-[#45CBC2] w-[161px] h-[48px] mr-[40%]  rounded-[6.422px]">
               
              نوبت بده!
              </button>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Search;
