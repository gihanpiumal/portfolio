import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Home,
  About,
  Portfolio,
  Technologies,
  Contact,
} from "../../components";

import "./container.scss";

const Container = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <div className="wrapper-container">
        <div className="home-container">
          <Home />
        </div>
        <div className="about-container">
          <About />
        </div>
        <div className="portfolio-container" >
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
