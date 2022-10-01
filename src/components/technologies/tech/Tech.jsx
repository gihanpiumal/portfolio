import React, { useEffect }   from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AdjustIcon from "@mui/icons-material/Adjust";

import "./tech.scss";

const Tech = ({title,descripttion}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="tech">
      <div className="wrapper-tech"  data-aos="fade-right">
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
