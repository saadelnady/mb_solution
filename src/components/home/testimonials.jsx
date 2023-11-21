import React from "react";
import "../../styles/testimonials.css";
import userOne from "../../images/ic_person_1.png";
import userTwo from "../../images/ic_person_2.png";
import userThree from "../../images/ic_person_3.png";
import twitter from "../../images/ic_twitter_2.png";
import emoji from "../../images/ic_love_emotion.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="comments">
        <div className="comment">
          <img src={userOne} alt="" className="user" />
          <div className="text">
            <p className="name">Lana Del Rey, Hub CEO</p>
            <p className="quote">
              “Les services de paiement sont disponibles via des applications
              mobilese bureau. “
            </p>
          </div>
          <img src={twitter} alt="" className="twitter" />
        </div>
        <div className="comment">
          <img src={userTwo} alt="" className="user" />
          <div className="text">
            <p className="name">Lana Del Rey, Hub CEO </p>
            <p className="quote">
              “Les services de paiement sont disponibles via des applications
              mobilese bureau. “
            </p>
          </div>
          <img src={twitter} alt="" className="twitter" />
        </div>
        <div className="comment">
          <img src={userThree} alt="" className="user" />
          <div className="text">
            <p className="name"> Lana Del Rey, Hub CEO</p>
            <p className="quote">
              “Les services de paiement sont disponibles via des applications
              mobilese bureau. “
            </p>
          </div>
          <img src={twitter} alt="" className="twitter" />
        </div>
      </div>
      <div className="testimonials-content">
        <div className="header">
          <img src={emoji} alt="" />
          <p> TESTIMONIALS</p>
          <h3>Hear from them</h3>
        </div>
        <p>
          As a leading digital agency in Paris, we look to engage with our
          clients beyond the conventional design and development agency
          relationship, becoming a partner to the people and companies we work
          with.
        </p>
        <a href="#getstart">
          Getstarted
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
