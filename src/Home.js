import React from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
