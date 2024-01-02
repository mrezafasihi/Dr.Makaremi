import AddClerk from "@/components/admin/AddClerk";
import React from "react";
import Layout from "../Layout";
import Clerks from "@/components/admin/Clerks";

function index() {
  return (
    <Layout>
      <h6 className=" text-[#45CBC2] mr-[5%] mt-[2.78%] font-iranSansBold">ادمین‌ها</h6>
      <AddClerk />
      <Clerks/>
    </Layout>

  );
}

export default index;
