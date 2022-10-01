import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
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
                <TwitterIcon className="icon-nav" />
              </li>
              <li>
                <FacebookIcon className="icon-nav" />
              </li>
              <li>
                <a href="https://github.com/gihanpiumal" target="_blank">
                <GitHubIcon className="icon-nav">
                  {/* <a href="https://github.com/gihanpiumal" target="_blank"></a> */}
                </GitHubIcon></a>
              </li>
              <li>
                <LinkedInIcon className="icon-nav" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-nav">
          <ul className="navlinks-nav">
            <li>
              <HomeIcon className="icon-nav" />
              <span>Home</span>
            </li>
            <li>
              <PersonIcon className="icon-nav" />
              <span>About</span>
            </li>
            <li>
              <AssignmentIcon className="icon-nav" />
              <span>Projects</span>
            </li>
            <li>
              <MiscellaneousServicesIcon className="icon-nav" />
              <span>Technologies</span>
            </li>
            <li>
              <MailIcon className="icon-nav" />
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
