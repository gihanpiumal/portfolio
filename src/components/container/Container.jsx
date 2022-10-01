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
      <div className="wrapper">
        <div className="home">
          <Home />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="portfolio">
          <Portfolio />
        </div>
        <div className="technologies">
          <Technologies />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Container;
