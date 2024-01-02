import Image from "next/image";
import Navbar from "@/components/Navbar";
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
import Adress from "@/components/Adress";
import Admin from "@/components/Admin";
import Header from "@/components/Header";
import Pay from "./user/reservation/pay";
import { CChart } from "@coreui/react-chartjs";
export default function Home() {
  return (
    <div >
      <Navbar />
      <Header  />
      <CountCard />
      <Bio />
      <BusinessDays />
      <Insurance />
      <Question />
      <Blog />
      <WebApp />
      <Line/>
     {/* <Satisfication/>
     <Contact/>
     <Adress/> 
       <Pay/> */}
      
    </div>
  );
}
