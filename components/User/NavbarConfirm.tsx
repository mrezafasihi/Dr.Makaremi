
import React from "react";
import Logo from "../Logo";
import { BsPlusCircleFill } from "react-icons/bs";

function NavbarConfirm() {
  return (
    <div className="flex justify-between mx-[5%] items-center mt-[32px] ">
      <Logo />
      <ul className="flex justify-between basis-[22%] font-medium mr-[8%] ">
        <li>خانه</li>
        <li>پرونده من</li>
        <li className="text-[#288E87]">رزرو نوبت</li>
        <li>ارسال پیام</li>
      </ul>
      <div className="flex items-center">
        <div className="w-[0.04px] h-10 bg-black" />
        <select>
          <option value="1">
            {/* <img src="/images/edit.png" alt="" /> */}
          </option>
          <option
            value="2"
            data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
          >
            Two
          </option>
          <option
            value="3"
            data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
          >
            Three
          </option>
          <option
            value="4"
            data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
          >
            Four
          </option>
          <option
            value="5"
            data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
          >
            Five
          </option>
        </select>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.93335 5.54016C6.14002 3.14016 7.37335 2.16016 10.0733 2.16016H10.16C13.14 2.16016 14.3334 3.35349 14.3334 6.33349V10.6802C14.3334 13.6602 13.14 14.8535 10.16 14.8535H10.0733C7.39335 14.8535 6.16002 13.8868 5.94002 11.5268"
            stroke="#C70000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99951 8.5H2.41284"
            stroke="#C70000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.90008 6.26709L1.66675 8.50042L3.90008 10.7338"
            stroke="#C70000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>خروج</p>
      </div>
    </div>
  );
}

export default NavbarConfirm;
