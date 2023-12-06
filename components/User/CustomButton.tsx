import React from "react";

function CustomButton({ text, textColor, onClick, backGroundHover }: any) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className={` border-[1px] w-[200px] font-semibold text-[14px] border-[#288E87] rounded-[7.98px] px-7 py-4 ${backGroundHover} ${textColor} hover:bg-[#303136]`}
      >
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
