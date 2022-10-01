import React from "react";

import { NavBar, Container } from "../components";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper-home">
        <div className="navbar-home">
          <NavBar />
        </div>
        <div className="container-home">
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Home;
