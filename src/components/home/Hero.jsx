import React from "react";
import Header from "../shared/header";
import Landing from "./landing";
import "../../styles/hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <Landing />
    </div>
  );
};

export default Hero;
