import NavbarConfirm from "@/components/user/NavbarConfirm";
import React from "react";
import Layout from "./Layout";

function messege() {
  const member = [
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",
    },
   
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",

    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",

    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",

    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",

    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",

    },
    {
      name: "امیر رئیسی",
      describtion: "با این شماره تماس بگیرید",
      clock: "16:04",
      notification: 5,
      img: "/images/landin/smiling.png",

    },
   
  ];
  return (
    <Layout>
      <div className=" flex flex-col justify-center w-[84.45%] mx-auto">
        {member.map((item) => {
          return (
            <div className="max-w-[875px] h-[90px] borde-[.5px] border-[.5px] border-stone-200 mt-[10px] flex justify-between">
              <div className="flex flexcol mt-[2%] mr-[2%] w-[35%]" >
                <img className="w-[63px] h-[63px] rounded-full bg-zinc-100" src={item.img} alt="img" />

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
          );
        })}
      </div>
    </Layout>
  );
}

export default messege;
