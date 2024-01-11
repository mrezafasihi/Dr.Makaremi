import Fainalpay from "@/pages/user/reservation/[parvandeId]";
import Information from "@/components/Information";
import Paymenticon from "@/components/paymenticon";
import NavbarConfirm from "@/components/user/NavbarConfirm";
import React from "react";

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
