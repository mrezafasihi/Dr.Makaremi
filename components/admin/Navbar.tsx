import React, { useState } from "react";

function Navbar() {
  const arrayAdmin: any = [
    { id: 1, name: " علی مکارمی", img: "/images/landin/Beautiful.png" },
    { id: 2, name: "حسين ملکی", img: "/images/landin/smiling.png" },
    { id: 3, name: "هرچیی", img: "/images/landin/young_man.png" },
  ];
  const [valueSelectOption, setValueSelectOption] = useState(arrayAdmin[0].img);
  const handleSelect = (value: any) => {
    console.log(value);
    setValueSelectOption(value);
  };
  return (
    <div className="flex  justify-end items-center border-b-[1px] mt-[2%] pb-[2%]">
      <div className="ml-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6.43994V9.76994"
          stroke="#0D0630"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
          stroke="#064247"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M15.33 18.8198C15.33 20.6498 13.83 22.1498 12 22.1498C11.09 22.1498 10.25 21.7698 9.64998 21.1698C9.04998 20.5698 8.66998 19.7298 8.66998 18.8198"
          stroke="#0D0630"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
      </svg>
      </div>
      <div className="ml-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="#0D0630"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
          stroke="#064247"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </div>
      <div className="h-[40px] bg-black w-[0.5px] ml-6" />

      <img
        className="rounded-full w-[54px] h-[57px]"
        src={valueSelectOption}
        alt=""
      />

      <select
        className="text-[#064247] mr-1 bg-white border-none ml-[4%]"
        onChange={(e) => handleSelect(e.target.value)}
      >
        {arrayAdmin.map((item: any) => {
          return <option value={item.img}>{item.name}</option>;
        })}
      </select>
    </div>
  );
}

export default Navbar;
