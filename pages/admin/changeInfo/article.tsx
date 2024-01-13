import React from "react";
import Layout from "../Layout";

function article() {
  const text = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
        >
          <path
            d="M27 40.5H54"
            stroke="#757575"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.5 54V27"
            stroke="#757575"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.375 74.25H50.625C67.5 74.25 74.25 67.5 74.25 50.625V30.375C74.25 13.5 67.5 6.75 50.625 6.75H30.375C13.5 6.75 6.75 13.5 6.75 30.375V50.625C6.75 67.5 13.5 74.25 30.375 74.25Z"
            stroke="#757575"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      p: "افزودن مقاله جدید",
    },
    {
      img: "/images/admin/eyesight.png",
      p: "معاینه و تست چشم",
      des: "انجام معاینه چشم و تست بینایی بخشی مهمی در سالم ماندن است. اما آیا می دانید",
      date: "شنبه 17 تیر 1402",
      v: "2 دیدگاه",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M14.1535 9.02669C14.1535 12.2467 11.5401 14.86 8.32015 14.86C5.10015 14.86 2.48682 12.2467 2.48682 9.02669C2.48682 5.80669 5.10015 3.19336 8.32015 3.19336C11.5401 3.19336 14.1535 5.80669 14.1535 9.02669Z"
            stroke="#064247"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M8.32013 5.52637V8.8597"
            stroke="#0D0630"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M6.32013 1.52637H10.3201"
            stroke="#0D0630"
            strokeWidth="1.5"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
        >
          <path
            d="M15.6316 7.77702V9.90202C15.6316 12.7354 14.2982 14.152 11.6316 14.152H11.2982C11.0916 14.152 10.8916 14.2583 10.7649 14.4354L9.76488 15.852C9.32488 16.4754 8.60488 16.4754 8.16488 15.852L7.16488 14.4354C7.05822 14.2795 6.81155 14.152 6.63155 14.152H6.29822C3.63155 14.152 2.29822 13.4437 2.29822 9.90202V6.36035C2.29822 3.52702 3.63155 2.11035 6.29822 2.11035H10.2982"
            stroke="#064247"
            strokeWidth="1.5"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M13.9649 5.65202C14.8854 5.65202 15.6316 4.85919 15.6316 3.88119C15.6316 2.90318 14.8854 2.11035 13.9649 2.11035C13.0444 2.11035 12.2982 2.90318 12.2982 3.88119C12.2982 4.85919 13.0444 5.65202 13.9649 5.65202Z"
            stroke="#0D0630"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M11.6292 8.48503H11.6352"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M8.96187 8.48503H8.96786"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M6.29458 8.48503H6.30056"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      img: "/images/admin/Maneye.png",
      p: "درمان تنبلی چشم",
      des: "تنبلی چشم یکی از انواع اختلالات بینایی است که بر اثر آن در یک چشم به ظاهر سالم، کاهش دید مرکزی به وجود می آید.",
      date: "دوشنبه 19 تیر 1402",
      v: "2 دیدگاه",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M14.1094 9.01009C14.1094 12.2301 11.4961 14.8434 8.27608 14.8434C5.05608 14.8434 2.44275 12.2301 2.44275 9.01009C2.44275 5.79009 5.05608 3.17676 8.27608 3.17676C11.4961 3.17676 14.1094 5.79009 14.1094 9.01009Z"
            stroke="#064247"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M8.27612 5.50977V8.8431"
            stroke="#0D0630"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M6.27612 1.50977H10.2761"
            stroke="#0D0630"
            strokeWidth="1.5"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
        >
          <path
            d="M15.5876 7.76042V9.88542C15.5876 12.7187 14.2543 14.1354 11.5876 14.1354H11.2543C11.0476 14.1354 10.8476 14.2417 10.7209 14.4187L9.72094 15.8354C9.28094 16.4587 8.56094 16.4587 8.12094 15.8354L7.12094 14.4187C7.01427 14.2629 6.76761 14.1354 6.58761 14.1354H6.25427C3.58761 14.1354 2.25427 13.4271 2.25427 9.88542V6.34375C2.25427 3.51042 3.58761 2.09375 6.25427 2.09375H10.2543"
            stroke="#064247"
            strokeWidth="1.5"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M13.9209 5.63542C14.8414 5.63542 15.5876 4.84259 15.5876 3.86458C15.5876 2.88658 14.8414 2.09375 13.9209 2.09375C13.0005 2.09375 12.2543 2.88658 12.2543 3.86458C12.2543 4.84259 13.0005 5.63542 13.9209 5.63542Z"
            stroke="#0D0630"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M11.5853 8.46842H11.5913"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M8.91793 8.46842H8.92392"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M6.25063 8.46842H6.25662"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      img: "/images/admin/Half face.png",
      p: "چشم‌های آبی شما واقعا آبی نیستند",
      des: "چشم های آبی شما واقعاً به رنگ آبی نیستند رنگ چشم‌ها را دو فقط عامل می تواننند تعیین کنند",
      date: "شنبه 17 تیر 1402",
      v: "2 دیدگاه",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M14.1095 9.01009C14.1095 12.2301 11.4962 14.8434 8.2762 14.8434C5.0562 14.8434 2.44287 12.2301 2.44287 9.01009C2.44287 5.79009 5.0562 3.17676 8.2762 3.17676C11.4962 3.17676 14.1095 5.79009 14.1095 9.01009Z"
            stroke="#064247"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M8.27618 5.50977V8.8431"
            stroke="#0D0630"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M6.27618 1.50977H10.2762"
            stroke="#0D0630"
            strokeWidth="1.5"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
        >
          <path
            d="M15.5876 7.76042V9.88542C15.5876 12.7187 14.2543 14.1354 11.5876 14.1354H11.2543C11.0476 14.1354 10.8476 14.2417 10.7209 14.4187L9.72094 15.8354C9.28094 16.4587 8.56094 16.4587 8.12094 15.8354L7.12094 14.4187C7.01427 14.2629 6.76761 14.1354 6.58761 14.1354H6.25427C3.58761 14.1354 2.25427 13.4271 2.25427 9.88542V6.34375C2.25427 3.51042 3.58761 2.09375 6.25427 2.09375H10.2543"
            stroke="#064247"
            strokeWidth="1.5"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M13.9209 5.63542C14.8414 5.63542 15.5876 4.84259 15.5876 3.86458C15.5876 2.88658 14.8414 2.09375 13.9209 2.09375C13.0005 2.09375 12.2543 2.88658 12.2543 3.86458C12.2543 4.84259 13.0005 5.63542 13.9209 5.63542Z"
            stroke="#0D0630"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M11.5853 8.46842H11.5913"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M8.91793 8.46842H8.92392"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.9"
            d="M6.25063 8.46842H6.25662"
            stroke="#0D0630"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <Layout>
      <div className="mr-[8%] mt-[3%] ">
        <div className="flex items-center mb-[5%] rounded-[6.422px]">
          <p className="text-[16px] text-[#45CBC2]">تغییر اطلاعات</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mx-[3%]"
          >
            <path
              d="M8 1.5L2 7L8 12.5"
              stroke="#064247"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className=" text-[20px] text-[#757575]">بلاگ و مقالات</p>
        </div>
        <div className="flex flex-wrap justify-between ml-[20%] mr-[5%]">
          {text.map((item, index) => {
            if (index == 0) {
              return (
                <div className="w-[347px] h-[461px] bg-gray-300 shadow-2xl	rounded-[6.422px] mt-[5%] flex items-center justify-center flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="81"
                    height="81"
                    viewBox="0 0 81 81"
                    fill="none"
                  >
                    <path
                      d="M27 40.5H54"
                      stroke="#757575"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.5 54V27"
                      stroke="#757575"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.375 74.25H50.625C67.5 74.25 74.25 67.5 74.25 50.625V30.375C74.25 13.5 67.5 6.75 50.625 6.75H30.375C13.5 6.75 6.75 13.5 6.75 30.375V50.625C6.75 67.5 13.5 74.25 30.375 74.25Z"
                      stroke="#757575"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>افزودن مقاله جدید</p>
                </div>
              );
            }
            return (
              <div className="w-[347px] h-[461px] bg-white shadow-2xl	rounded-[6.422px] mt-[5%]">
                <div className="flex justify-center mt-[6%]">
                  <img
                    src={item.img}
                    alt="img"
                    className="w-[313px] h-[313px] rounded-[6.422px] "
                  />
                </div>
                <p className="text-[16px] text-[#064247] font-bold mt-[5%] mr-[5%]">
                  {" "}
                  {item.p}
                </p>
                <p className="text-[12px] mr-[5%]"> {item.des}</p>
                <div className="flex justify-between content-end mx-[3%] mt-[5%]">
                  <div className="flex">
                    {item.svg}
                    <p className="text-[12px] text-[#757575]"> {item.date}</p>
                  </div>

                  <div className="flex ">
                    {item.icon}
                    <p className="text-[12px] text-[#757575]"> {item.v}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default article;
