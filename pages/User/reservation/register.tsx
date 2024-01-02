import ListPatient from "@/components/user/ListPatient";
import RegisterForm from "@/components/user/RegisterForm";
import TextNobat from "@/components/user/TextNobat";
import React from "react";
import {useForm} from 'react-hook-form'
function register() {
  if (typeof window !== 'undefined') {
    
    const item = localStorage.getItem('myTest')
    console.log(item)
  }
  
  return (
    <div>
      <TextNobat />
      <RegisterForm/>
    </div>
  );
}

export default register;
