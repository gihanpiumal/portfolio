import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./project.scss";

const Project = ({ title, image, subTitle }) => {
  return (
    <div className="project">
      <div className="wrapper-project">
        <div className="title-project">{title}</div>
        <div className="img-project">
          <img src={require(`../../../images/${image}`)} alt="" />
        </div>
        <div className="subtitle-project">{subTitle}</div>
        <div className="btn-project">
          <div className="view-btn-project">
            <VisibilityIcon className="icon-project" />
          </div>
          <div className="view-github-project">
            <GitHubIcon className="icon-project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
