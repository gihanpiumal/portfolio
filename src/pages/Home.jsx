import React from "react";

import { NavBar, Container } from "../components";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="container">
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Home;
