import NavbarConfirm from "@/components/user/NavbarConfirm";
import React from "react";
import Layout from "../Layout";
import Link from "next/link";
function index() {
  const member = [
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 1,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
      tik:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
      <path d="M0 5.10113L3.92004 7.98645L10.2146 1.04892L8.96988 0L3.69358 5.81528L1.0017 3.83382L0 5.10113ZM16 1.04892L14.7553 0L9.4914 5.80173L8.86905 5.32191L7.83594 6.5669L9.69306 8L16 1.04892Z" fill="#83DCD6"/>
    </svg>,
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 2,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 3,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 4,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 5,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },

    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 6,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 7,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 8,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 9,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 10,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
    {
      name: "امیر رئیسی",
      describtion: "ممنونم آقای دکتر",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
      id: 11,
      circle: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            fill="#45CBC2"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      ),
    },
  ];
  return (
    <Layout>
      <div className=" flex flex-col justify-center w-[84.45%] mx-auto ">
        <p className="text-[#45CBC2] text-[16px] mt-[3%] mb-[1%] font-bold">
          پیام‌ها
        </p>
        {member.map((item ,index) => {
          if (index===0) {
            return(<div>
<Link href={`/admin/messege/${item.id}`}>
                <div className="max-w-[875px] h-[90px] border-gray-200 border-[1px]  mt-[10px] flex justify-between rounded-md">
                  <div className="flex flexcol mt-[2%] mr-[2%] w-[35%]">
                    <div className="flex flex-col">
                      <img
                        className="w-[63px] h-[63px] rounded-full bg-zinc-100"
                        src={item.img}
                        alt="img"
                      />
                      <div className="w-[12px] h-[12px] absolute translate-y-12 -translate-x-1 "> {item.circle}</div>
                    </div>
                    <div className="mr-[5%]">
                      <p className="text-[#0D0630] text-[18px]">{item.name}</p>
                     <div className="flex items-center">
                     <p className="text-[#757575] text-[16px]">
                        {item.describtion}
                      </p>
                      <div className="mr-[8px]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none" >
  <path d="M0 5.10113L3.92004 7.98645L10.2146 1.04892L8.96988 0L3.69358 5.81528L1.0017 3.83382L0 5.10113ZM16 1.04892L14.7553 0L9.4914 5.80173L8.86905 5.32191L7.83594 6.5669L9.69306 8L16 1.04892Z" fill="#83DCD6"/>
</svg></div>
                     </div>
                    </div>
                  </div>
                  <div className="mt-[3%] ml-[3%]">
                    <p className="w-[28px] h-[20px] text-[12px]">{item.clock}</p>
  
                     
                  </div>
                </div>
              </Link>
            </div>)
    
          }
          else{
            return (
              <Link href={`/admin/messege/${item.id}`}>
                <div className="max-w-[875px] h-[90px] border-gray-200 border-[1px]  mt-[10px] flex justify-between rounded-md">
                  <div className="flex flexcol mt-[2%] mr-[2%] w-[35%]">
                    <div className="flex flex-col">
                      <img
                        className="w-[63px] h-[63px] rounded-full bg-zinc-100"
                        src={item.img}
                        alt="img"
                      />
                      <div className="w-[12px] h-[12px] absolute translate-y-12 -translate-x-1 "> {item.circle}</div>
                    </div>
                    <div className="mr-[5%]">
                      <p className="text-[#0D0630] text-[18px]">{item.name}</p>
                      <p className="text-[#757575] text-[16px]">
                        {item.describtion}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[3%] ml-[3%]">
                    <p className="w-[28px] h-[20px] text-[12px]">{item.clock}</p>
  
                    <p className="text-[White] bg-[#45CBC2] rounded-[12px] h-[20px] w-[27px] text-center">
                      {item.notification}
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
         
        })}
      </div>
    </Layout>
  );
}

export default index;
