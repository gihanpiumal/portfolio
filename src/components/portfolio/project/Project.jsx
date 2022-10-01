import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./project.scss";

const Project = ({ title, image, subTitle }) => {
  return (
    <div className="project">
      <div className="wrapper">
        <div className="project-title">{title}</div>
        <div className="project-img">
          <img src={require(`../../../images/${image}`)} alt="" />
        </div>
        <div className="project-subtitle">{subTitle}</div>
        <div className="project-btn">
          <div className="view-btn">
            <VisibilityIcon className="icon" />
          </div>
          <div className="view-github">
            <GitHubIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
