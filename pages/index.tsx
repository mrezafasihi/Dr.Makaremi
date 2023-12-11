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

export default function Home() {
  return (
    <div>
      {/* <Background url={"../images/OldMan.png"} /> */}
      <NavHead />
      {/* <Navbar /> */}
      <CountCard />
      <Bio />
      <BusinessDays />
      <Insurance />
      <Question />
      <Blog />
      <WebApp />
     
    </div>
  );
}
