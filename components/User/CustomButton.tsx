import React, { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler;
}
function CustomButton({ text,style,styleContainer,onClick }: any) {
  return (
    <div className={`text-center ${styleContainer}`}>
      <button
        onClick={onClick}
        className={` border-[1px] w-[200px] font-semibold text-[14px] border-[#288E87] rounded-[7.98px] px-7 py-4 ${style}`}
      >
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
