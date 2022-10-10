import React from "react";

import Tech from "./tech/Tech";

import Grid from "@mui/material/Unstable_Grid2";

import "./technologies.scss";

const Technologies = () => {
  const temp_technologies = [
    {
      title: "React Js",
      desc: "For front end development i use React. Mainly i use functional components to my developments. Also i have good experience with Redux as well. Most of the time i use materiial ui and ant designer components to my developments.",
    },
    {
      title: "Node Js",
      desc: "Node js i use for develop my backend. For this i use Express js . Making new logics with fuctions, customize the backend code to give fast and expected output is my main target.",
    },
    {
      title: "Mongo DB",
      desc: "Mongo Db i used for as my database. It was a non relational database and very easy to use for node applications. Also it has lot of functionalities to fast development.",
    },
  ];
  return (
    <div className="technologies" id="technologies">
      <div className="wrapper-technologiies">
        <div className="title-technologies">Technologies</div>
        <div className="description-technologies">
          Every day i am updating to new technologies. I want to give the modern
          and latest user experience to my client with my knowledge.
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
