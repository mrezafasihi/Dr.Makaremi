import ListPatient from "@/components/user/ListPatient";
import NavbarRegister from "@/components/user/NavbarRegister";
import RegisterForm from "@/components/user/RegisterForm";
import TextNobat from "@/components/user/TextNobat";
import React from "react";
import {useForm} from 'react-hook-form'
function register() {
  
  
  return (
    <div>
      <NavbarRegister/>
      <TextNobat />
      <RegisterForm/>
    </div>
  );
}

export default register;
