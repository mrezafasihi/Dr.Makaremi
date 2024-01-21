import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import CustomeImage from "@/components/admin/CustomeImage";
import Link from "next/link";
import Layout from "../Layout";
import apiRequests from "@/Axios/config";

function index() {
  const router = useRouter();

  const [dataPatients, setDataPatients] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const token = localStorage.getItem("token");
    const response = await apiRequests.get("/api/document ", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    setDataPatients(response.data.data);
  };

  const deleteData = async (id: any) => {
    const token = localStorage.getItem("token");
    const response = await apiRequests.delete(`/api/document/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    router.reload();
  };
  return (
    <Layout>
      <div className="flex  flex-col w-[84.45%] mx-auto ">
        <p className="text-[#45CBC2] font-iranSansBold my-[35px] ">
          بیماران من
        </p>
        <Link
          className="flex mb-[15px] items-center"
          href={"/admin/myPatient/newfile"}
        >
          <div className="border border-[#EDEDEE] p-2 rounded ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 17H13V13H17V11H13V7H11V11H7V13H11V17Z"
                fill="#45CBC2"
              />
            </svg>
          </div>

          <p className="text-[#064247] font-iranSansLight text-[14px] mr-[1.5%]">
            تشکیل پرونده جدید
          </p>
        </Link>
        <p className="text-[#757575] font-iranSansLight text-[12px] mb-2 mr-8">
          برای مشاهده و ویرایش پرونده روی آن کلیک کنید
        </p>
        <div
          style={{ direction: "ltr" }}
          className=" overflow-y-auto flex flex-col  h-[791px] w-full  gap-[14px] mb-[10%]"
        >
          {dataPatients?.map((item: any) => {
            return (
              <div className="flex justify-between max-w-[856px]  border border-[#CBCBCB] rounded-lg h-[101px] items-center px-4 py-4 ">
                <Link
                  href={`/admin/myPatient/${item.id}`}
                  className="flex justify-between w-[90%]"
                >
                  <div className="flex items-center basis-[18%]">
                    <CustomeImage img={item.avatar} style="w-[48px] h-[49px]" />
                    <div className="flex flex-col flex-grow items-center">
                      <h6 className="text-[#064247] font-iranSansMedium text-[14px] ">
                        {item.first_name} <span>{item.last_name}</span>
                      </h6>
                      <p className="flex flex-col items-center font-iranSansLight text-[12px] text-[#757575] ">
                        شماره پرونده<span>{item.id}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-[#757575] font-iranSansLight text-[12px] w-[45%]">
                    <p className="">آخرین تاریخ مراجعه</p>
                    {/* <p>{item.date}</p> */}
                    <p>۲۳ دی ۱۴۰۲</p>
                  </div>
                </Link>
                <div className="flex flex-col cursor-pointer">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => deleteData(item.id)}
                    className="hover:translate-y-1"
                  >
                    <path
                      d="M18.7622 5.15682C15.8902 4.87221 13.0009 4.72559 10.1203 4.72559C8.4126 4.72559 6.70491 4.81183 4.99723 4.98433L3.23779 5.15682"
                      fill="#C70000"
                    />
                    <path
                      d="M18.7622 5.15682C15.8902 4.87221 13.0009 4.72559 10.1203 4.72559C8.4126 4.72559 6.70491 4.81183 4.99723 4.98433L3.23779 5.15682"
                      stroke="#C70000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.9816 4.28711L8.17134 3.15728C8.30934 2.33794 8.41283 1.72559 9.8704 1.72559H12.1301C13.5876 1.72559 13.6998 2.37244 13.8291 3.16591L14.0189 4.28711"
                      stroke="#C70000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9082 7.8833L16.3476 16.5683C16.2528 17.9224 16.1751 18.9746 13.7689 18.9746H8.23182C5.82553 18.9746 5.74791 17.9224 5.65304 16.5683L5.09244 7.8833"
                      stroke="#C70000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.55975 14.2305H12.4318"
                      stroke="#C70000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.8436 10.7812H13.1559"
                      stroke="#C70000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#C70000] font-light text-[12px]">
                    حذف{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default index;
