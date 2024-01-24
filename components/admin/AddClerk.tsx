import React, { useEffect } from "react";
import CustomInput from "../user/CustomInput";
import { useForm } from "react-hook-form";
import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";

function AddClerk({ dataClerk }: any) {
  useEffect(() => {
    dataClerk && setValue("name", dataClerk.name),
      setValue("lastName", dataClerk.family),
      setValue("nationalId", dataClerk.national_id),
      setValue("phoneNum", dataClerk.phone_number);
  }, [dataClerk]);
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const confirm = (data: any) => {
    const token = localStorage.getItem("token");
    if (dataClerk.length !== 0) {
      apiRequests
        .put(
          `/api/user/clerk/${dataClerk.id}`,
          {
            phone_number: data.phoneNum,
            name: data.name,
            family: data.lastName,
            national_id: data.nationalId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res), router.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      apiRequests
        .post(
          "/api/user/clerk",
          {
            phone_number: data.phoneNum,
            name: data.name,
            family: data.lastName,
            national_id: data.nationalId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res), router.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  const handleEdit = () => {
    console.log("first");
  };
  console.log(dataClerk);
  return (
    <div className="mt-[11.24%] mb-[9%]">
      <div className="flex justify-center relative">
        <svg
          width="125"
          height="125"
          viewBox="0 0 125 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="124.217" height="124.217" rx="62.1084" fill="#CBCBCB" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.8713 14.2042C65.3152 14.6172 61.2145 15.9183 58.384 17.5317C56.7027 18.4898 56.6494 18.5038 53.8853 18.7093C42.3853 19.5646 36.4088 23.6411 34.8212 31.7129C34.3226 34.2483 34.5301 42.2898 35.1851 45.8034C35.2729 46.2736 35.1359 46.419 34.0969 46.9601C31.8545 48.1275 30.7342 49.927 30.5983 52.5797C30.5015 54.4702 31.4139 62.3533 31.9448 64.2128C32.5052 66.1752 34.0829 67.8456 36.0985 68.6108L37.0972 68.99L37.5452 70.8956C37.7917 71.9436 38.2168 73.4787 38.49 74.307C39.5913 77.6465 42.3156 82.3869 44.5197 84.7986L45.572 85.9502L44.7712 89.1486L43.9701 92.347L34.4077 94.7568C29.1485 96.0822 24.071 97.4762 23.1245 97.8546C19.7556 99.2015 17.1117 100.963 14.403 103.665C9.79674 108.262 7.0288 114.637 7.00127 120.713C6.99223 122.718 7.01654 122.83 7.58828 123.402L8.18455 124H61.9506H115.717L116.294 123.422C117.015 122.701 117.171 121.301 116.821 118.672C115.761 110.704 111.272 103.774 104.533 99.7001C101.735 98.0084 99.519 97.2796 89.4935 94.7551L79.9311 92.347L79.2281 89.5655C78.8413 88.0356 78.5228 86.6872 78.52 86.5689C78.5172 86.4506 79.1055 85.6761 79.8272 84.8479C83.2619 80.9062 86.0213 75.4172 86.9129 70.7523C87.2211 69.1397 87.4519 68.6062 87.8413 68.6062C88.3762 68.6062 90.1581 67.2516 90.8981 66.2825C91.8947 64.9774 92.17 63.9 92.8119 58.7991C93.6258 52.3306 93.549 51.0745 92.2205 49.1141C91.6208 48.2289 90.0052 46.8736 89.25 46.6217C89.0688 46.5615 89.0663 45.4467 89.2399 42.2866L89.4734 38.0325L90.7789 36.5936C91.4971 35.8024 92.3685 34.6629 92.7153 34.0614C94.9687 30.1552 94.1074 25.3036 90.2973 20.4408C87.7027 17.1294 83.3417 14.95 77.799 14.1947C75.8643 13.931 71.1798 13.9361 68.8713 14.2042Z"
            fill="white"
          />
        </svg>
        <div className="bg-white  rounded-full w-[30px] h-[30px] z-10 absolute top-[75%]  left-[53%]">
          <svg
            className="absolute left-[9.5%] top-[9%] bg-[#D6F3F1] px-1 py-1 rounded-full w-[24px] h-[24px]"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99999 6.66667C6.73637 6.66667 7.33332 6.06971 7.33332 5.33333C7.33332 4.59695 6.73637 4 5.99999 4C5.26361 4 4.66666 4.59695 4.66666 5.33333C4.66666 6.06971 5.26361 6.66667 5.99999 6.66667Z"
              stroke="#064247"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66668 1.3335H6.00001C2.66668 1.3335 1.33334 2.66683 1.33334 6.00016V10.0002C1.33334 13.3335 2.66668 14.6668 6.00001 14.6668H10C13.3333 14.6668 14.6667 13.3335 14.6667 10.0002V6.66683"
              stroke="#064247"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 3.3335H14.1667"
              stroke="#064247"
              strokeLinecap="round"
            />
            <path
              d="M12.3333 5.16667V1.5"
              stroke="#064247"
              strokeLinecap="round"
            />
            <path
              d="M1.78 12.6335L5.06667 10.4269C5.59333 10.0735 6.35333 10.1135 6.82667 10.5202L7.04667 10.7135C7.56667 11.1602 8.40667 11.1602 8.92667 10.7135L11.7 8.33354C12.22 7.88687 13.06 7.88687 13.58 8.33354L14.6667 9.26687"
              stroke="#064247"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="font-iranSansLight opacity-60 mr-[19%] mb-[2%] text-[12px] text-[#757575]">
        افزودن ادمین جدید
      </p>
      <div className="flex flex-wrap justify-center  mx-[10%]  ">
        <CustomInput
          label="نام"
          placeholder="مثال: کوروش "
          style="md:w-[37.78%]  w-full md:ml-[3%]  "
          hookForm={register("name")}
        />
        <CustomInput
          label="نام خانوادگی"
          placeholder="مثال : هخامنشی"
          style="md:w-[37.78%]  w-full"
          hookForm={register("lastName")}
        />
        <CustomInput
          label="کد ملی"
          placeholder="مثال : 0123456789"
          style="md:w-[37.78%]  w-full md:ml-[3%] md:mt-[3%]"
          hookForm={register("nationalId")}
        />
        <CustomInput
          label="شماره تلفن"
          placeholder="مثال : 09351112114"
          style="md:w-[37.78%]  w-full md:mt-[3%]"
          hookForm={register("phoneNum")}
        />
      </div>
      <div className={`text-center  mt-[4%]`}>
        <button
          className={` border-[1px] w-[210px] h-[48px] font-iranSansLight text-[16px] border-[#288E87] rounded-[7.98px] px-7  text-white bg-[#288E87]`}
          onClick={handleSubmit(confirm)}
        >
          {dataClerk.length !== 0 ? "ثبت تغییرات" : "افزودن منشی"}
        </button>
      </div>
    </div>
  );
}

export default AddClerk;
