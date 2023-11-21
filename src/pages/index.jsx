import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/services";
import Portfolio from "../components/home/portfolio";
import Steps from "../components/home/steps";
import Testimonials from "../components/home/testimonials";
import Sponsers from "../components/home/sponsers";
import Mangers from "../components/home/mangers";
import Contacts from "../components/home/contacts";
import Footer from "../components/shared/footer";
const index = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Steps />
      <Testimonials />
      <Sponsers />
      <Mangers />
      <Contacts />
      <Footer />
    </>
  );
};

export default index;
