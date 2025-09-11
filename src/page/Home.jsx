import React from "react";
import Header from "../components/Header";
import '../css/home/home.css'
import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";
import StatsSection from "../components/home/StatsSection";
import Fact from "../components/home/Fact";
import Footer from "../components/Footer";
import Download from "../components/home/Download";
import Connect from "../components/home/Connect";
import CarSelection from "../components/home/Car-Selection";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Feature />
      <StatsSection />
      <CarSelection title="Choose the car that suits you" />
      <Fact />
      <Download />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
