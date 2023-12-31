import React from "react";

function WebApp() {
  return (
    <div className=" relative">
      <div className="w-[85%] min-h-[166px] mt-[9%]  border-t-[#45CBC2] border-b-[#45CBC2] border-l-[#45CBC2] font-kalameh text-[#064247]   font-bold rounded-tl-[8px] rounded-bl-[8px] border-[1px]">
        <p className="mx-[7.5%] text-[32px]  my-[2%]">
          هم اکنون عضو خانوادۀ بزرگ کلینیک دکتر مکارمی شوید!
        </p>
        <p className="mx-[7.5%] text-[20px]  ">
          وب اپلیکیشن دکتر مکارمی قابل نصب بر روی تمامی اپلیکیشن‌ها
        </p>
      </div>
      <p className="bg-[#45CBC2] mx-auto [@media(min-width:973px)]:absolute top-[60%] left-[20%] [@media(min-width:1110px)]:top-[20%] [@media(min-width:973px)]:bottom-[-10px] [@media(min-width:1110px)]:left-[10%] w-[255px]  text-[20px] px-8 py-8 h-[92px] text-center rounded-[10px] flex justify-center items-center flex-col font-iranSansLight">
        رزرو نوبت آنلاین <span className="block">در وب اپلیکیشن</span>
      </p>
    </div>
  );
}

export default WebApp;
