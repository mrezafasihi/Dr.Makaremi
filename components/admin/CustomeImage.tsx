import React from "react";

function CustomeImage({ img ,style}: any) {
  return (
    <div
      className={`bg-[#ededee] sm:rounded-full rounded-full  justify-center ${style}`}
    >
      <img className="rounded-full sm:rounded-full" src={img} alt="" />
    </div>
  );
}

export default CustomeImage;
