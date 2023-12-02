import React from "react";

function ContactUs() {
  return (
    <div>
      <h6>شما میتوانید در این قسمت ما با در تماس باشید</h6>
      <div className="flex flex-col">
        <div className="flex">
          <input
            className="border-[1px] rounded-[4.73px] border-[##CBCBCB] bg-none placeholder-black	"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <input type="text" placeholder="شماره تلفن" />
        </div>
        <input type="text" placeholder="پیام های خود را در اینجا بنویسید..." />
        <button>ثبت نظر</button>
      </div>
    </div>
  );
}

export default ContactUs;
