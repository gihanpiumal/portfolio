import React from "react";

import Tech from "./tech/Tech";

import Grid from "@mui/material/Unstable_Grid2";

import "./technologies.scss";

const Technologies = () => {
  const temp_technologies = [
    {
      title: "React Js",
      desc: "React is the framework I use for front-end development. Mostly, I use functional components in my design process. Also, I have good experience with Redux. I use material ui and ant designer components in the majority of my development projects.",
    },
    {
      title: "Node Js",
      desc: "Node js I use for develop my back-end. I use Express js for this. My primary goal is to create new logics with functions and to customize the back-end code to provide quick and desired output",
    },
    {
      title: "Mongo DB",
      desc: "I used MongoDB as my database. It was an easy-to-use non-relational database for node applications. Additionally, it provides a lot of functionalities to fast development.",
    },
  ];
  return (
    <div className="technologies" id="technologies">
      <div className="wrapper-technologiies">
        <div className="title-technologies">Technologies</div>
        <div className="description-technologies">
          I am always updating my knowledge on new technology. With my
          knowledge, I wish to provide my client with a modern and latest user
          experience.
        </div>
        <div className="card-technologies">
          <Grid
            className="grid-technologiies"
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {temp_technologies.map((val, index) => (
              <Grid
                className="grids-technologiies"
                xs={4}
                sm={4}
                md={4}
                key={index}
              >
                <Tech title={val.title} descripttion={val.desc} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
