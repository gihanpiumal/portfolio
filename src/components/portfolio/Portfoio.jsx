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
      description:"description 1",
      gitLink: "https://github.com/gihanpiumal/frequency-sound-genarator"
    },
    {
      title: "Ptoject 2",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      description:"description 1",
      gitLink: "#"
    },
    {
      title: "Ptoject 3",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      description:"description 1",
      gitLink: "#"
    },
    {
      title: "Ptoject 4",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      description:"description 1",
      gitLink: "#"
    },
    {
      title: "Ptoject 5",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      description:"description 1",
      gitLink: "#"
    },
    {
      title: "Ptoject 6",
      img: "p1.png",
      subTitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      description:"description 1",
      gitLink: "#"
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
              <Grid className="grids" xs={4} sm={4} md={4} key={index}>
                <Project
                  title={val.title}
                  image={val.img}
                  subTitle={val.subTitle}
                  gitLink={val.gitLink}
                  description={val.description}
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
