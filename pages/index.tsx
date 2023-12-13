import Image from "next/image";

import Navbar from "@/components/Navbar";
import Container from "postcss/lib/container";
import OldMan from "@/components/Nav-Head";
import NavHead from "@/components/Nav-Head";
import CountCard from "@/components/CountCard";
import Background from "@/components/Background";
import Content from "@/components/Content";
import Bio from "@/components/Bio";
import BusinessDays from "@/components/BusinessDays";
import Insurance from "@/components/Insurance";
import Question from "@/components/Question";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import WebApp from "@/components/WebApp";
import Contact from "@/components/Contact";
import Line from "@/components/line";
import Satisfication from "@/components/Satisfication";
<<<<<<< HEAD
import Adress from "@/components/Adress";
import Admin from "@/components/Admin";
import Header from "@/components/Header";
=======
import Adress from '@/components/Adress'
import Admin from '@/components/Admin'
// import Pay from "./user/reservation/pay";
>>>>>>> 40317d1035d08b92fb2200ee9ee8e62e0b28a2bb
export default function Home() {
  return (
    <div>
      {/* <Background url={"../images/OldMan.png"} /> */}
      {/* <NavHead /> */}
      <Navbar />
      <Header />
      {/* <Navbar /> */}
      <CountCard />
      <Bio />
      <BusinessDays />
      <Insurance />
      <Question />
      <Blog />
      <WebApp />
<<<<<<< HEAD
      <Line />
      <Satisfication />
      <Contact />
      <Adress />
=======
     <Line/>
     <Satisfication/>
     <Contact/>
     <Adress/>
     {/* <Pay/> */}
     
>>>>>>> 40317d1035d08b92fb2200ee9ee8e62e0b28a2bb
    </div>
  );
}
