import React from "react";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="image"></div>
        <div
          className="title"
          style={{
            background: (
              <img src={require("../../images/hero-bg.jpg")} alt="hero image" />
            ),
          }}
        >
          <div className="topic">Gihan Piumal</div> 
        </div>
      </div>
    </div>
  );
};

export default Home;
