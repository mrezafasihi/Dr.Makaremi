import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Link from "next/link";
import React from "react";

function Layout({ children }: any) {
  const layoutData = [
    { icon: "", title: "بیماران من", path: "/admin" },
    { icon: "", title: "آمار کلی", path: "" },
    { icon: "", title: "نوبت دهی", path: "" },
    { icon: "", title: "پرداخت ها", path: "" },
    { icon: "", title: "جدول زمانبندی", path: "" },
    { icon: "", title: "پیام ها", path: "" },
    { icon: "", title: "بلاگ", path: "" },
    { icon: "", title: "نظرات کاربران", path: "" },
    { icon: "", title: "ادمین‌ها", path: "" },
    { icon: "", title: "تغییر اطلاعات", path: "" },
    { icon: "", title: "خروج از حساب کاربری", path: "" },
  ];
  return (
    <div className="flex">
      <div className="flex flex-col">
        {layoutData.map((item) => {
          return (
            <div className="flex flex-col">
              <Link href={item.path}>{item.title}</Link>
            </div>
          );
        })}
      </div>

      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
