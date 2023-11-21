import React from "react";
import "../../styles/contacts.css";
import person from "../../images/ic_person.png";
import linkedIn from "../../images/ic_linkedin.png";
import twitter from "../../images/ic_twitter.png";
import facebook from "../../images/ic_facebook.png";
const Contacts = () => {
  return (
    <div className="contacts-parent">
      <div className="social">
        <a href="">
          <img src={linkedIn} alt="" />
        </a>
        <a href="">
          <img src={twitter} alt="" />
        </a>
        <a href="">
          <img src={facebook} alt="" />
        </a>
      </div>{" "}
      <div className="contacts">
        <div className="text">
          <h3>Any questions à Projects?</h3>
          <p>
            Digital experiences, and print materials that communicate marketing
            goals.
          </p>
        </div>
        <img src={person} alt="" />
        <div className="offers">
          <div className="offer">
            <p>Project Offers</p>
            <h4>info.liquid.com</h4>
          </div>
          <div className="offer">
            <p>Project Offers</p>
            <h4>info.liquid.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
