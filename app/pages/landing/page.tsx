import React from "react";
import Achievements from "@/app/components/home/Achievements";
import Advantages from "@/app/components/home/Advantages";
import Container from "@/app/components/home/Container";
import Courses from "@/app/components/home/Courses";
import Goals from "@/app/components/home/Goals";
import HeroSection from "@/app/components/home/HeroSection";
import NavBar from "@/app/components/common/NavBar";
import Footer from "@/app/components/common/Footer";

const Landing = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Container />
      <Achievements />
      <Courses />
      <Goals />
      <Advantages />
      <Footer />
    </>
  );
};

export default Landing;
