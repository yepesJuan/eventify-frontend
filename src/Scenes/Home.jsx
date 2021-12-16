import { useState } from "react";
import Navbar from "../components/common/navbars/Navbar";
import Hero from "../components/Home/Hero";
import FooterHome from "../components/common/FooterHome";
import Sidebar from "../components/common/navbars/Sidebar";
import Main from "../components/Home/Main";
import { homeObjectOne, homeObjectTwo } from "../components/Home/MainData";

export default function Home() {
  const [isOpen, setIsOPen] = useState(false);
  const toggle = () => {
    setIsOPen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Main {...homeObjectOne} />
      <Main {...homeObjectTwo} />
      <FooterHome />
    </>
  );
}
