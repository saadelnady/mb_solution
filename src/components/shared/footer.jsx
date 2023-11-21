import React from "react";
import "../../styles/footer.css";
import correct from "../../images/ic_correct.png";
import facebook from "../../images/ic_footer_facebook.png";
import linkedIn from "../../images/ic_footer_linkedin.png";
import twitter from "../../images/ic_footer_twitter.png";
import footerLogo from "../../images/ic_logo_2.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe">
        <form>
          <input type="email" placeholder="enter your email start" />
          <button>
            Submit <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <div className="text">
          <p>
            <img src={correct} alt="" />
            No credit card required.
          </p>
          <p>
            <img src={correct} alt="" />
            Cancel anytime.
          </p>
        </div>
      </div>
      <div className="links">
        <ul className="projects">
          <h3>PROJECTS</h3>
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/"> Product </a>
          </li>
          <li>
            <a href="/"> Customers </a>
          </li>
          <li>
            <a href="/"> Pricing</a>
          </li>
        </ul>
        <ul className="about-us">
          <h3>ABOUT US</h3>
          <li>
            <a href="/"> Company</a>
          </li>
          <li>
            <a href="/">Careers </a>
          </li>
          <li>
            <a href="/">Press </a>
          </li>
          <li>
            <a href="/"> media</a>
          </li>
          <li>
            <a href="/"> Our Blog</a>
          </li>
        </ul>
        <ul className="contribute">
          <h3>CONTRIBUTE</h3>
          <li>
            <a href="/"> Management</a>
          </li>
          <li>
            <a href="/">Reporting </a>
          </li>
          <li>
            <a href="/"> Tracking</a>
          </li>
          <li>
            <a href="/">Subscribe </a>
          </li>
        </ul>
        <ul className="cases">
          <h3>CASES</h3>

          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> Product </a>
          </li>
          <li>
            <a href="/"> Customers </a>
          </li>
          <li>
            <a href="/"> Pricing</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="/">
            <img src={linkedIn} alt="" />
          </a>
          <a href="/">
            <img src={twitter} alt="" />
          </a>{" "}
          <a href="/">
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>
      <div className="dev">
        Development By <img src={footerLogo} alt="" /> , All Rights Reserved. |
        Contact
      </div>
    </div>
  );
};
export default Footer;
