import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function test() {
  return (
    <div>
      <Calendar
        calendar={persian}
        locale={persian_fa}
        
       

      />
    </div>
  );
}

export default test;
