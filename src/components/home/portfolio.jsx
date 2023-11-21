import React from "react";
import "../../styles/portfolio.css";
import portfolio_card_1 from "../../images/portfolio_card_1.png";
import portfolio_card_2 from "../../images/portfolio_card_2.png";
import portfolio_card_3 from "../../images/portfolio_card_3.png";
import portfolio_card_4 from "../../images/portfolio_card_4.png";

const Portfolio = () => {
  return (
    <div>
      <div className="special-heading">
        <h5>SELECTED PROJECTS</h5>
        <h2>Digital Case Studies</h2>
        <p>
          Copy Passionate about solving problems through creative
          communications.
        </p>
      </div>
      <div className="portfolio">
        <div className="links">
          <ul>
            <p>Filtered by</p>
            <li>
              <a href="#all" className="active">
                All
              </a>
            </li>
            <li>
              <a href="#branding">Branding</a>
            </li>
            <li>
              <a href="#custom">Custom</a>
            </li>
            <li>
              <a href="#print-digital">Print Digital</a>
            </li>
            <li>
              <a href="#design">Design</a>
            </li>
            <li>
              <a href="#ecommerce">Ecommerce</a>
            </li>
          </ul>
          <a href="#more" className="more">
            see more
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="our-projects">
          <div className="one">
            <img src={portfolio_card_1} alt="" />
          </div>
          <div className="two">
            <img src={portfolio_card_2} alt="" />
          </div>
          <div className="three">
            <img src={portfolio_card_3} alt="" />
          </div>
          <div className="four">
            <img src={portfolio_card_4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
