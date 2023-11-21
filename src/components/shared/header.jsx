import React, { useState } from "react";
import "../../styles/header.css";
import logo from "../../images/ic_logo.png";
import chat from "../../images/ic_chat.png";
const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="header">
      <a href="#link">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className={`links ${active ? "active" : "inactive"}`}>
        <i class="fa-solid fa-xmark close"></i>
        <li>
          <span>01</span>
          <a href="#Home"> Home </a>
        </li>
        <li>
          <span>02</span>
          <a href="#Services"> Services </a>
        </li>
        <li>
          <span>03</span>
          <a href="#Projects"> Projects</a>
        </li>
        <li>
          <span>04</span>
          <a href="#Our-Approach"> Our Approach</a>
        </li>
        <li>
          <span>05</span>
          <a href="Blog">Blog </a>
        </li>
        <li>
          <span>06</span>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="chat">
        <a href="#chat">
          <img src={chat} alt="" />
        </a>
        <p>Let'sChat</p>
      </div>
      <i
        class="fa-solid fa-bars bar"
        onClick={() => {
          setActive(!active);
        }}
      ></i>
    </header>
  );
};

export default Header;
