import React, { useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { utils } from "react-modern-calendar-datepicker";
import NavbarConfirm from "@/components/user/NavbarConfirm";
import Layout from "../Layout";
import Link from "next/link";

function time() {
  const hour = [
    { time: "۱۵:۰۰" },
    { time: "۱۰:۰۰" },
    { time: "۱۲:۰۰" },
    { time: "۱۸:۰۰" },
    { time: "۱۴:۰۰" },
    { time: "۱۶:۰۰" },
  ];
  const persianToday = utils("fa").getToday();
  const [name, setName] = useState<any>();
  const [selectedDay, setSelectedDay] = useState<any>(persianToday);
  useEffect(() => {
    const selectPatient: any = localStorage.getItem("selectedpatient");
    setName(JSON.parse(selectPatient));
  }, []);
  console.log(name);
  let month;
  switch (selectedDay.month) {
    case 1:
      month = "فروردین";
      break;
    case 2:
      month = "اردیبهشت";
      break;
    case 3:
      month = "خرداد";
      break;
    case 4:
      month = "تیر";
      break;
    case 5:
      month = "مرداد";
      break;
    case 6:
      month = "شهریور";
      break;
    case 7:
      month = "مهر";
      break;
    case 8:
      month = "آبان";
      break;
    case 9:
      month = "آذر";
      break;
    case 10:
      month = "دی";
      break;
    case 11:
      month = "بهمن";
      break;
    case 12:
      month = "اسفند";
      break;
    default:
    // code block
  }
  return (
    <Layout>
      <div className="flex items-center mb-[2%] mt-[4%] mr-[6%]">
        <Link
          href={"/admin/reservation"}
          className="ml-[1%] text-[#45CBC2] font-bold"
        >
          نوبت دهی
        </Link>
        <svg
          width="9"
          height="13"
          viewBox="0 0 9 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L2 6.5L8 12"
            stroke="#288E87"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="mr-[1%] text-[#757575] font-bold text-[20px]">
         <span> {name?.first_name}</span>
         <span> {name?.last_name}</span>
        </div>
      </div>
      <div className="flex h-[200px] relative justify-center mt-[8%]  ">
        <div className="relative left-[15%] top-[12%]">
          <svg
            className="absolute right-[21px] top-[12px] z-10"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="16" fill="#1E1E1E" />
            <g id="Frame 26086488">
              <rect
                width="1440"
                height="991"
                transform="translate(-900 -269)"
                fill="white"
              />
              <g id="Group 92">
                <g id="Group 91">
                  <g id="Group 66">
                    <g id="Group 183">
                      <circle
                        id="Ellipse 33"
                        cx="8.03743"
                        cy="7.50911"
                        r="17.7562"
                        fill="#288E87"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="vuesax/twotone/shield-tick">
                <g id="vuesax/twotone/shield-tick_2">
                  <g id="shield-tick">
                    <path
                      id="Vector"
                      d="M7.16873 1.48703L3.84206 2.74036C3.0754 3.02703 2.44873 3.9337 2.44873 4.74703V9.70036C2.44873 10.487 2.96873 11.5204 3.60206 11.9937L6.46873 14.1337C7.40873 14.8404 8.9554 14.8404 9.8954 14.1337L12.7621 11.9937C13.3954 11.5204 13.9154 10.487 13.9154 9.70036V4.74703C13.9154 3.92703 13.2887 3.02036 12.5221 2.7337L9.1954 1.48703C8.62873 1.28036 7.72206 1.28036 7.16873 1.48703Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M6.20874 7.91345L7.28207 8.98678L10.1487 6.12012"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            className="absolute  "
            width="61"
            height="98"
            viewBox="0 0 61 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.850586 93.8332C2.41059 93.3412 3.59859 92.1652 3.59859 91.2172C3.59859 90.7132 3.27459 89.2972 2.98659 88.1692L3.71859 87.9052C4.04259 89.0092 4.33059 90.4372 4.33059 91.2172C4.33059 92.6092 2.92659 94.0012 1.15059 94.5772L0.850586 93.8332ZM6.40752 82.9852C6.53952 83.8612 6.62352 87.1612 6.59952 88.3492C6.55152 89.7892 6.62352 90.3172 7.95552 90.3172H8.01552L8.05152 90.7372L8.01552 91.1572H7.95552C6.16752 91.1572 5.79552 90.2932 5.84352 88.4212C5.85552 87.1492 5.78352 84.0172 5.65152 83.1412L6.40752 82.9852ZM7.89215 91.1572V90.3172H8.13215C8.80415 90.3172 9.38015 89.9452 9.76415 89.2132C10.3641 88.0852 11.0121 86.9332 11.9601 86.8972C12.9801 86.8612 13.5201 87.7732 13.7361 88.8052C13.9401 89.7532 14.1801 90.3172 14.7921 90.3172H14.8881L14.9361 90.7372L14.8881 91.1572H14.7921C14.0601 91.1572 13.7481 90.6772 13.6161 90.1612C13.5561 90.6052 13.2321 90.9532 12.9081 91.1092C12.3321 91.4092 11.3481 91.0372 10.0161 90.1732C9.54815 90.8212 8.87615 91.1572 8.10815 91.1572H7.89215ZM10.4001 89.5012C11.5641 90.2932 12.4641 90.5572 12.7881 90.4252C13.5321 89.8852 13.0401 87.6892 12.0081 87.6892C11.4201 87.6892 10.9041 88.5412 10.4001 89.5012ZM14.7711 91.1572V90.3172H14.8551C16.7751 90.3052 17.2311 90.0772 17.4831 89.5612C17.6751 89.1532 17.5551 88.3012 17.4471 87.5812L18.1551 87.4372C18.3111 88.2292 18.3111 89.2132 18.2991 89.3812C18.3951 90.0052 18.8151 90.3172 19.4751 90.3172H19.5831L19.6191 90.7372L19.5831 91.1572H19.4751C18.7791 91.1572 18.1791 90.8092 17.9151 90.2212C17.5551 90.9292 16.6791 91.1572 14.8551 91.1572H14.7711ZM14.2311 93.0892C14.4591 92.8492 14.7111 92.6092 14.9511 92.3572C15.1911 92.6092 15.4311 92.8492 15.6711 93.0892L14.9511 93.8092C14.7111 93.5692 14.4591 93.3292 14.2311 93.0892ZM16.2111 93.0892C16.4391 92.8492 16.6911 92.6092 16.9311 92.3572C17.1711 92.6092 17.4111 92.8492 17.6511 93.0892L16.9311 93.8092C16.6911 93.5692 16.4391 93.3292 16.2111 93.0892ZM19.4468 91.1572V90.3172H20.0708C21.4388 90.3172 22.0028 89.9212 22.0028 89.1412C21.9908 88.5292 21.5468 87.2692 21.3548 86.8612L22.0388 86.5012C22.2908 87.0172 22.7468 88.3372 22.7468 89.1772C22.7228 90.4972 21.7628 91.1572 20.0708 91.1572H19.4468ZM19.5788 93.1132L20.3348 92.3572C20.5868 92.6092 20.8388 92.8612 21.0908 93.1132L20.3348 93.8692C20.0828 93.6172 19.8308 93.3652 19.5788 93.1132ZM29.0007 87.1492C28.7847 87.7012 28.5807 88.3852 28.6527 88.9492C28.7847 89.8732 29.9727 90.4132 32.2887 90.4132C34.6647 90.4132 35.9007 89.7652 36.0087 89.3212C35.9607 88.6132 35.4327 87.1252 35.3247 86.8732L36.0087 86.5012C36.2487 87.0532 36.7287 88.5892 36.7167 89.2972C36.6927 90.4732 34.8687 91.2412 32.3847 91.2652C29.6487 91.2772 28.0647 90.5092 27.9207 89.0572C27.8487 88.2892 28.0887 87.3892 28.3407 86.8252L29.0007 87.1492ZM31.5567 93.1132L32.3127 92.3572C32.5647 92.6092 32.8167 92.8612 33.0687 93.1132L32.3127 93.8692C32.0607 93.6172 31.8087 93.3652 31.5567 93.1132ZM38.7981 82.9852C38.9301 83.8612 39.0141 87.1612 38.9901 88.3492C38.9421 89.7892 39.0141 90.3172 40.3461 90.3172H40.4061L40.4421 90.7372L40.4061 91.1572H40.3461C38.5581 91.1572 38.1861 90.2932 38.2341 88.4212C38.2461 87.1492 38.1741 84.0172 38.0421 83.1412L38.7981 82.9852ZM49.3668 90.3172H49.4868L49.5348 90.7372L49.4868 91.1572H49.3668C48.0228 91.1452 47.1708 90.6532 46.7868 89.5972C45.2628 90.3892 43.5348 91.1572 41.3748 91.1572H40.2708V90.3172H41.3748C43.5828 90.3052 45.3108 89.6092 46.8228 88.8052C47.0268 88.6852 47.2428 88.5892 47.4468 88.4932C46.8348 88.3732 46.2828 88.1572 45.7188 87.8572C45.0348 87.5092 44.4348 87.2332 43.7868 87.2332C43.0548 87.2212 42.4668 87.7252 42.1788 88.3012L41.6508 87.9532C42.1428 86.9572 42.9108 86.4172 43.8108 86.4292C44.5548 86.4412 45.1668 86.7532 45.9948 87.1732C46.7388 87.5572 47.4108 87.9052 48.3348 88.0972L48.3588 88.8412C48.0708 88.9372 47.7828 89.0812 47.3508 89.3092C47.6508 89.9212 48.3468 90.3052 49.3668 90.3172ZM42.9108 84.6052L43.6668 83.8492C43.9188 84.1012 44.1708 84.3532 44.4228 84.6052L43.6668 85.3612C43.4148 85.1092 43.1628 84.8572 42.9108 84.6052ZM49.3648 91.1572V90.3172H49.4488C51.3688 90.3052 51.8248 90.0772 52.0768 89.5612C52.2688 89.1532 52.1488 88.3012 52.0408 87.5812L52.7488 87.4372C52.9048 88.2292 52.9048 89.2132 52.8928 89.3812C52.9888 90.0052 53.4088 90.3172 54.0688 90.3172H54.1768L54.2128 90.7372L54.1768 91.1572H54.0688C53.3728 91.1572 52.7728 90.8092 52.5088 90.2212C52.1488 90.9292 51.2728 91.1572 49.4488 91.1572H49.3648ZM49.7968 85.6612C50.0248 85.4212 50.2768 85.1812 50.5168 84.9292C50.7568 85.1812 50.9968 85.4212 51.2368 85.6612L50.5168 86.3812C50.2768 86.1412 50.0248 85.9012 49.7968 85.6612ZM51.7648 85.6612C51.9928 85.4212 52.2448 85.1812 52.4848 84.9292C52.7248 85.1812 52.9648 85.4212 53.2048 85.6612L52.4848 86.3812C52.2448 86.1412 51.9928 85.9012 51.7648 85.6612ZM54.0406 91.1572V90.3172H54.6646C56.0326 90.3172 56.5966 89.9212 56.5966 89.1412C56.5846 88.5292 56.1406 87.2692 55.9486 86.8612L56.6326 86.5012C56.8846 87.0172 57.3406 88.3372 57.3406 89.1772C57.3166 90.4972 56.3566 91.1572 54.6646 91.1572H54.0406ZM55.1926 84.8932L55.9486 84.1372C56.2006 84.3892 56.4526 84.6412 56.7046 84.8932L55.9486 85.6492C55.6966 85.3972 55.4446 85.1452 55.1926 84.8932ZM58.7991 91.0972C58.9551 89.5492 58.7991 84.0172 58.6671 83.1412L59.4231 82.9852C59.5671 83.8612 59.7351 89.4652 59.5551 91.1932L58.7991 91.0972Z"
              fill="#288E87"
            />
            <circle
              cx="31.0593"
              cy="67.2644"
              r="7.34141"
              stroke="#288E87"
              strokeWidth="0.564724"
              className="relative"
            />
            <circle cx="31.0589" cy="67.264" r="4.80015" fill="#288E87" />
            <circle cx="31.0374" cy="18.5091" r="17.7562" fill="#288E87" />
            <path
              d="M31.4279 44.7155C31.19 45.4507 30.1505 45.4523 29.9102 44.7179L25.6326 31.6421C25.464 31.1267 25.8475 30.5968 26.3898 30.596L34.9043 30.5827C35.4466 30.5819 35.8318 31.1106 35.6648 31.6265L31.4279 44.7155Z"
              fill="#288E87"
            />
          </svg>
        </div>
        <div className="relative left-[3%]">
          <svg
            className="absolute"
            width="91"
            height="126"
            viewBox="0 0 91 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.08294 114.04C2.91494 114.508 2.68694 115.204 2.75894 115.72C2.87894 116.476 4.01894 116.968 6.26294 116.968C9.22694 116.956 10.2829 116.296 10.8469 114.652L11.8549 114.772C11.4229 116.128 11.6389 116.836 12.5989 116.836L12.6709 117.496L12.5989 118.156C11.6749 118.156 10.9309 117.58 10.7989 116.656C9.83894 117.832 8.36294 118.264 6.29894 118.276C3.47894 118.3 1.84694 117.448 1.70294 115.924C1.63094 115.156 1.88294 114.196 2.14694 113.584L3.08294 114.04ZM4.64294 113.692C4.93094 113.404 5.23094 113.116 5.50694 112.828C5.80694 113.116 6.09494 113.404 6.38294 113.692C6.09494 113.992 5.80694 114.28 5.50694 114.568C5.23094 114.28 4.93094 113.992 4.64294 113.692ZM6.75494 113.692C7.04294 113.404 7.34294 113.116 7.61894 112.828C7.91894 113.116 8.20694 113.404 8.49494 113.692C8.20694 113.992 7.91894 114.28 7.61894 114.568C7.34294 114.28 7.04294 113.992 6.75494 113.692ZM12.4712 118.156V116.836H12.6153C13.1073 116.836 13.5753 116.824 13.9953 116.812C13.6833 116.452 13.4793 115.996 13.4553 115.48C13.3593 114.16 14.4033 112.972 15.7233 112.828C16.5873 112.732 17.4033 113.128 18.0153 113.668L17.5593 114.556C17.0433 114.28 16.4433 114.064 15.8313 114.136C14.9913 114.232 14.4393 114.808 14.4753 115.384C14.5113 116.056 15.3153 116.656 16.3473 116.632C17.0673 116.536 17.6673 116.392 18.2073 116.188L18.4713 117.352C17.2233 117.868 15.5553 118.156 12.6153 118.156H12.4712ZM20.7317 109.624C20.8877 110.728 20.9717 113.74 20.9477 115.108C20.9237 116.404 21.0197 116.836 22.1357 116.836H22.1957L22.2677 117.496L22.1957 118.156H22.1357C20.3477 118.156 19.8197 117.196 19.8437 115.252C19.8437 113.716 19.7597 111.016 19.5917 109.876L20.7317 109.624ZM28.8006 116.836C29.3646 116.836 29.6526 116.5 29.6526 115.936C29.6526 115.348 29.1486 114.04 29.0046 113.716L29.9766 113.176C30.2166 113.68 30.7086 115.012 30.7086 115.96C30.7086 117.172 29.9286 118.144 28.8246 118.156H28.7766C27.9726 118.144 27.4446 117.712 27.2286 116.98C26.8566 117.664 26.2806 118.156 25.5846 118.156H25.5366C24.8166 118.156 24.2886 117.7 24.1566 117.004C23.6406 117.76 22.9566 118.156 22.1526 118.156H22.1046L22.0326 117.496L22.1046 116.836H22.1646C22.7406 116.836 23.2926 116.548 23.5566 116.152C23.9286 115.672 24.0966 114.988 24.1806 114.664L25.1886 114.772C25.0926 115.12 24.9606 115.612 24.9366 116.032C24.9246 116.56 25.1046 116.836 25.5606 116.836H25.5846C26.0646 116.836 26.4006 116.548 26.6766 116.056C26.9166 115.6 27.0366 114.88 27.0846 114.556L28.0926 114.604C28.0446 114.856 27.9486 115.396 27.9486 115.792C27.9486 116.464 28.1886 116.836 28.8006 116.836ZM35.1806 120.46C37.4606 119.968 38.6726 119.236 38.9366 118.12C37.7486 118.336 36.1766 118.132 35.6606 117.088C35.0006 115.744 36.0686 113.356 37.5206 113.356C39.0206 113.356 39.9566 115.6 39.9566 117.496C39.9566 119.584 38.3126 121.084 35.5766 121.624L35.1806 120.46ZM36.5366 116.356C36.8726 116.848 37.9766 116.98 38.9366 116.86C38.7566 115.756 38.2646 114.676 37.4966 114.592C36.7886 114.508 36.1886 115.828 36.5366 116.356ZM44.1367 120.496C45.7207 119.908 46.9087 118.816 46.9087 118.024C46.9087 117.532 46.4767 115.84 46.2727 115.048L47.3287 114.64C47.6887 115.756 47.9527 117.148 47.9527 118.024C47.9527 119.536 46.5487 120.916 44.6527 121.624L44.1367 120.496ZM45.6607 112.54C45.9727 112.216 46.2847 111.904 46.5967 111.604C46.9087 111.904 47.2207 112.216 47.5327 112.54L46.5967 113.476C46.2847 113.164 45.9727 112.852 45.6607 112.54ZM48.8095 120.46C51.0895 119.968 52.3015 119.236 52.5655 118.12C51.3775 118.336 49.8055 118.132 49.2895 117.088C48.6295 115.744 49.6975 113.356 51.1495 113.356C52.6495 113.356 53.5855 115.6 53.5855 117.496C53.5855 119.584 51.9415 121.084 49.2055 121.624L48.8095 120.46ZM50.1655 116.356C50.5015 116.848 51.6055 116.98 52.5655 116.86C52.3855 115.756 51.8935 114.676 51.1255 114.592C50.4175 114.508 49.8175 115.828 50.1655 116.356ZM53.7109 120.496C55.2949 119.908 56.4829 118.816 56.4829 118.024C56.4829 117.532 56.0509 115.84 55.8469 115.048L56.9029 114.64C57.2629 115.756 57.5269 117.148 57.5269 118.024C57.5269 119.536 56.1229 120.916 54.2269 121.624L53.7109 120.496ZM63.9471 115.66C63.5991 116.392 63.2991 117.22 63.2751 118.024C63.2511 119.536 64.1751 120.304 65.8191 120.304C67.7751 120.304 68.6751 119.116 68.6751 118.024C68.6751 117.232 68.2191 115.768 67.9791 115.06L68.9991 114.568C69.1431 114.976 69.2631 115.36 69.3591 115.72C69.6231 116.536 69.8751 116.836 70.4631 116.836H70.5351L70.6071 117.496L70.5351 118.156H70.4631C70.1631 118.156 69.9231 118.06 69.7071 117.892V118.024C69.7071 119.836 68.2911 121.624 65.8191 121.624C63.4071 121.624 62.1111 120.004 62.2071 118.024C62.2551 117.004 62.6871 115.888 63.0111 115.228L63.9471 115.66ZM65.1351 114.7C65.4471 114.376 65.7591 114.064 66.0711 113.764C66.3831 114.064 66.6951 114.376 67.0071 114.7L66.0711 115.636C65.7591 115.324 65.4471 115.012 65.1351 114.7ZM70.4087 118.156V116.836H70.5048C72.4008 116.836 72.8568 116.596 73.0248 116.044C73.1448 115.648 73.0368 114.988 72.9408 114.352L73.9368 114.148C74.1048 114.952 74.1048 116.008 74.1048 116.092C74.1888 116.548 74.5128 116.836 75.1248 116.836H75.2088L75.2808 117.496L75.2088 118.156H75.1248C74.4408 118.156 73.8888 117.784 73.5648 117.244C73.1568 117.916 72.2928 118.156 70.5048 118.156H70.4087ZM70.5048 120.136C70.7928 119.848 71.0928 119.56 71.3688 119.272C71.6688 119.56 71.9568 119.848 72.2448 120.136C71.9568 120.436 71.6688 120.724 71.3688 121.012C71.0928 120.724 70.7928 120.436 70.5048 120.136ZM72.6288 120.136C72.9168 119.848 73.2168 119.56 73.4928 119.272C73.7928 119.56 74.0808 119.848 74.3688 120.136C74.0808 120.436 73.7928 120.724 73.4928 121.012C73.2168 120.724 72.9168 120.436 72.6288 120.136ZM75.0845 118.156V116.836H75.1805C77.0765 116.836 77.5325 116.596 77.7005 116.044C77.8205 115.648 77.7125 114.988 77.6165 114.352L78.6125 114.148C78.7805 114.952 78.7805 116.008 78.7805 116.092C78.8645 116.548 79.1885 116.836 79.8005 116.836H79.8845L79.9565 117.496L79.8845 118.156H79.8005C79.1165 118.156 78.5645 117.784 78.2405 117.244C77.8325 117.916 76.9685 118.156 75.1805 118.156H75.0845ZM75.1805 120.136C75.4685 119.848 75.7685 119.56 76.0445 119.272C76.3445 119.56 76.6325 119.848 76.9205 120.136C76.6325 120.436 76.3445 120.724 76.0445 121.012C75.7685 120.724 75.4685 120.436 75.1805 120.136ZM77.3045 120.136C77.5925 119.848 77.8925 119.56 78.1685 119.272C78.4685 119.56 78.7565 119.848 79.0445 120.136C78.7565 120.436 78.4685 120.724 78.1685 121.012C77.8925 120.724 77.5925 120.436 77.3045 120.136ZM79.7603 118.156V116.836H80.0363C80.8283 116.836 81.5003 116.74 82.0763 116.596C81.5603 116.116 81.0443 115.516 80.4683 114.784L80.5163 113.92C82.0043 112.432 85.4363 112.624 85.8923 114.148C86.0603 114.796 85.4963 115.78 84.4763 116.608C84.9803 116.764 85.5443 116.836 86.2043 116.836H86.5283L86.6003 117.496L86.5283 118.156H86.2043C84.9563 118.156 84.0203 117.94 83.1683 117.424C82.2683 117.868 81.2003 118.156 80.0363 118.156H79.7603ZM81.6803 114.544C82.2563 115.216 82.7843 115.72 83.3603 116.092C84.3443 115.54 84.7643 114.856 84.8843 114.556C84.5843 113.932 82.6763 113.788 81.6803 114.544ZM86.4048 118.156V116.836H86.9088C88.6368 116.836 89.2008 116.524 89.2008 115.864C89.1888 115.348 88.6968 114.004 88.5528 113.704L89.5488 113.164C89.7888 113.668 90.2688 114.988 90.2568 115.888C90.2568 117.364 89.2128 118.156 87.0888 118.156H86.4048ZM86.6808 111.628C86.9688 111.34 87.2688 111.052 87.5448 110.764C87.8448 111.052 88.1328 111.34 88.4208 111.628C88.1328 111.928 87.8448 112.216 87.5448 112.504C87.2688 112.216 86.9688 111.928 86.6808 111.628ZM88.7928 111.628C89.0808 111.34 89.3808 111.052 89.6568 110.764C89.9568 111.052 90.2448 111.34 90.5328 111.628C90.2448 111.928 89.9568 112.216 89.6568 112.504C89.3808 112.216 89.0808 111.928 88.7928 111.628Z"
              fill="#288E87"
            />
            <circle
              cx="27.5146"
              cy="27.5146"
              r="27.5146"
              transform="matrix(1 0 0 -1 19.1628 55.0293)"
              fill="#288E87"
            />
            <path
              d="M47.9008 71.8028C47.532 72.942 45.9212 72.9445 45.5489 71.8065L38.9205 51.5446C38.6592 50.7459 39.2535 49.9248 40.0939 49.9235L53.2876 49.9029C54.128 49.9016 54.7249 50.7208 54.4661 51.5203L47.9008 71.8028Z"
              fill="#288E87"
            />
            <circle
              cx="46.1824"
              cy="92.3406"
              r="7.34141"
              stroke="#288E87"
              strokeWidth="0.564724"
            />
            <circle cx="46.1825" cy="92.3402" r="4.80015" fill="#288E87" />
          </svg>
          <svg
            className="absolute top-[15px] right-[31px]"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="24" fill="#1E1E1E" />
            <g id="Frame 26086488">
              <rect
                width="1440"
                height="991"
                transform="translate(-706 -248)"
                fill="white"
              />
              <g id="Group 92">
                <g id="Group 91">
                  <g id="Group 182">
                    <g id="Group 67">
                      <circle
                        id="Ellipse 34"
                        cx="27.5146"
                        cy="27.5146"
                        r="27.5146"
                        transform="matrix(1 0 0 -1 -15.8372 39.0293)"
                        fill="#288E87"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="vuesax/twotone/calendar-2">
                <g id="vuesax/twotone/calendar-2_2">
                  <g id="calendar-2">
                    <path
                      id="Vector"
                      d="M8.17529 2V5"
                      stroke="white"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M16.1753 2V5"
                      stroke="white"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M3.67529 9.08984H20.6753"
                      stroke="white"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_4"
                      d="M21.1753 8.5V17C21.1753 20 19.6753 22 16.1753 22H8.17529C4.67529 22 3.17529 20 3.17529 17V8.5C3.17529 5.5 4.67529 3.5 8.17529 3.5H16.1753C19.6753 3.5 21.1753 5.5 21.1753 8.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_5"
                      d="M12.1708 13.7002H12.1798"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_6"
                      d="M8.4696 13.7002H8.47859"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_7"
                      d="M8.46973 16.7002H8.47871"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="relative left-[-15%] bottom-[7%] ">
          <svg
            className="absolute left-[36%] top-[20%]"
            width="37"
            height="97"
            viewBox="0 0 37 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M1.62766 86.1492C1.41166 86.7012 1.20766 87.3852 1.27966 87.9492C1.41166 88.8732 2.61166 89.4132 4.95166 89.4132C7.81966 89.4132 9.16366 88.6332 9.69166 86.9292L10.4237 87.0132C9.95566 88.4052 10.2197 89.3052 11.3477 89.3052L11.3957 89.7372L11.3477 90.1572C10.3517 90.1572 9.63166 89.5452 9.58366 88.5252C8.70766 89.7492 7.15966 90.2532 5.01166 90.2652C2.27566 90.2772 0.691664 89.5092 0.547664 88.0572C0.475664 87.2892 0.715664 86.3892 0.967664 85.8252L1.62766 86.1492ZM3.55966 86.1972C3.78766 85.9572 4.03966 85.7172 4.27966 85.4652C4.51966 85.7172 4.75966 85.9572 4.99966 86.1972L4.27966 86.9172C4.03966 86.6772 3.78766 86.4372 3.55966 86.1972ZM5.52766 86.1972C5.75566 85.9572 6.00766 85.7172 6.24766 85.4652C6.48766 85.7172 6.72766 85.9572 6.96766 86.1972L6.24766 86.9172C6.00766 86.6772 5.75566 86.4372 5.52766 86.1972ZM11.2102 90.1572V89.3172H12.3142C14.5222 89.3052 16.2502 88.6092 17.7622 87.8052C17.9662 87.6852 18.1822 87.5892 18.3862 87.4932C17.7742 87.3732 17.2222 87.1572 16.6582 86.8572C15.9742 86.5092 15.3742 86.2332 14.7262 86.2332C13.9942 86.2212 13.4062 86.7252 13.1182 87.3012L12.5902 86.9532C13.0822 85.9572 13.8502 85.4172 14.7502 85.4292C15.4942 85.4412 16.1062 85.7532 16.9342 86.1732C17.6782 86.5572 18.3502 86.9052 19.2742 87.0972L19.2982 87.8412C18.9622 87.9492 18.6142 88.1292 18.0502 88.4292C16.4422 89.2812 14.6302 90.1572 12.3142 90.1572H11.2102ZM13.8502 83.6052L14.6062 82.8492C14.8582 83.1012 15.1102 83.3532 15.3622 83.6052L14.6062 84.3612C14.3542 84.1092 14.1022 83.8572 13.8502 83.6052ZM20.6331 90.0972C20.7891 88.5492 20.6331 83.0172 20.5011 82.1412L21.2571 81.9852C21.4011 82.8612 21.5691 88.4652 21.3891 90.1932L20.6331 90.0972ZM23.0416 88.7652C23.3656 88.9572 23.9896 89.3772 25.1536 89.3772C26.1496 89.3772 26.7256 89.0532 26.8816 88.7292C27.1936 88.0452 26.4856 86.6532 24.4456 85.1052L24.8776 84.3732C27.0136 86.0172 28.0816 87.8412 27.5056 89.1132C27.1936 89.8092 26.3056 90.1932 25.2136 90.1932C23.8216 90.1932 23.0056 89.6772 22.6696 89.3892L23.0416 88.7652ZM31.7155 90.1572C31.3675 90.1572 31.0915 90.0612 30.8635 89.8932C30.8755 90.0132 30.8755 90.1212 30.8755 90.2172C30.8755 91.6092 29.4715 93.0012 27.6955 93.5772L27.3955 92.8332C28.9555 92.3412 30.1435 91.1652 30.1435 90.2172C30.1435 89.7132 29.8195 88.2972 29.5315 87.1692L30.2635 86.9052C30.3715 87.2652 30.4795 87.6732 30.5635 88.0692C30.8035 88.9692 31.1155 89.3052 31.7155 89.3172H31.7875L31.8355 89.7372L31.7875 90.1572H31.7155ZM31.7194 90.1572L31.6714 89.7372L31.7194 89.3172H32.2954C34.0954 89.3172 34.7554 88.9332 34.7434 88.1412C34.7434 87.5292 34.2874 86.2692 34.1074 85.8612L34.7914 85.5012C35.0314 86.0172 35.4994 87.3132 35.4874 88.1532C35.4754 89.4732 34.4674 90.1572 32.3794 90.1572H31.7194ZM31.8514 91.8132C32.0914 91.5732 32.3314 91.3332 32.5714 91.0812C32.8234 91.3332 33.0514 91.5732 33.3034 91.8132C33.0514 92.0532 32.8234 92.2932 32.5714 92.5332L31.8514 91.8132ZM32.9674 93.0252L33.6154 92.3652C33.8314 92.5812 34.0474 92.8092 34.2634 93.0252C34.0474 93.2412 33.8314 93.4572 33.6154 93.6852C33.3994 93.4572 33.1834 93.2412 32.9674 93.0252ZM33.9274 91.8132C34.1674 91.5732 34.4074 91.3332 34.6474 91.0812C34.8994 91.3332 35.1274 91.5732 35.3794 91.8132C35.1274 92.0532 34.8994 92.2932 34.6474 92.5332L33.9274 91.8132Z"
              fill="#288E87"
            />
            <circle
              cx="18.741"
              cy="64.0046"
              r="7.34141"
              stroke="#83DCD6"
              strokeWidth="0.564724"
            />
            <circle
              cx="18.7411"
              cy="64.0052"
              r="4.51779"
              fill="#83DCD6"
              stroke="#83DCD6"
              strokeWidth="0.564724"
            />
            <circle cx="18.9315" cy="17.7562" r="17.7562" fill="#83DCD6" />
            <path
              d="M19.0305 43.7155C18.7925 44.4507 17.753 44.4523 17.5127 43.7179L13.2351 30.6421C13.0665 30.1267 13.4501 29.5968 13.9924 29.596L22.5068 29.5827C23.0491 29.5819 23.4343 30.1106 23.2673 30.6265L19.0305 43.7155Z"
              fill="#83DCD6"
            />
          </svg>
          <svg
            className="absolute left-[11px] top-[24.5%]"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="18" fill="#1E1E1E" />
            <g id="Frame 26086488">
              <rect
                width="1440"
                height="991"
                transform="translate(-517 -268)"
                fill="white"
              />
              <g id="Group 92">
                <g id="Group 91">
                  <g id="Group 68">
                    <g id="Group 181">
                      <circle
                        id="Ellipse 33"
                        cx="8.93147"
                        cy="8.75618"
                        r="17.7562"
                        fill="#83DCD6"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="vuesax/twotone/card">
                <g id="vuesax/twotone/card_2">
                  <g id="card">
                    <g id="Group 571">
                      <path
                        id="Vector"
                        d="M1.50854 6.37891H14.8419"
                        stroke="white"
                        strokeWidth="1.5"
                        stroke-miterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M4.17529 12.3789H5.50863"
                        stroke="white"
                        strokeWidth="1.5"
                        stroke-miterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_3"
                        d="M7.17529 12.3789H9.84196"
                        stroke="white"
                        strokeWidth="1.5"
                        stroke-miterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <path
                      id="Vector_4"
                      d="M4.46855 2.62891H11.8752C14.2485 2.62891 14.8419 3.28891 14.8419 5.92141V12.0789C14.8419 14.7114 14.2485 15.3714 11.8819 15.3714H4.46855C2.10188 15.3789 1.50854 14.7189 1.50854 12.0864V5.92141C1.50854 3.28891 2.10188 2.62891 4.46855 2.62891Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <svg
          className="absolute top-[48%] -z-10 w-[50%]"
          width="382"
          height="4"
          viewBox="0 0 382 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.230654"
            x2="381.742"
            y2="-0.230654"
            transform="matrix(0.999969 0.00783731 -0.00781928 0.999969 0.0473633 0.517578)"
            stroke="#D6F3F1"
            strokeWidth="0.461309"
          />
        </svg>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex  mr-[9%] mt-[2%] ml-[10%]">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            locale="fa"
            colorPrimary="#45CBC2"
            customDaysClassName={[
              { year: 1402, month: 10, day: 4, className: "bg-[#45CBC2]" },
              { year: 1402, month: 10, day: 12, className: "bg-[#45CBC2]" },
              { year: 1402, month: 10, day: 18, className: "bg-[#45CBC2]" },
              { year: 1402, month: 10, day: 26, className: "bg-[#45CBC2]" },
            ]}
          />
        </div>
        <div className="flex flex-col justify-between h-[300px] items-center lg:mr-[9%] ">
          <p className=" flex items-center justify-center w-[251px] h-[55px] border-[#83DCD6] border-[1.4px] rounded-[12.24px] text-[#064247] text-[14px] font-light">
            {selectedDay.day}
            <span className="mr-[2%]">{month}</span>
          </p>
          <p className="text-[#064247] text-[14px] font-light">انتخاب ساعت</p>
          <div className="flex justify-between items-center flex-wrap  w-full ">
            {hour.map((item, index) => {
              return (
                <div
                  className={`${
                    index == 1 ? "bg-white" : "bg-[#D6F3F1]"
                  } flex basis-[30%] justify-center items-center h-[50px] text-[14px] font-light bg-[#D6F3F1] border-[1.4px] border-[#D6F3F1] my-[2%] rounded-[15.07px] mx-[1%] `}
                >
                  {item.time}
                </div>
              );
            })}
          </div>
          <div className={`text-center `}>
            <button
              className={` border-[1px] w-[176px] font-light text-[14px] border-[#288E87] rounded-[7.98px] px-7 py-4 text-white bg-[#288E87] `}
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default time;
