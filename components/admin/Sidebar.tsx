import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

function Sidebar({}: any) {
  let stroke = "stroke-[#288E87]";
  const pathName = usePathname()
  const layoutData = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${pathName === '/admin' ? 'stroke-white' : stroke}`}
            d="M9.16 11.37C9.06 11.36 8.94 11.36 8.83 11.37C6.45 11.29 4.56 9.34 4.56 6.94C4.56 4.49 6.54 2.5 9 2.5C11.45 2.5 13.44 4.49 13.44 6.94C13.43 9.34 11.54 11.29 9.16 11.37Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
          className={`${pathName === '/admin' ? 'stroke-white' : stroke}`}
            d="M16.41 4.5C18.35 4.5 19.91 6.07 19.91 8C19.91 9.89 18.41 11.43 16.54 11.5C16.46 11.49 16.37 11.49 16.28 11.5"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
          className={`${pathName === '/admin' ? 'stroke-white' : stroke}`}
            d="M4.16 15.06C1.74 16.68 1.74 19.32 4.16 20.93C6.91 22.77 11.42 22.77 14.17 20.93C16.59 19.31 16.59 16.67 14.17 15.06C11.43 13.23 6.92 13.23 4.16 15.06Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
          className={`${pathName === '/admin' ? 'stroke-white' : stroke}`}
            d="M18.34 20.5C19.06 20.35 19.74 20.06 20.3 19.63C21.86 18.46 21.86 16.53 20.3 15.36C19.75 14.94 19.08 14.66 18.37 14.5"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),

      title: "بیماران من",
      path: `/admin`,
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          className={`${pathName === '/admin/statistics' ? 'stroke-white' : stroke}`}
            d="M22 6.5V8.92C22 10.5 21 11.5 19.42 11.5H16V4.51C16 3.4 16.91 2.5 18.02 2.5C19.11 2.51 20.11 2.95 20.83 3.67C21.55 4.4 22 5.4 22 6.5Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
          className={`${pathName === '/admin/statistics' ? 'stroke-white' : stroke}`}
            d="M2 7.5V21.5C2 22.33 2.93998 22.8 3.59998 22.3L5.31 21.02C5.71 20.72 6.27 20.76 6.63 21.12L8.28998 22.79C8.67998 23.18 9.32002 23.18 9.71002 22.79L11.39 21.11C11.74 20.76 12.3 20.72 12.69 21.02L14.4 22.3C15.06 22.79 16 22.32 16 21.5V4.5C16 3.4 16.9 2.5 18 2.5H7H6C3 2.5 2 4.29 2 6.5V7.5Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
          className={`${pathName === '/admin/statistics' ? 'stroke-white' : stroke}`}
            d="M6 9.5H12"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
          className={`${pathName === '/admin/statistics' ? 'stroke-white' : stroke}`}
            d="M6.75 13.5H11.25"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "آمار کلی",
      path: "/admin/statistics",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.41003 22.5C3.41003 18.63 7.26003 15.5 12 15.5C12.96 15.5 13.89 15.63 14.76 15.87"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 18.5C22 18.82 21.96 19.13 21.88 19.43C21.79 19.83 21.63 20.22 21.42 20.56C20.73 21.72 19.46 22.5 18 22.5C16.97 22.5 16.04 22.11 15.34 21.47C15.04 21.21 14.78 20.9 14.58 20.56C14.21 19.96 14 19.25 14 18.5C14 17.42 14.43 16.43 15.13 15.71C15.86 14.96 16.88 14.5 18 14.5C19.18 14.5 20.25 15.01 20.97 15.83C21.61 16.54 22 17.48 22 18.5Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.49 18.48H16.51"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.0002 17.02V20.01"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "نوبت دهی",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.73 20.2C7.55 19.32 8.8 19.39 9.52 20.35L10.53 21.7C11.34 22.77 12.65 22.77 13.46 21.7L14.47 20.35C15.19 19.39 16.44 19.32 17.26 20.2C19.04 22.1 20.49 21.47 20.49 18.81V7.54C20.5 3.51 19.56 2.5 15.78 2.5H8.22C4.44 2.5 3.5 3.51 3.5 7.54V18.8C3.5 21.47 4.96 22.09 6.73 20.2Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 7.5H16"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 11.5H15"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "پرداخت ها",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4.74376L16.6808 4.8068C17.891 4.91886 18.7081 5.32513 19.2466 5.89675C19.7413 6.42197 20.0614 7.1512 20.1827 8.09H3.81732C3.93859 7.1512 4.25867 6.42197 4.75342 5.89675C5.29187 5.32513 6.10896 4.91886 7.31913 4.8068L7.99998 4.74376V4.75H8.74998H15.25H16V4.74376Z"
            stroke="#288E87"
            stroke-width="1.5"
          />
          <path
            d="M20 11.0898C20.1358 11.0898 20.25 11.2041 20.25 11.3398V17.4998C20.25 18.8849 19.9036 19.9245 19.2629 20.6145C18.6315 21.2945 17.607 21.7498 16 21.7498H8C6.39295 21.7498 5.36848 21.2945 4.7371 20.6145C4.09637 19.9245 3.75 18.8849 3.75 17.4998V11.3398C3.75 11.2041 3.86421 11.0898 4 11.0898H20Z"
            stroke="#288E87"
            stroke-width="1.5"
          />
          <path
            d="M8.5 15.4999C8.24 15.4999 7.98 15.3899 7.79 15.2099C7.61 15.0199 7.5 14.7599 7.5 14.4999C7.5 14.2399 7.61 13.9799 7.79 13.7899C8.07 13.5099 8.51 13.4199 8.88 13.5799C9.01 13.6299 9.12 13.6999 9.21 13.7899C9.39 13.9799 9.5 14.2399 9.5 14.4999C9.5 14.7599 9.39 15.0199 9.21 15.2099C9.02 15.3899 8.76 15.4999 8.5 15.4999Z"
            fill="#288E87"
          />
          <path
            d="M12 15.4999C11.74 15.4999 11.48 15.3899 11.29 15.2099C11.11 15.0199 11 14.7599 11 14.4999C11 14.2399 11.11 13.9799 11.29 13.7899C11.38 13.6999 11.49 13.6299 11.62 13.5799C11.99 13.4199 12.43 13.5099 12.71 13.7899C12.89 13.9799 13 14.2399 13 14.4999C13 14.7599 12.89 15.0199 12.71 15.2099C12.66 15.2499 12.61 15.2899 12.56 15.3299C12.5 15.3699 12.44 15.3999 12.38 15.4199C12.32 15.4499 12.26 15.4699 12.2 15.4799C12.13 15.4899 12.07 15.4999 12 15.4999Z"
            fill="#288E87"
          />
          <path
            d="M15.5 15.5C15.24 15.5 14.98 15.39 14.79 15.21C14.61 15.02 14.5 14.76 14.5 14.5C14.5 14.24 14.61 13.98 14.79 13.79C14.89 13.7 14.99 13.63 15.12 13.58C15.3 13.5 15.5 13.48 15.7 13.52C15.76 13.53 15.82 13.55 15.88 13.58C15.94 13.6 16 13.63 16.06 13.67C16.11 13.71 16.16 13.75 16.21 13.79C16.39 13.98 16.5 14.24 16.5 14.5C16.5 14.76 16.39 15.02 16.21 15.21C16.16 15.25 16.11 15.29 16.06 15.33C16 15.37 15.94 15.4 15.88 15.42C15.82 15.45 15.76 15.47 15.7 15.48C15.63 15.49 15.56 15.5 15.5 15.5Z"
            fill="#288E87"
          />
          <path
            d="M8.5 19C8.37 19 8.24 18.97 8.12 18.92C7.99 18.87 7.89 18.8 7.79 18.71C7.61 18.52 7.5 18.26 7.5 18C7.5 17.74 7.61 17.48 7.79 17.29C7.89 17.2 7.99 17.13 8.12 17.08C8.3 17 8.5 16.98 8.7 17.02C8.76 17.03 8.82 17.05 8.88 17.08C8.94 17.1 9 17.13 9.06 17.17C9.11 17.21 9.16 17.25 9.21 17.29C9.39 17.48 9.5 17.74 9.5 18C9.5 18.26 9.39 18.52 9.21 18.71C9.16 18.75 9.11 18.8 9.06 18.83C9 18.87 8.94 18.9 8.88 18.92C8.82 18.95 8.76 18.97 8.7 18.98C8.63 18.99 8.57 19 8.5 19Z"
            fill="#288E87"
          />
          <path
            d="M12 19.0002C11.74 19.0002 11.48 18.8902 11.29 18.7102C11.11 18.5202 11 18.2602 11 18.0002C11 17.7402 11.11 17.4802 11.29 17.2902C11.66 16.9202 12.34 16.9202 12.71 17.2902C12.89 17.4802 13 17.7402 13 18.0002C13 18.2602 12.89 18.5202 12.71 18.7102C12.52 18.8902 12.26 19.0002 12 19.0002Z"
            fill="#288E87"
          />
          <path
            d="M15.5 19.0002C15.24 19.0002 14.98 18.8902 14.79 18.7102C14.61 18.5202 14.5 18.2602 14.5 18.0002C14.5 17.7402 14.61 17.4802 14.79 17.2902C15.16 16.9202 15.84 16.9202 16.21 17.2902C16.39 17.4802 16.5 17.7402 16.5 18.0002C16.5 18.2602 16.39 18.5202 16.21 18.7102C16.02 18.8902 15.76 19.0002 15.5 19.0002Z"
            fill="#288E87"
          />
        </svg>
      ),
      title: "جدول زمانبندی",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 6.75V11.85C22 13.12 21.58 14.19 20.83 14.93C20.09 15.68 19.02 16.1 17.75 16.1V17.91C17.75 18.59 16.99 19 16.43 18.62L15.46 17.98C15.55 17.67 15.59 17.33 15.59 16.97V12.9C15.59 10.86 14.23 9.5 12.19 9.5H5.39999C5.25999 9.5 5.13 9.51002 5 9.52002V6.75C5 4.2 6.7 2.5 9.25 2.5H17.75C20.3 2.5 22 4.2 22 6.75Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.59 12.9V16.97C15.59 17.33 15.55 17.67 15.46 17.98C15.09 19.45 13.87 20.37 12.19 20.37H9.47L6.45 22.38C6 22.69 5.39999 22.36 5.39999 21.82V20.37C4.37999 20.37 3.53 20.03 2.94 19.44C2.34 18.84 2 17.99 2 16.97V12.9C2 11 3.18 9.69002 5 9.52002C5.13 9.51002 5.25999 9.5 5.39999 9.5H12.19C14.23 9.5 15.59 10.86 15.59 12.9Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "پیام ها",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5H15C20 22.5 22 20.5 22 15.5V13.5"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.04 3.51976L8.16 11.3998C7.86 11.6998 7.56 12.2898 7.5 12.7198L7.07 15.7298C6.91 16.8198 7.68 17.5798 8.77 17.4298L11.78 16.9998C12.2 16.9398 12.79 16.6398 13.1 16.3398L20.98 8.45976C22.34 7.09976 22.98 5.51976 20.98 3.51976C18.98 1.51976 17.4 2.15976 16.04 3.51976Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.91 4.6499C15.58 7.0399 17.45 8.9099 19.85 9.5899"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "بلاگ",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 19.5H8C4 19.5 2 18.5 2 13.5V8.5C2 4.5 4 2.5 8 2.5H16C20 2.5 22 4.5 22 8.5V13.5C22 17.5 20 19.5 16 19.5H15.5C15.19 19.5 14.89 19.65 14.7 19.9L13.2 21.9C12.54 22.78 11.46 22.78 10.8 21.9L9.3 19.9C9.14 19.68 8.77 19.5 8.5 19.5Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9965 11.5H16.0054"
            stroke="#288E87"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9955 11.5H12.0045"
            stroke="#288E87"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99451 11.5H8.00349"
            stroke="#288E87"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "نظرات کاربران",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 7.66C17.94 7.65 17.87 7.65 17.81 7.66C16.43 7.61 15.33 6.48 15.33 5.08C15.33 3.65 16.48 2.5 17.91 2.5C19.34 2.5 20.49 3.66 20.49 5.08C20.48 6.48 19.38 7.61 18 7.66Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9699 14.9402C18.3399 15.1702 19.8499 14.9302 20.9099 14.2202C22.3199 13.2802 22.3199 11.7402 20.9099 10.8002C19.8399 10.0902 18.3099 9.85016 16.9399 10.0902"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.96998 7.66C6.02998 7.65 6.09998 7.65 6.15998 7.66C7.53998 7.61 8.63998 6.48 8.63998 5.08C8.63998 3.65 7.48998 2.5 6.05998 2.5C4.62998 2.5 3.47998 3.66 3.47998 5.08C3.48998 6.48 4.58998 7.61 5.96998 7.66Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.99994 14.9402C5.62994 15.1702 4.11994 14.9302 3.05994 14.2202C1.64994 13.2802 1.64994 11.7402 3.05994 10.8002C4.12994 10.0902 5.65994 9.85016 7.02994 10.0902"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 15.1302C11.94 15.1202 11.87 15.1202 11.81 15.1302C10.43 15.0802 9.32996 13.9502 9.32996 12.5502C9.32996 11.1202 10.48 9.97021 11.91 9.97021C13.34 9.97021 14.49 11.1302 14.49 12.5502C14.48 13.9502 13.38 15.0902 12 15.1302Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.08997 18.2804C7.67997 19.2204 7.67997 20.7603 9.08997 21.7003C10.69 22.7703 13.31 22.7703 14.91 21.7003C16.32 20.7603 16.32 19.2204 14.91 18.2804C13.32 17.2204 10.69 17.2204 9.08997 18.2804Z"
            stroke="#288E87"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "ادمین‌ها",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.23 7.61998H15.69C15.31 7.61998 15 7.30998 15 6.91998C15 6.53998 15.31 6.22998 15.69 6.22998H21.23C21.61 6.22998 21.92 6.53998 21.92 6.91998C21.92 7.30998 21.61 7.61998 21.23 7.61998Z"
            fill="#288E87"
          />
          <path
            d="M6.45996 7.62023H2.76996C2.38996 7.62023 2.07996 7.31023 2.07996 6.93023C2.07996 6.55023 2.38996 6.24023 2.76996 6.24023H6.45996C6.83996 6.24023 7.14996 6.55023 7.14996 6.93023C7.14996 7.31023 6.83996 7.62023 6.45996 7.62023Z"
            fill="#288E87"
          />
          <path
            d="M13.57 6.92C13.57 8.80881 12.0388 10.34 10.15 10.34C8.26117 10.34 6.72998 8.80881 6.72998 6.92C6.72998 5.03119 8.26117 3.5 10.15 3.5C12.0388 3.5 13.57 5.03119 13.57 6.92Z"
            fill="#288E87"
            stroke="#288E87"
          />
          <path
            d="M21.23 17.7701H17.54C17.16 17.7701 16.85 17.4601 16.85 17.0801C16.85 16.7001 17.16 16.3901 17.54 16.3901H21.23C21.61 16.3901 21.92 16.7001 21.92 17.0801C21.92 17.4601 21.61 17.7701 21.23 17.7701Z"
            fill="#288E87"
          />
          <path
            d="M8.30996 17.7701H2.76996C2.38996 17.7701 2.07996 17.4601 2.07996 17.0801C2.07996 16.7001 2.38996 16.3901 2.76996 16.3901H8.30996C8.68996 16.3901 8.99996 16.7001 8.99996 17.0801C8.99996 17.4601 8.68996 17.7701 8.30996 17.7701Z"
            fill="#288E87"
          />
          <path
            d="M17.2701 17.0802C17.2701 18.969 15.7389 20.5002 13.8501 20.5002C11.9612 20.5002 10.4301 18.969 10.4301 17.0802C10.4301 15.1913 11.9612 13.6602 13.8501 13.6602C15.7389 13.6602 17.2701 15.1913 17.2701 17.0802Z"
            fill="#288E87"
            stroke="#288E87"
          />
        </svg>
      ),
      title: "تغییر اطلاعات",
      path: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90039 8.06023C9.21039 4.46023 11.0604 2.99023 15.1104 2.99023H15.2404C19.7104 2.99023 21.5004 4.78023 21.5004 9.25023V15.7702C21.5004 20.2402 19.7104 22.0302 15.2404 22.0302H15.1104C11.0904 22.0302 9.24039 20.5802 8.91039 17.0402"
            stroke="#C70000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.9991 12.5H3.61914"
            stroke="#C70000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.85 9.15039L2.5 12.5004L5.85 15.8504"
            stroke="#C70000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "خروج از حساب کاربری",
      path: "",
    },
  ];
  const route = useRouter();
  console.log(pathName);
  console.log(`first${pathName}`)
  console.log("first"+pathName)
  let style: any;
  console.log()
  return (
    <div className="flex flex-col border-l-2 w-[24%]  min-h-screen   ">
      <div className="mr-[10%] mt-[6%]">
        <Link href={"/"}>
        <Logo />
        </Link>
      </div>
      <div className="flex flex-col justify-between h-[787px] mt-[9%] ">
        {layoutData.map((item, index) => {
          {
            item.path == route.asPath
              ? (style = "bg-[#288E87]  text-white 	 ")
              : (style = "");
            // if(index==layoutData.length-1){
            //   color="text-[#C70000]"
            // }
          }

          return (
            <div className="flex flex-col mr-[5%]  ml-[5%] h-[57px] flex-1 group: ">
              <Link
                className={`flex h-[57px] items-center rounded-lg font-normal ${
                  index == layoutData.length - 1 && "text-[#C70000]"
                }  ${style}`}
                href={item.path}
              >
                <span className="ml-2 group-hover:stroke-black pr-2">{item.icon}</span>
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
