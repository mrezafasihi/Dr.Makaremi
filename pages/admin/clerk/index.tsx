import AddClerk from "@/components/admin/AddClerk";
import React from "react";
import Layout from "../Layout";
import Clerks from "@/components/admin/Clerks";

function index() {
  return (
    <Layout>
      <h6 className="font-bold text-[#45CBC2] mt-[2.78%]">ادمین‌ها</h6>
      <AddClerk />
      <Clerks/>
    </Layout>

  );
}

export default index;
