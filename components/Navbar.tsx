import React, { useEffect, useRef, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";
import apiRequests from "@/Axios/config";
import { Hidden } from "@mui/material";
import { register } from "module";
import { FaUserDoctor } from "react-icons/fa6";

function Navbar({ ref }: any) {
  const [token, setToken] = useState<any>();
  const [register, setRegister] = useState<any>();
  const [dropDown, setDropDown] = useState<any>();

  const dataDropDown = [
    {
      title: "پرونده من",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.42 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.58 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.62 2.75 8.5 2.75H7Z"
            fill="#292D32"
          />
          <path
            d="M20 7.13C19.59 7.13 19.25 6.79 19.25 6.38V5C19.25 3.42 18.58 2.75 17 2.75H8C7.59 2.75 7.25 2.41 7.25 2C7.25 1.59 7.59 1.25 8 1.25H17C19.42 1.25 20.75 2.58 20.75 5V6.38C20.75 6.79 20.41 7.13 20 7.13Z"
            fill="#292D32"
          />
        </svg>
      ),
      path: "/user/reservation/Fainalpay",
    },
    {
      title: "رزرو نوبت",
      svg: <FaUserDoctor />,
      path: "/user/reservation",
    },
    {
      title: "ارسال پیام",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M2 16.5H8"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M2 12.5H5"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      path: "",
    },
    {
      title: "خروج",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/twotone/logout">
            <g id="vuesax/twotone/logout_2">
              <g id="logout">
                <path
                  id="Vector"
                  d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402"
                  stroke="#C70000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group 656">
                  <path
                    id="Vector_2"
                    d="M14.9991 12H3.61914"
                    stroke="#C70000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M5.85 8.65039L2.5 12.0004L5.85 15.3504"
                    stroke="#C70000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
      path: "",
    },
  ];
  useEffect(() => {
    getData(), setToken(localStorage.getItem("token"));
  }, []);

  const getData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      apiRequests
        .get(`/api/user-document`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setRegister(
            response.data.data[0].first_name +
              "   " +
              response.data.data[0].last_name
          );
          console.log(response);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            localStorage.removeItem("token");
          }
        });
    }
  };
  // console.log(register)
  return (
    <nav className="  flex  justify-between  font-iranSans items-center  py-5  fixed z-10 backdrop-blur-sm  backdrop-filter shadow-2xl bg-black bg-opacity-25  w-full">
      <div className="  flex flex-col justify-center mr-[7.56%]">
        <img
          src="/images/logoo.png"
          className=" w-[66.687px] h-[48px]  flex justify-center text-white"
        />
        <div className=" z-10  relative   flex flex-col  items-center  justify-center ">
          <p className="text-white  z-[20] font-iranSansBold text-[10px]">
            چشم پزشکی
          </p>
          <span className="text-[#45CBC2] flex justify-center  mt-[-5%] font-iranSansBold">
            مکارمی
          </span>
        </div>
      </div>

      <ul className="hidden lg:font-medium	 lg:flex lg:justify-center text-white  lg:gap-[1%] basis-[57%]">
        <a
          href="#home"
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          خانه
        </a>
        <a
          href="#satisfication"
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          رضایت مراجعان
        </a>
        <a
          href="#insurance"
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          بیمه های طرف قرارداد
        </a>
        <a
          href="#contactUs"
          className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center "
        >
          تماس با ما
        </a>
        <a className="hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center ">
          بلاگ
        </a>
        <Link
          href="/login"
          className={`hover:bg-[#45CBC2] rounded-lg px-[1.4%] py-[1.5%] flex justify-center items-center  ${
            token ? "hidden" : "flex"
          }`}
        >
          ورود / عضویت
        </Link>
      </ul>
      {token ? (
        <div
          className="text-white ml-[2%] lg:ml-[7.56%] flex items-center relative group  "
          onMouseEnter={() => setDropDown(true)}
        >
          <p className=" ">{register}</p>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2  "
          >
            <path
              d="M1 1.5L5 5.5L9 1.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          {dropDown ? (
            <div
              className="min-w-[150px] gap-2 absolute bg-white flex flex-col left-0 top-[calc(100%+.5rem)] text-black rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] opacity-0   group-hover:opacity-100 z-10 duration-1000 transition ease-in-out"
              onMouseLeave={() => setDropDown(false)}
            >
              {dataDropDown.map((item) => {
                return (
                  <Link
                    className="flex hover:bg-slate-100 py-2 rounded-[10px] "
                    href={item.path}
                  >
                    <span className="mx-3">{item.svg}</span>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex  items-center ml-[2%] lg:ml-[7.56%] ">
          <Link
            href="./login"
            className="flex bg-[#45CBC2] w-[149px] h-[44px]  justify-center items-center text-white rounded-lg hover:bg-[#D6F3F1] hover:text-[#064247] group"
          >
            <div className="rounded-full bg-white hover:bg-[#45CBC2]  flex items-center group-hover:bg-[#45CBC2] ">
              <svg
                className="z-10"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-[#45CBC2]"
                  d="M12.5 22.25C6.84614 22.25 2.25 17.6539 2.25 12C2.25 6.34614 6.84614 1.75 12.5 1.75C18.1539 1.75 22.75 6.34614 22.75 12C22.75 17.6539 18.1539 22.25 12.5 22.25ZM12.5 2.25C7.12386 2.25 2.75 6.62386 2.75 12C2.75 17.3761 7.12386 21.75 12.5 21.75C17.8761 21.75 22.25 17.3761 22.25 12C22.25 6.62386 17.8761 2.25 12.5 2.25Z"
                  stroke="white"
                />
                <path
                  className=""
                  d="M16.5 12.25H8.5C8.36614 12.25 8.25 12.1339 8.25 12C8.25 11.8661 8.36614 11.75 8.5 11.75H16.5C16.6339 11.75 16.75 11.8661 16.75 12C16.75 12.1339 16.6339 12.25 16.5 12.25Z"
                  stroke="#064247"
                />
                <path
                  d="M12.5 16.25C12.3661 16.25 12.25 16.1339 12.25 16V8C12.25 7.86614 12.3661 7.75 12.5 7.75C12.6339 7.75 12.75 7.86614 12.75 8V16C12.75 16.1339 12.6339 16.25 12.5 16.25Z"
                  stroke="#064247"
                />
              </svg>
            </div>
            <span className="flex mr-[8px] font-iranSansLight">
              درخواست نوبت
            </span>
          </Link>
          <div className="lg:hidden">
            <IoMenu style={{ fontSize: "2rem" }} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
