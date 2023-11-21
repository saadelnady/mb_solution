import React from "react";
import "../../styles/sponsers.css";
import sponserOne from "../../images/ic_sponser_1.png";
import sponserTwo from "../../images/ic_sponser_2.png";
import sponserThree from "../../images/ic_sponser_3.png";
import sponserFour from "../../images/ic_sponser_4.png";
import sponserFive from "../../images/ic_sponser_5.png";
import sponsersix from "../../images/ic_sponser_6.png";
const Sponsers = () => {
  return (
    <div className="sponsers">
      <p>Join the 10.000+ companies trusting LandingHub</p>
      <div className="our-sponsers">
        <img src={sponserOne} alt="" />
        <img src={sponserTwo} alt="" />
        <img src={sponserThree} alt="" />
        <img src={sponserFour} alt="" />
        <img src={sponserFive} alt="" />
        <img src={sponsersix} alt="" />
      </div>
    </div>
  );
};

export default Sponsers;
