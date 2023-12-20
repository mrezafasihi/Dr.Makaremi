import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Layout({ children }: any) {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="flex flex-col  basis-[72%]">
        <Navbar />
        
        
        {children}
       
      </div>
    </div>
  );
}

export default Layout;
