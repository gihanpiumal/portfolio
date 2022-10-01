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
      <div className="wrapper">
        <div className="top">
          <div className="avatar">
            <img src={require("../../images/dp.jpeg")} alt="dp" />
          </div>
          <div className="name">Gihan Piumal</div>
          <div className="social-icons">
            <ul className="icons">
              <li>
                <TwitterIcon className="icon" />
              </li>
              <li>
                <FacebookIcon className="icon" />
              </li>
              <li>
                <a href="https://github.com/gihanpiumal" target="_blank">
                <GitHubIcon className="icon">
                  {/* <a href="https://github.com/gihanpiumal" target="_blank"></a> */}
                </GitHubIcon></a>
              </li>
              <li>
                <LinkedInIcon className="icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <ul className="navlinks">
            <li>
              <HomeIcon className="icon" />
              <span>Home</span>
            </li>
            <li>
              <PersonIcon className="icon" />
              <span>About</span>
            </li>
            <li>
              <AssignmentIcon className="icon" />
              <span>Projects</span>
            </li>
            <li>
              <MiscellaneousServicesIcon className="icon" />
              <span>Technologies</span>
            </li>
            <li>
              <MailIcon className="icon" />
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
