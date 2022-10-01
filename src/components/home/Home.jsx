import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./header.scss";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="header" id="header">
      <div className="wrapper-header">
        <div
          className="title-header"
          style={{
            background: (
              <img src={require("../../images/main.jpg")} alt="hero image" />
            ),
          }}
        >
          <div className="topic-header" data-aos="fade-right">
            Welcome <br /> to my Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
