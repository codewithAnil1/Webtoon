import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import HeroSection from "./Componets/HeroSection/HeroSection";
import Carousel from "./Componets/Carousel/Carousel";
import Characters from "./Componets/Characters/Characters";
import CallToAction from "./Componets/CallToAction/CallToAction";
import Carousels from "./Componets/Carousel/Carousel";
import Footer from "./Componets/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Characters />
      <Carousels />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
