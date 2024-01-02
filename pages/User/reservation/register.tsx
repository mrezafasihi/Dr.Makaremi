import ListPatient from "@/components/user/ListPatient";
import RegisterForm from "@/components/user/RegisterForm";
import TextNobat from "@/components/user/TextNobat";
import React from "react";
import {useForm} from 'react-hook-form'
function register() {
 
  
  return (
    <div>
      <TextNobat />
      <RegisterForm/>
    </div>
  );
}

export default register;
