import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import DatePicker from "./DatePicker";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "./Modal";
import { useMutation } from "@tanstack/react-query";
import apiRequests from "@/Axios/config";
import { useRouter } from "next/router";
import { Slide } from "@mui/material";

function RegisterForm() {
  const dataPation = [{ image: "", name: "کاربر" }];
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    setPhone(localStorage.getItem("phone"));
  }, []);

  console.log(phone);

  const icon = (
    <div className="flex items-center justify-center my-[-220px] z-10">
      <Modal text="پرونده جدید تشکیل شد" />
    </div>
  );

  // const useRegister = () => {
  //   const {} = useMutation({
  //     mutationFn: (data) => {
  //       return apiRequests.post("/api/document", data,{headers:{Authorization: `Bearer ${token}`}});
  //     },
  //   });
  // };

  function confirm(data: any) {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(data);

    // fetch("https://drmakaremi.v1r.ir/api/document", {
    //   method: "POST",

    //   headers: {
    //     Authorization:
    //       "Bearer 27|DQfT8XUFbgXhtpcGh00VJVmchqpgjE283des4jaW4d3be446",
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     first_name: data.name,
    //     last_name: data.familyName,
    //     national_id: data.nationalId,
    //     gender: "مرد",
    //     birth_date: "2004/1/25",
    //     city: data.city,
    //     address: data.city,
    //   }),
    // });

    apiRequests
      .post(
        "/api/document",
        {
          first_name: data.name,
          last_name: data.familyName,
          national_id: data.nationalId,
          gender: gender,
          birth_date: "2004/1/25",
          city: data.city,
          address: data.city,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res), (<Modal text="ثبت نام با موفقیت انجام شد" />);
      })
      .then(() => router.push("/user/reservation"))
      .catch((err) => console.log(err));
  }

  const sendImage = (e: any) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    console.log(e.target.files[0]);
    apiRequests
      .post(
        "/api/document/add-document-avatar",
        { document_id: id, avatar: e.target.files[0] },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex justify-between mx-[20%] mt-[3%]">
        <div className="text-[#0D0630] leading-5 mb-[3%]  tracking-wider">
          <p className="">
            لیست مراجعین ثبت شده با شماره{" "}
            <span className="text-[#45CBC2]">{phone}</span>
          </p>
          <p>لطفا جهت نوبت گرفتن، فرد مورد نظر را انتخاب کنید</p>
        </div>
        <div>
          <select>
            {dataPation.map((item) => {
              return (
                <option>
                  {/* <img src={item.image} /> */}
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex flex-col  text-center items-center mx-[24%] justify-between ">
        <p className="text-[#0D0630] text-center font-bold text-[20px] mb-[5%]">
          تشکیل پرونده برای فرد جدید
        </p>
        <div className="flex flex-col gap-7 items-center">
          
          <div className=" flex flex-col  md:flex-row justify-center  gap-8">
            <CustomInput
              style="w-[393px] md:basis-1/2 "
              label="نام"
              placeholder="مثال : علی"
              // hookForm="register('name')"
              hookForm={register("name")}
            />
            <CustomInput
              style="w-[393px]  md:basis-1/2"
              label="نام خانوادگی"
              placeholder="مثال : علوی"
              hookForm={register("familyName")}
            />
          </div>
          <div className=" flex  flex-col  md:flex-row justify-center  gap-8 ">
            <CustomInput
              style="flex w-[393px] md:basis-1/2"
              label="کد ملی"
              placeholder="مثال : ۲۲۲۳۳۳۵۰۲۳"
              hookForm={register("nationalId")}
            />

            <DatePicker />
          </div>
          <div className="flex flex-col  md:flex-row justify-center items-center gap-8 ">
            <CustomInput
              style=" flex w-[393px] md:basis-1/2 "
              label="شهر"
              placeholder="مثال : تهران"
              hookForm={register("city")}
            />
            <div className="flex basis-1/2 w-[393px]">
              <p className="text-[#064247] ml-[9%] font-medium">جنسیت :</p>
              <div className="flex ">
                <input
                  className="w-[20px] h-[20px] "
                  name="gender"
                  type="radio"
                  value="مرد"
                  onChange={(e: any) => setGender(e.target.value)}
                />
                <label className="mr-[6px]" htmlFor="male">
                  آقا
                </label>
              </div>
              <div className=" flex mr-[3%]">
                <input
                  className="w-[20px] h-[20px]"
                  name="gender"
                  type="radio"
                  value="زن"
                  onChange={(e: any) => setGender(e.target.value)}
                />
                <label className="mr-[6px]" htmlFor="female">
                  خانم
                </label>
              </div>
            </div>
          </div>
          <div className="md:w-[818px] w-[393px]">
            <div className="relative w-full min-w-[200px] h-[70px]   ">
              <textarea
                className="placeholder:absolute placeholder:top-[30%] peer w-full h-[121px] bg-transparent text-blue-gray-700  font-medium outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-[1.5px] placeholder-shown:border-blue-gray-200 placeholder-shown:border-[#EDEDEE] border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[4.73px]  focus:border-gray-900 resize-none		"
                placeholder="مثال : میدان هروی، بلوار پناهی نیا، پلاک 2"
                {...register("addres")}
              ></textarea>
              <label className="flex w-full h-full select-none pointer-events-none absolute  font-semibold !overflow-visible truncate peer-placeholder-shown:text-[#0D0630] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5%] peer-placeholder-shown:text-sm text-[12px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:![border-gray-900] after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                نشانی
              </label>
            </div>
          </div>
          <CustomButton
            text="ثبت نام"
            style="text-white bg-[#288E87] mt-[30%] mb-[20%]"
            onClick={handleSubmit(confirm)}
          />
        </div>
      </div>
      <Slide direction="up" in={openModal}>
        {icon}
      </Slide>
    </div>
  );
}

export default RegisterForm;
