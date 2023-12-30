import React from "react";
import CustomeImage from "./CustomeImage";

function Clerks() {
  const dataClerk = [
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
    { name: "امیر رئیسی", image: "/images/landin/smiling.png" },
  ];
  return (
    <div className=" flex flex-col overflow-y-auto gap-[14px] h-[331px] mx-[5%]">
      {dataClerk.map((item) => {
        return (
          <div className="max-w-[856px] border flex items-center justify-between h-[101px] px-4 py-4 rounded-lg">
            <div className="flex items-center">
              <CustomeImage img={item.image} style="w-[48px] h-[49px]" />
              <p>{item.name}</p>
            </div>
            <div className="flex">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1967 2.85021L4.69712 9.7298C4.4517 9.99105 4.2142 10.5056 4.1667 10.8619L3.87379 13.4269C3.77087 14.3531 4.43587 14.9865 5.3542 14.8281L7.90337 14.3927C8.25962 14.3294 8.75837 14.0681 9.00379 13.799L15.5034 6.91938C16.6275 5.73188 17.1342 4.37813 15.3846 2.72355C13.643 1.0848 12.3209 1.66271 11.1967 2.85021Z"
                  stroke="#0D0630"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1121 3.99805C10.4525 6.18305 12.2259 7.85346 14.4267 8.07513"
                  stroke="#064247"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.07422 17.416H17.3242"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1118 5.1578C15.2398 4.87318 12.3505 4.72656 9.46989 4.72656C7.76221 4.72656 6.05452 4.81281 4.34684 4.9853L2.5874 5.1578"
                  fill="#C70000"
                />
                <path
                  d="M18.1118 5.1578C15.2398 4.87318 12.3505 4.72656 9.46989 4.72656C7.76221 4.72656 6.05452 4.81281 4.34684 4.9853L2.5874 5.1578"
                  stroke="#C70000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.33105 4.28614L7.5208 3.15631C7.65879 2.33696 7.76229 1.72461 9.21986 1.72461H11.4795C12.9371 1.72461 13.0492 2.37146 13.1786 3.16493L13.3683 4.28614"
                  stroke="#C70000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2575 7.88281L15.6969 16.5679C15.602 17.9219 15.5244 18.9741 13.1181 18.9741H7.58103C5.17475 18.9741 5.09713 17.9219 5.00225 16.5679L4.44165 7.88281"
                  stroke="#C70000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.9093 14.2305H11.7813"
                  stroke="#C70000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.19336 10.7793H12.5057"
                  stroke="#C70000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Clerks;
