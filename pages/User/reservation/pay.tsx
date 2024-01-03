import Fainalpay from "@/pages/user/reservation/Fainalpay";
import Information from "@/components/Information";
import NavbarConfirm from "@/components/user/NavbarConfirm";
import React from "react";
import Paymenticon from "@/components/paymenticon";

function Pay() {
  return (
    <div>
      <NavbarConfirm />
      <Paymenticon/>
      <Information />
    </div>
  );
}

export default Pay;
