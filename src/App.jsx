import { useState } from "react";
import Navbar from "./Componets/Navbar/Navbar";
import HeroSection from "./Componets/HeroSection/HeroSection";
// import Carousel from "./Componets/Carousel/Carousel";
import Characters from "./Componets/Characters/Characters";
import CallToAction from "./Componets/CallToAction/CallToAction";
import Carousels from "./Componets/Carousel/Carousel";
import Footer from "./Componets/Footer/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Characters />
      <Carousels />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
