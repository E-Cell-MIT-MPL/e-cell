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
      description="Manipal Entrepreneurship Summit. The flagship event of MAHE organized by E-Cell MIT Manipal."
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