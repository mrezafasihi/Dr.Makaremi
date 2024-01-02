import Layout from "@/pages/admin/Layout";
import React from "react";

function turnraiting() {
  return (
    <Layout>
      <div className="flex items-center">
        <p className="text-[16px] text-[#45CBC2]">نوبت‌دهی</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          className="mx-[2%]"
        >
          <path
            d="M8 1.5L2 7L8 12.5"
            stroke="#064247"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <p className="text-[20px] text-[#757575]">ستایش الوندی</p>
      </div>
    </Layout>
  );
}

export default turnraiting;
