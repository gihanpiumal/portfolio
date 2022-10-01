import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import MailIcon from "@mui/icons-material/Mail";

import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper-nav">
        <div className="top-nav">
          <div className="avatar-nav">
            <img src={require("../../images/dp.jpeg")} alt="dp" />
          </div>
          <div className="name-nav">Gihan Piumal</div>
          <div className="social-icons-nav">
            <ul className="icons-nav">
              <li>
                <a href="#">
                  <TwitterIcon className="icon-nav" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/gihan.piyumal.56" target="_blank">
                  <FacebookIcon className="icon-nav" />
                </a>
              </li>
              <li>
                <a href="https://github.com/gihanpiumal" target="_blank">
                  <GitHubIcon className="icon-nav">
                  </GitHubIcon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gihan-piumal-899347224/"  target="_blank">
                  <LinkedInIcon className="icon-nav" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-nav">
          <ul className="navlinks-nav">
            <Link className="link" to="#header" smooth>
              <li>
                <HomeIcon className="icon-nav" />
                <span>Home</span>
              </li>
            </Link>

            <Link className="link" to="#about" smooth>
              <li>
                <PersonIcon className="icon-nav" />
                <span>About</span>
              </li>
            </Link>

            <Link className="link" to="#projects" smooth>
              <li>
                <AssignmentIcon className="icon-nav" />
                <span>Projects</span>
              </li>
            </Link>

            <Link className="link" to="#technologies" smooth>
              <li>
                <MiscellaneousServicesIcon className="icon-nav" />
                <span>Technologies</span>
              </li>
            </Link>

            <Link className="link" to="#contact" smooth>
              <li>
                <MailIcon className="icon-nav" />
                <span>Contact</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
