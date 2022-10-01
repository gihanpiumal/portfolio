import React, { useEffect }  from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./project.scss";

const Project = ({ title, image, subTitle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="project">
      <div className="wrapper-project" data-aos="flip-right">
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
