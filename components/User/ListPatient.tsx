import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function ListPatient() {
  const dataPation = [
    { image: "", name: "فائزه ملکی" },
    { image: "", name: "محمد جعفری" },
    { image: "", name: "امیر محمدی" },
  ];
  let arr: any = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 9; j++) {
      if (i == 0 && j == 0) {
      } else if (i == 0) {
        arr = [...arr, "0" + j];
      } else if (i == 1) {
        arr = [...arr, "1" + j];
      } else if (i == 2) {
        arr = [...arr, "2" + j];
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between mx-[20%] mt-[3%]">
        <div className="text-[#0D0630] leading-5 mb-[3%]  tracking-wider">
          <p className="">
            لیست مراجعین ثبت شده با شماره{" "}
            <span className="text-[#45CBC2]">۰۹۱۱۳۴۵۶۷۸</span>
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
            />
            <CustomInput
              style="w-[393px]  md:basis-1/2"
              label="نام خانوادگی"
              placeholder="مثال : علوی"
            />
          </div>
          <div className=" flex  flex-col  md:flex-row justify-center  gap-8 ">
            <CustomInput
              style="flex w-[393px] md:basis-1/2"
              label="کد ملی"
              placeholder="مثال : ۲۲۲۳۳۳۵۰۲۳"
            />
            <div className="flex md:basis-1/2 w-[393px] justify-between ">
              <select
                className="border rounded-[6px] basis-[20%]"
                name=""
                id=""
              >
                <option value="">01</option>
                <option value="">02</option>
              </select>
              <select className="border rounded-[6px] basis-[50%]" id="">
                <option value="فروردین">فروردین</option>
                <option value="اردیبهشت">اردیبهشت</option>
                <option value="خرداد">خرداد</option>
                <option value="تیر">تیر</option>
                <option value="مرداد">مرداد</option>
                <option value="شهریور">شهریور</option>
                <option value="مهر">مهر</option>
                <option value="آبان">آبان</option>
                <option value="آذر">آذر</option>
                <option value="دی">دی</option>
                <option value="بهمن">بهمن</option>
                <option value="اسفند">اسفند</option>
              </select>
              <select
                className="border rounded-[6px] basis-[20%]"
                name=""
                id=""
              >
                <option value="">1402</option>
                <option value="">1403</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row justify-center items-center gap-8 ">
            <CustomInput
              style=" flex w-[393px] md:basis-1/2 "
              label="شهر"
              placeholder="مثال : تهران"
            />
            <div className="flex basis-1/2 w-[393px]">
              <p className="text-[#064247] ml-[9%] font-medium">جنسیت :</p>
              <div className="flex ">
                <input
                  className="w-[20px] h-[20px] "
                  name="gender"
                  type="radio"
                  value="male"
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
                  value="female"
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
              ></textarea>
              <label className="flex w-full h-full select-none pointer-events-none absolute  font-semibold !overflow-visible truncate peer-placeholder-shown:text-[#0D0630] leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5%] peer-placeholder-shown:text-sm text-[12px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:![border-gray-900] after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                نشانی
              </label>
            </div>
          </div>
          <CustomButton
            text="رزرو نوبت"
            style="text-white bg-[#288E87] mt-[30%] mb-[20%]"
          />
        </div>
      </div>
    </div>
  );
}

export default ListPatient;
