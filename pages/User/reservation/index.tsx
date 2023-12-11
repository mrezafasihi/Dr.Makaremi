import ListPatient from "@/components/user/ListPatient";
import NavbarConfirm from "@/components/user/NavbarConfirm";
import TextNobat from "@/components/user/TextNobat";
import React from "react";

function index() {
  return (
    <div>
      <NavbarConfirm />
      <TextNobat />
      <ListPatient />
    </div>
  );
}

export default index;
