import Fainalpay from "@/pages/user/reservation/Fainalpay";
import Information from "@/components/Information";
import Paymenticon from "@/components/Paymenticon";
import NavbarConfirm from "@/components/user/NavbarConfirm";
import React from "react";

function Pay() {
  return (
    <div>
      <NavbarConfirm />
      <Paymenticon />
      <Information />
    </div>
  );
}

export default Pay;
