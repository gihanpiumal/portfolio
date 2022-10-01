import React from "react";

import Grid from "@mui/material/Unstable_Grid2";

import Project from "./project/Project";

import "./portfolio.scss";

const Portfoio = () => {
  const temp_project = [
    {
      title: "Ptoject 1",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Ptoject 1",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Ptoject 1",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Ptoject 1",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Ptoject 1",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Ptoject 1",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="portfolio" id="projects">
      <div className="wrapper-portfolio">
        <div className="title-portfolio">Projects</div>
        <div className="body-portfolio" >
          <Grid
            className="grid"
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {temp_project.map((val, index) => (
              <Grid className="grids" xs={2} sm={4} md={4} key={index}>
                <Project
                  title={val.title}
                  image={val.img}
                  subTitle={val.subTitle}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Portfoio;
