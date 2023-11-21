import React from "react";
import "../../styles/landing.css";
import landingImg from "../../images/bg_landing.png";
const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="text">
          <h4>GLOBAL EXPERIENCE</h4>
          <h1>
            Digital <br /> Studio
          </h1>
          <p>
            Our design services starts and ends with a best in class experience
            strategy that builds brands.
          </p>
          <a href="#sendmessage">Let’s talk — Send a message</a>
        </div>
        <div className="img">
          <img className="landingImg" src={landingImg} alt="" />
        </div>
      </div>
    </>
  );
};
export default Landing;
