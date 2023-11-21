import React from "react";
import "../../styles/services.css";
import ic_social_marketing from "../../images/ic_social_marketing.png";
import ic_mobile_app from "../../images/ic_mobile_app_sign.png";
import ic_seo_analysis from "../../images/ic_seo_analysis.png";
import ic_copy_write from "../../images/ic_copy_write.png";
import bg_social_marketing from "../../images/bg_social_marketing.png";

const Services = () => {
  return (
    <div className="services">
      <div className="our-services">
        <div>
          <img src={ic_social_marketing} alt="" />
          <h4>Social Marketing</h4>
          <p>Focus and target your audience through the right channels.</p>
        </div>
        <div>
          <img src={ic_mobile_app} alt="" />
          <h4> Mobile App Design</h4>
          <p>Focus and target your audience through the right channels.</p>
        </div>
        <div>
          <img src={ic_seo_analysis} alt="" />
          <h4> SEO Analytics</h4>
          <p>Focus and target your audience through the right channels.</p>
        </div>
        <div>
          <img src={ic_copy_write} alt="" />
          <h4>Copywriting </h4>
          <p>Focus and target your audience through the right channels.</p>
        </div>
      </div>
      <div className="values">
        <img src={bg_social_marketing} alt="" />
        <div className="text">
          <p>INCREASE VALUES</p>
          <h3>Social marketing and advertising.</h3>
          <p>
            We provide digital experience services to startups and small
            businesses. We help our clients succeed by creating brand
            identities, digital experiences, and print materials. Install any
            demo, plugin or template in a matter of seconds.
          </p>
          <a href="#learn-more">
            learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <ul className="links">
        <li>
          <a href="/" className="active">
            Digital Solution
          </a>
        </li>
        <li>
          <a href="/">Commerce Systems</a>
        </li>
        <li>
          <a href="/">Web Development</a>
        </li>
        <li>
          <a href="/">Mobile Apps</a>
        </li>
      </ul>
    </div>
  );
};

export default Services;
