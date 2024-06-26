import React from "react";

function CountCard() {
  const dataCount = [
    { icon: "/images/edit.png", title: "تعداد مقاله معتبر", count: 20 },
    {
      icon: "/images/document-normal.png",
      title: "تعداد جراحی سالیانه",
      count: "8627",
    },
    { icon: "/images/eye.png", title: "تعداد جراحی لیزیک", count: 2720 },
    { icon: "/images/people.png", title: "تعداد مراجعه کننده", count: 14019 },
  ];
  return (
    // <div className="flex flex-col md:flex-row mx-[16%] ">
    //   {dataCount.map((item) => {
    //     return (
    //       <div className="border-[1px] shadow-[0px_30px_60px_0px_rgba(37, 37, 37, 0.15)] flex items-center justify-center space-y-3 flex-col  my-[5%] sm:w-1/2 md:w-1/3 lg:1/4 h-[222px] rounded-[12.32px] font-bold mx-[1%]">
    //         <div className="flex flex-col items-center">
    //           <img className="w-8" src={item.icon} alt="" />
    //           <p className="text-[#064247]">{item.title}</p>
    //         </div>
    //         <p className="font-kalameh text-[30px] lg:text-[56px] text-[#190C5D]">
    //           {item.count}
    //         </p>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="flex flex-col justify-between md:flex-row flex-wrap  gap-[2%] mx-[16%] ">
      {dataCount.map((item) => {
        return (
          <div className="border-[1px] shadow-[0px_30px_60px_0px_rgba(37, 37, 37, 0.15)] flex items-center justify-center flex-col my-5 md:w-[40%] lg:w-[22.5%] h-[222px] rounded-[12.32px] font-bold  py-[5%]">
            <div className="flex flex-col  items-center">
              <img className="w-8" src={item.icon} alt="" />
              <p className="text-[#064247]">{item.title}</p>
            </div>
            <p className="font-kalameh text-[30px] lg:text-[56px] text-[#190C5D]">
              {item.count}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CountCard;
