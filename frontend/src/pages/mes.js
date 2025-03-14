import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Events from "../components/Events"
import Speakers from "../components/Speakers";
// import VentureCapitalists from "../components/VentureCapitalists";
// import ContactInfo from "../components/ContactInfo";
import MovingBackground from "../components/MovingBackground";
import LightEffects from "../components/LightEffects";
import Timeline from "../components/Timeline";
// import VideoSection from "../components/VideoSection";
import Payment from "../components/Payment";
import Meta from "../components/meta"

const Mes = () => {
  return (<>
    <Meta
      title="MES | E-Cell"
      description="Join the Manipal Entrepreneurship Summit 2024 for a transformative experience with speakers like Aman Gupta and engage in workshops on innovation and entrepreneurship."
    />
    <div className="min-h-screen bg-url('https://i.ibb.co/rdZg1Kr/k.png') text-white overflow-x-hidden">
      <MovingBackground />
      <LightEffects />
      <Navbar />
      <Hero />
      <Payment />
      <Events />
      <Speakers />
      <Timeline />
      <Footer />
    </div>
  </>);
}

export default Mes;