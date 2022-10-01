import React from "react";

import {
  Home,
  About,
  Portfolio,
  Technologies,
  Contact,
} from "../../components";

import "./container.scss";

const Container = () => {
  return (
    <div className="container">
      <div className="wrapper-container">
        <div className="home-container">
          <Home />
        </div>
        <div className="about-container">
          <About />
        </div>
        <div className="portfolio-container">
          <Portfolio />
        </div>
        <div className="technologies-container">
          <Technologies />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Container;
