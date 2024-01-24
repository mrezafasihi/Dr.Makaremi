import React, { useEffect } from "react";
import Layout from "./Layout";
import { CChart } from "@coreui/react-chartjs";
import { useForm } from "react-hook-form";
import apiRequests from "@/Axios/config";

function statistics() {
  const { register, handleSubmit } = useForm();
 
  const onSubmit = () => {
    const token = localStorage.getItem("token");
    apiRequests.post(
      `/api/statistics`,
      {
        surgery_count: "surgery",
        credible_article_count: "article",
        lasik_surgery_count: "count",
      },
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((res)=>console.log(res))
    console.log(onSubmit)
  };
  return (
    <Layout>
      <div className="bg-[#EDF8F7] h-full pt-[5%] pr-[12%] flex font-IRANSansXFaNum">
        <div>
          <p className="text-[16px] text-[#288E87] mb-[10%]">آمار کلی</p>
          <div className="flex flex-col mt-[5%] mr-[2%]">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.66668 3.99967H9.33334C10.6667 3.99967 10.6667 3.33301 10.6667 2.66634C10.6667 1.33301 10 1.33301 9.33334 1.33301H6.66668C6.00001 1.33301 5.33334 1.33301 5.33334 2.66634C5.33334 3.99967 6.00001 3.99967 6.66668 3.99967Z"
                  stroke="#064247"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 2.67969C12.8867 2.79969 14 3.61969 14 6.66635V10.6664C14 13.333 13.3333 14.6664 10 14.6664H6C2.66667 14.6664 2 13.333 2 10.6664V6.66635C2 3.62635 3.11333 2.79969 5.33333 2.67969"
                  stroke="#064247"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[12px] text-[#064247] mr-[1%]">
                تعداد جراحی سالیانه
              </p>
            </div>
            <input
              className="w-[259px] h-[70px] text-[#064247] bg-white rounded-[10px] mt-[2%] flex items-center pr-[2%]"
              defaultValue="13,635"
              {...register("surgery")}
            />
          </div>
          <div className="flex flex-col mr-[2%]">
            <div className="flex mt-[18%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.3867 8.49995C10.3867 9.81995 9.32001 10.8866 8.00001 10.8866C6.68001 10.8866 5.61334 9.81995 5.61334 8.49995C5.61334 7.17995 6.68001 6.11328 8.00001 6.11328C9.32001 6.11328 10.3867 7.17995 10.3867 8.49995Z"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.99999 14.0138C10.3533 14.0138 12.5467 12.6271 14.0733 10.2271C14.6733 9.28714 14.6733 7.70714 14.0733 6.76714C12.5467 4.36714 10.3533 2.98047 7.99999 2.98047C5.64665 2.98047 3.45332 4.36714 1.92665 6.76714C1.32665 7.70714 1.32665 9.28714 1.92665 10.2271C3.45332 12.6271 5.64665 14.0138 7.99999 14.0138Z"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#064247] text-[12px] mr-[1%]">
                تعداد جراحی لیزیک
              </p>
            </div>
            <input
              className="text-[#064247] text-[16px] bg-white w-[263px] h-[70px] rounded-[10px] mt-[1%] flex items-center pr-[2%]"
              defaultValue="8,635"
              {...register("count")}
            />
          </div>
          <div className="w-[263px] h-[192px] bg-white rounded-[10px] mt-[35%] mr-[2%] pr-[4%] pt-[4%] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className=""
            >
              <path
                d="M20 29.8337H12C8.43739 29.8337 6.01408 29.0706 4.47188 27.5284C2.92967 25.9862 2.16666 23.5629 2.16666 20.0003V12.0003C2.16666 8.43772 2.92967 6.01442 4.47188 4.47221C6.01408 2.93001 8.43739 2.16699 12 2.16699H14.6667C14.9372 2.16699 15.1667 2.39647 15.1667 2.66699C15.1667 2.93752 14.9372 3.16699 14.6667 3.16699H12C8.89138 3.16699 6.63515 3.71473 5.17477 5.17511C3.71439 6.63548 3.16666 8.89172 3.16666 12.0003V20.0003C3.16666 23.1089 3.71439 25.3652 5.17477 26.8255C6.63515 28.2859 8.89138 28.8337 12 28.8337H20C23.1086 28.8337 25.3648 28.2859 26.8252 26.8255C28.2856 25.3652 28.8333 23.1089 28.8333 20.0003V17.3337C28.8333 17.0631 29.0628 16.8337 29.3333 16.8337C29.6038 16.8337 29.8333 17.0631 29.8333 17.3337V20.0003C29.8333 23.5629 29.0703 25.9862 27.5281 27.5284C25.9859 29.0706 23.5626 29.8337 20 29.8337Z"
                stroke="#064247"
              />
              <path
                d="M8.93472 20.2326L8.93498 20.2308L9.50832 16.2175L9.50865 16.2151C9.60004 15.5525 10.0553 14.6519 10.5269 14.1803L21.0336 3.67363C22.3044 2.4028 23.5214 1.83008 24.68 1.83008C25.8386 1.83008 27.0556 2.4028 28.3264 3.67363C29.7141 5.0613 30.2703 6.4029 30.1556 7.68617C30.0503 8.73201 29.4896 9.80279 28.3284 10.9512L28.3264 10.9532L17.8198 21.4599C17.3482 21.9315 16.4476 22.3867 15.785 22.4781L15.7826 22.4784L11.7693 23.0518L11.7483 23.0548L11.7276 23.0595C11.6183 23.0848 11.5009 23.0867 11.3333 23.0867C10.6425 23.0867 10.0248 22.8391 9.57805 22.4043C9.05219 21.877 8.80807 21.0961 8.93472 20.2326ZM21.7413 4.37834L21.7398 4.37986L11.2331 14.8865L11.5867 15.2401L11.2331 14.8865C11.0526 15.067 10.8876 15.3303 10.7651 15.5735C10.6426 15.8168 10.5305 16.1035 10.4925 16.3507L10.4925 16.3507L10.4917 16.356L9.91836 20.3694L9.91803 20.3718C9.85199 20.8505 9.93745 21.3513 10.2865 21.7003C10.6355 22.0493 11.1363 22.1348 11.615 22.0687L11.6174 22.0684L15.6307 21.4951L15.6307 21.4951L15.636 21.4943C15.8819 21.4564 16.1713 21.3451 16.4169 21.2223C16.6574 21.1021 16.9252 20.9364 17.1044 20.7495L27.6069 10.247C28.5041 9.34978 29.0552 8.47233 29.1379 7.57951L29.1379 7.57937C29.2382 6.49249 28.6598 5.43332 27.6092 4.36884L27.6069 4.36652C26.4909 3.25053 25.4524 2.7526 24.4123 2.84887C23.4003 2.94254 22.5363 3.5901 21.7413 4.37834Z"
                stroke="#064247"
              />
              <path
                d="M26.3581 12.592L26.3469 12.5883L26.3354 12.5851C22.997 11.6457 20.3417 8.99082 19.4018 5.65259C19.3296 5.38762 19.478 5.11211 19.7515 5.02699C20.0199 4.95625 20.2858 5.11026 20.3579 5.37229L20.3579 5.37229L20.3587 5.37528C21.2059 8.38283 23.5902 10.7671 26.5978 11.6143L26.5978 11.6143L26.6008 11.6151C26.8588 11.6861 27.0205 11.9643 26.9445 12.2405L26.9433 12.2451C26.8847 12.4665 26.6931 12.6064 26.4667 12.6064C26.4174 12.6064 26.3787 12.5989 26.3581 12.592Z"
                stroke="#064247"
              />
            </svg>
            <p className="text-[#288E87] text-[16px] mt-[12%]">
              تعداد مقاله‌های معتبر
            </p>
            <input
              className="text-[#064247] text-[16px] mt-[5%]"
              defaultValue={"12 مقاله"}
              {...register("article")}
            />
          </div>
        </div>
        <div className="w-[572px] h-[527px] bg-white rounded-[16px] mr-[7%] mt-[4%]">
          <div className="flex flex-col">
            <div className="flex items-center mt-[2%] mr-[3%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-[2%]"
              >
                <path
                  d="M11.9984 4.77301C11.9584 4.76634 11.9118 4.76634 11.8718 4.77301C10.9518 4.73968 10.2184 3.98634 10.2184 3.05301C10.2184 2.09968 10.9851 1.33301 11.9384 1.33301C12.8918 1.33301 13.6584 2.10634 13.6584 3.05301C13.6518 3.98634 12.9184 4.73968 11.9984 4.77301Z"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3117 9.62645C12.225 9.77978 13.2317 9.61978 13.9384 9.14645C14.8784 8.51978 14.8784 7.49312 13.9384 6.86645C13.225 6.39312 12.205 6.23311 11.2917 6.39311"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.97836 4.77301C4.01836 4.76634 4.06503 4.76634 4.10503 4.77301C5.02503 4.73968 5.75836 3.98634 5.75836 3.05301C5.75836 2.09968 4.99169 1.33301 4.03836 1.33301C3.08503 1.33301 2.31836 2.10634 2.31836 3.05301C2.32503 3.98634 3.05836 4.73968 3.97836 4.77301Z"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66498 9.62645C3.75165 9.77978 2.74498 9.61978 2.03831 9.14645C1.09831 8.51978 1.09831 7.49312 2.03831 6.86645C2.75165 6.39312 3.77164 6.23311 4.68498 6.39311"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.99997 9.75348C7.95997 9.74681 7.9133 9.74681 7.8733 9.75348C6.9533 9.72015 6.21997 8.96681 6.21997 8.03348C6.21997 7.08014 6.98664 6.31348 7.93997 6.31348C8.8933 6.31348 9.65997 7.08681 9.65997 8.03348C9.6533 8.96681 8.91997 9.72681 7.99997 9.75348Z"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.05998 11.8532C5.11998 12.4799 5.11998 13.5066 6.05998 14.1332C7.12665 14.8466 8.87331 14.8466 9.93998 14.1332C10.88 13.5066 10.88 12.4799 9.93998 11.8532C8.87998 11.1466 7.12665 11.1466 6.05998 11.8532Z"
                  stroke="#064247"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[14px] text-[#CBCBCB] mr-[2%]">
                تعداد مراجعین
              </p>
            </div>
            <p className="text-[#288E87] text-[32px] font-kalameh mx-auto">
              689
            </p>
            <div className="flex w-[196px] h-[24px] text-[16px] text-[#83DCD6] justify-between mx-auto mt-[5%]">
              <button>روز</button>
              <button>هفته</button>
              <button className="text-[#288E87]">ماه</button>
              <button>سال</button>
            </div>
          </div>
          <CChart
            className="mt-[15%]"
            type="line"
            data={{
              labels: ["اسفند", "بهمن", "دی", "آذر", "آبان", "مهر"],
              datasets: [
                {
                  tension: 0.8,
                  fill: true,
                  // label: "My First dataset",
                  backgroundColor: "#D6F3F1",
                  //   (context:any)=>{
                  //     const chart= context.chart;
                  //     const {ctx,chartArea,scales}=chart;
                  //     if (!chartArea){return null}
                  //     return bgGradient(ctx,chartArea,scales)
                  //   },
                  borderColor: "#064247",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: [3, 20, 5, 10, 17, 6],
                },
              ],
            }}
            options={{
              scales: {
                xAxis: {},
              },
            }}
          />
          {/* <CChart 
  type="radar"
  data={{
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'black',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
      
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'red',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        fill:true,
        
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  }}
  
  
/> */}
        </div>
      </div>
      <button onClick={handleSubmit(onSubmit)}>ثبت</button>
    </Layout>
  );
}

export default statistics;
