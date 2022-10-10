import React from "react";

import Grid from "@mui/material/Unstable_Grid2";

import Project from "./project/Project";

import "./portfolio.scss";


const Portfoio = () => {
  const temp_project = [
    {
      title: "Memory Blog App",
      img: "https://www.youtube.com/embed/BhoUIpkolU4",
      subTitle: "Save my memories to my memoty blog",
      description: "description 1",
      gitLink: "https://github.com/gihanpiumal/memory-application-v1",
    },
  ];
  return (
    <div className="portfolio" id="projects">
      <div className="wrapper-portfolio">
        <div className="title-portfolio">Projects</div>
        <div className="body-portfolio">
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
