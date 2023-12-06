import CustomButton from "@/components/User/CustomButton";
import Modal from "@/components/User/Modal";
import Navbar from "@/components/User/Navbar";
import TextNobat from "@/components/User/TextNobat";
import React, { useState } from "react";
import AOS from 'aos';


function userPanel() {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <TextNobat />
      <CustomButton
        onClick={handleClick}
        text="تایید"
        textColor="text-[#288E87]"
        backGroundHover="hover:bg-[#303136]"
      />
      <div data-aos="fade-up">{openModal ? <Modal /> : null}</div>
    </div>
  );
}

export default userPanel;
