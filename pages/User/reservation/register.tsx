import ListPatient from "@/components/user/ListPatient";
import TextNobat from "@/components/user/TextNobat";
import React from "react";

function register() {
  if (typeof window !== 'undefined') {
    
    const item = localStorage.getItem('myTest')
    console.log(item)
  }
  
  return (
    <div>
      <TextNobat />
      <ListPatient />
    </div>
  );
}

export default register;
