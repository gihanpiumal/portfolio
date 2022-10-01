import React from "react";

import AdjustIcon from "@mui/icons-material/Adjust";

import "./tech.scss";

const Tech = ({title,descripttion}) => {
  return (
    <div className="tech">
      <div className="wrapper-tech">
        <div className="icon-tech">
          <AdjustIcon className="icons-tech" />
        </div>
        <div className="data-tech">
          <div className="title-data-tech">{title}</div>
          <div className="description-data-tech">
            {descripttion}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
