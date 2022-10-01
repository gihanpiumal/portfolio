import React, { useState, useEffect, useRef } from "react";

import { NavBar, Container } from "../components";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./home.scss";

const Home = () => {
  const [navigationExpand, setNavigationExpand] = useState("");

  let navRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!navRef.current.contains(event.target)) {
        setNavigationExpand("");
      }
    });
  });

  const showNavBar = () => {
    let styleName = "";
    switch (navigationExpand) {
      case "":
        styleName = "show";
        break;
      case "show":
        styleName = "";
        break;
    }
    setNavigationExpand(styleName);
  };
  return (
    <div className="home">
      <div className="wrapper-home">
        <div className="span-box" onClick={showNavBar}>
          <MoreVertIcon className="span-icon" />
        </div>
        <div ref={navRef} className={"navbar-home" + navigationExpand}>
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
