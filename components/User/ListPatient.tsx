import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import DatePicker from "./DatePicker";
import Link from "next/link";
import { useForm } from "react-hook-form";
import apiRequests from "@/Axios/config";
import Modal from "./Modal";
import { Slide } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";

function ListPatient() {
  const icon = (
    <div className="flex absolute  right-[10%] md:right-[35%] lg:right-[40%] top-1/2">
      <Modal text="پرونده جدید تشکیل شد" />
    </div>
  );
  const [patient, setPatient] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [openModal, setOpenModal] = useState(false);
  const [selectedPatiend, setSelectedPatient] = useState<any>();
  const [image, setImage] = useState<any>();
  const { register, handleSubmit, reset } = useForm();
  const [image2, setImage2] = useState<any>();
  //   {
  //   defaultValues: {
  //     name: selectedPatiend?.first_name,
  //     lastName: selectedPatiend?.last_name,
  //     nationalId: selectedPatiend?.national_id,
  //     city: selectedPatiend?.city,
  //     gender: "",
  //     addres: selectedPatiend?.address,
  //   },
  // }
  const [loading, setLoading] = useState<any>(false);
  const route = useRouter();

  useEffect(() => {
    setPhone(localStorage.getItem("phone"));
    getData();
  }, []);

  useEffect(() => {
    setImage2(selectedPatiend?.avatar);
  }, [selectedPatiend]);
  const getData = () => {
    const token = localStorage.getItem("token");
    apiRequests
      .get(`/api/user-document`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res), setPatient(res.data.data);
      })
      .then(() => {
        setPatient((prev: any) => [
          { id: 1000, title: "انتخاب کنید" },
          ...prev,
          { id: 1001, title: "پرونده جدید" },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const confirm = (data: any) => {
    if (selectedPatiend?.id == undefined) {
      toast.error("لطفا پرونده را انتخاب یا ثبت نمایید");
    } else if (selectedPatiend?.id == "1000" || selectedPatiend?.id == "1001") {
      const token = localStorage.getItem("token");
      console.log(data);
      apiRequests
        .post(
          `/api/document`,
          {
            first_name: data.name,
            last_name: data.lastName,
            national_id: data.nationalId,
            gender: data.gender,
            birth_date: "2004/1/25",
            city: data.city,
            address: data.addres,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          setOpenModal(true);
          setTimeout(() => {
            setOpenModal(false);
            route.push("/user/reservation/time")
          }, 2000);
        })
        .catch((err) => {
          // switch (err.response.data.message) {
          //   case "The national id field is required.":
          //     toast.error("کدملی خود را وارد نمایید");
          //     break;
          //   case "The national id field format is invalid.":
          //     toast.error("کدملی خود را به درستی وارد نمایید");
          //     break;
          //   case "The first name field is required.":
          //     route.push("/user/reservation/time");
          // }
          if (
            err.response.data.message == "The first name field is required."
          ) {
          }

          console.log(err.response.data.message);
        });
    } else {
      route.push("/user/reservation/time");
    }
  };
  const sendImage = (e: any) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setLoading(true);
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
        setLoading(false), setImage(e.target.files[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelect = (id: any) => {
    setSelectedPatient(patient.find((item: any) => item.id == id));
    localStorage.setItem("id", id);

    if (id == 1000 || id == 1001) {
      reset({
        name: "",
        lastName: "",
        nationalId: "",
        city: "",
        gender: "",
        addres: "",
      });
    }
    // if(selectedPatiend){setImage2(selectedPatiend?.avatar);}
  };

  console.log(selectedPatiend?.id);
  return (
    <div>
      {/* {image2 ? (
        <img src={image2} alt="image" />
      ) : (
        <svg
          width="125"
          height="125"
          viewBox="0 0 125 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="124.217" height="124.217" rx="62.1084" fill="#CBCBCB" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.8713 14.2042C65.3152 14.6172 61.2145 15.9183 58.384 17.5317C56.7027 18.4898 56.6494 18.5038 53.8853 18.7093C42.3853 19.5646 36.4088 23.6411 34.8212 31.7129C34.3226 34.2483 34.5301 42.2898 35.1851 45.8034C35.2729 46.2736 35.1359 46.419 34.0969 46.9601C31.8545 48.1275 30.7342 49.927 30.5983 52.5797C30.5015 54.4702 31.4139 62.3533 31.9448 64.2128C32.5052 66.1752 34.0829 67.8456 36.0985 68.6108L37.0972 68.99L37.5452 70.8956C37.7917 71.9436 38.2168 73.4787 38.49 74.307C39.5913 77.6465 42.3156 82.3869 44.5197 84.7986L45.572 85.9502L44.7712 89.1486L43.9701 92.347L34.4077 94.7568C29.1485 96.0822 24.071 97.4762 23.1245 97.8546C19.7556 99.2015 17.1117 100.963 14.403 103.665C9.79674 108.262 7.0288 114.637 7.00127 120.713C6.99223 122.718 7.01654 122.83 7.58828 123.402L8.18455 124H61.9506H115.717L116.294 123.422C117.015 122.701 117.171 121.301 116.821 118.672C115.761 110.704 111.272 103.774 104.533 99.7001C101.735 98.0084 99.519 97.2796 89.4935 94.7551L79.9311 92.347L79.2281 89.5655C78.8413 88.0356 78.5228 86.6872 78.52 86.5689C78.5172 86.4506 79.1055 85.6761 79.8272 84.8479C83.2619 80.9062 86.0213 75.4172 86.9129 70.7523C87.2211 69.1397 87.4519 68.6062 87.8413 68.6062C88.3762 68.6062 90.1581 67.2516 90.8981 66.2825C91.8947 64.9774 92.17 63.9 92.8119 58.7991C93.6258 52.3306 93.549 51.0745 92.2205 49.1141C91.6208 48.2289 90.0052 46.8736 89.25 46.6217C89.0688 46.5615 89.0663 45.4467 89.2399 42.2866L89.4734 38.0325L90.7789 36.5936C91.4971 35.8024 92.3685 34.6629 92.7153 34.0614C94.9687 30.1552 94.1074 25.3036 90.2973 20.4408C87.7027 17.1294 83.3417 14.95 77.799 14.1947C75.8643 13.931 71.1798 13.9361 68.8713 14.2042Z"
            fill="white"
          />
        </svg>
      )} */}
      <div className="flex justify-between mx-[20%] mt-[3%]">
        <div className="text-[#0D0630] leading-5 mb-[3%]  tracking-wider">
          <p className="">
            لیست مراجعین ثبت شده با شماره{" "}
            <span className="text-[#45CBC2]">{phone}</span>
          </p>
          <p>لطفا جهت نوبت گرفتن، فرد مورد نظر را انتخاب کنید</p>
        </div>
        <div>
          <select
            className="flex flex-col"
            onChange={(e: any) => handleSelect(e.target.value)}
          >
            {patient?.map((item: any, index: any) => {
              if (item.id == 1000 || item.id == 1001) {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              }
              return (
                <option key={item.id} value={item.id}>
                  {item.first_name} <span>{item.last_name}</span>
                </option>
              );
            })}
          </select>

          <Link
            href={"/user/changePass"}
            className="text-[#288E87] font-iranSansLight text-[14px]"
          >
            تغییر رمز عبور
          </Link>
        </div>
      </div>
      <div className="flex flex-col  text-center items-center mx-[24%] justify-between ">
        <p className="text-[#0D0630] text-center font-bold text-[20px] mb-[5%]">
          تشکیل پرونده برای فرد جدید
        </p>
        <div className="flex flex-col gap-7 items-center">
          <div className="flex justify-center relative">
            <input
              type="file"
              className="absolute w-full h-full opacity-0 z-10"
              onChange={sendImage}
            />
            <div className="absolute top-[40%]">
              {loading ? <ClipLoader color="#36d7b7" /> : null}
            </div>

            {image ? (
              <div className="relative bg-[#ededee] sm:rounded-full rounded-full w-[124px] h-[124px] mt-[8] justify-center">
                <img
                  className="rounded-full"
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              </div>
            ) : image2 ? (
              <div className="relative bg-[#ededee] sm:rounded-full rounded-full w-[124px] h-[124px] mt-[8] justify-center">
                <img className="rounded-full" src={image2} alt="" />
              </div>
            ) : (
              <svg
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="124.217"
                  height="124.217"
                  rx="62.1084"
                  fill="#CBCBCB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M68.8713 14.2042C65.3152 14.6172 61.2145 15.9183 58.384 17.5317C56.7027 18.4898 56.6494 18.5038 53.8853 18.7093C42.3853 19.5646 36.4088 23.6411 34.8212 31.7129C34.3226 34.2483 34.5301 42.2898 35.1851 45.8034C35.2729 46.2736 35.1359 46.419 34.0969 46.9601C31.8545 48.1275 30.7342 49.927 30.5983 52.5797C30.5015 54.4702 31.4139 62.3533 31.9448 64.2128C32.5052 66.1752 34.0829 67.8456 36.0985 68.6108L37.0972 68.99L37.5452 70.8956C37.7917 71.9436 38.2168 73.4787 38.49 74.307C39.5913 77.6465 42.3156 82.3869 44.5197 84.7986L45.572 85.9502L44.7712 89.1486L43.9701 92.347L34.4077 94.7568C29.1485 96.0822 24.071 97.4762 23.1245 97.8546C19.7556 99.2015 17.1117 100.963 14.403 103.665C9.79674 108.262 7.0288 114.637 7.00127 120.713C6.99223 122.718 7.01654 122.83 7.58828 123.402L8.18455 124H61.9506H115.717L116.294 123.422C117.015 122.701 117.171 121.301 116.821 118.672C115.761 110.704 111.272 103.774 104.533 99.7001C101.735 98.0084 99.519 97.2796 89.4935 94.7551L79.9311 92.347L79.2281 89.5655C78.8413 88.0356 78.5228 86.6872 78.52 86.5689C78.5172 86.4506 79.1055 85.6761 79.8272 84.8479C83.2619 80.9062 86.0213 75.4172 86.9129 70.7523C87.2211 69.1397 87.4519 68.6062 87.8413 68.6062C88.3762 68.6062 90.1581 67.2516 90.8981 66.2825C91.8947 64.9774 92.17 63.9 92.8119 58.7991C93.6258 52.3306 93.549 51.0745 92.2205 49.1141C91.6208 48.2289 90.0052 46.8736 89.25 46.6217C89.0688 46.5615 89.0663 45.4467 89.2399 42.2866L89.4734 38.0325L90.7789 36.5936C91.4971 35.8024 92.3685 34.6629 92.7153 34.0614C94.9687 30.1552 94.1074 25.3036 90.2973 20.4408C87.7027 17.1294 83.3417 14.95 77.799 14.1947C75.8643 13.931 71.1798 13.9361 68.8713 14.2042Z"
                  fill="white"
                />
              </svg>
            )}
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
          <div className=" flex flex-col  md:flex-row justify-center  gap-8">
            <CustomInput
              style="w-[393px] md:basis-1/2 "
              label="نام"
              placeholder="مثال : علی"
              hookForm={register("name")}
              value={selectedPatiend?.first_name}
            />
            <CustomInput
              style="w-[393px]  md:basis-1/2"
              label="نام خانوادگی"
              placeholder="مثال : علوی"
              hookForm={register("lastName")}
              value={selectedPatiend?.last_name}
            />
          </div>
          <div className=" flex  flex-col  md:flex-row justify-center  gap-8 ">
            <CustomInput
              style="flex w-[393px] md:basis-1/2"
              label="کد ملی"
              placeholder="مثال : ۲۲۲۳۳۳۵۰۲۳"
              hookForm={register("nationalId")}
              value={selectedPatiend?.national_id}
            />

            <DatePicker />
          </div>
          <div className="flex flex-col  md:flex-row justify-center items-center gap-8 ">
            <CustomInput
              style=" flex w-[393px] md:basis-1/2 "
              label="شهر"
              placeholder="مثال : تهران"
              hookForm={register("city")}
              value={selectedPatiend?.city}
            />
            <div className="flex basis-1/2 w-[393px]">
              <p className="text-[#064247] ml-[9%] font-medium">جنسیت :</p>
              <div className="flex ">
                <input
                  className="w-[20px] h-[20px] "
                  type="radio"
                  value="مرد"
                  {...register("gender")}
                  // checked={selectedPatiend?.gender == "مرد"}
                />
                <label className="mr-[6px]" htmlFor="male">
                  آقا
                </label>
              </div>
              <div className=" flex mr-[3%]">
                <input
                  className="w-[20px] h-[20px]"
                  type="radio"
                  value="خانم"
                  {...register("gender")}
                  // checked={selectedPatiend?.gender == "زن"}
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
                value={selectedPatiend?.address}
              ></textarea>
              <label className="flex w-full h-full select-none pointer-events-none absolute  font-semibold !overflow-visible truncate peer-placeholder-shown:text-[#0D0630] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5%] peer-placeholder-shown:text-sm text-[12px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:![border-gray-900] after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                نشانی
              </label>
            </div>
          </div>
          <CustomButton
            text="رزرو نوبت"
            style="text-white bg-[#288E87] mt-[30%] mb-[20%]"
            onClick={
              handleSubmit(confirm)
              // if (selectedPatiend.id == "1000" || selectedPatiend.id == "1001") {
              //   console.log("first"), handleSubmit(confirm);
              // } else {
              //   console.log(selectedPatiend?.id);
              //   route.push("/user/reservation/time");
              // }
            }
          />
        </div>
      </div>

      <Slide direction="up" in={openModal}>
        {icon}
      </Slide>
      <Toaster />
    </div>
  );
}

export default ListPatient;
