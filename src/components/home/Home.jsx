import React from "react";

import "./header.scss";

const Home = () => {
  return (
    <div className="header">
      <div className="wrapper-header">
        <div
          className="title-header"
          style={{
            background: (
              <img src={require("../../images/hero-bg.jpg")} alt="hero image" />
            ),
          }}
        >
          <div className="topic-header">Gihan Piumal</div> 
        </div>
      </div>
    </div>
  );
};

export default Home;
