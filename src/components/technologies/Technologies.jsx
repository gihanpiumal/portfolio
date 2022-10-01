import React from "react";

import Tech from "./tech/Tech";

import Grid from "@mui/material/Unstable_Grid2";

import "./technologies.scss";

const Technologies = () => {
  const temp_technologies = [
    {
      title: "React Js",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facere consectetur atque, dolorum quae voluptatum voluptate iure iste consequuntur animi tempore! Voluptatibus similique exercitationem earum iste cum a, itaque deleniti.",
    },
    {
      title: "React Js",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facere consectetur atque, dolorum quae voluptatum voluptate iure iste consequuntur animi tempore! Voluptatibus similique exercitationem earum iste cum a, itaque deleniti.",
    },
    {
      title: "React Js",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facere consectetur atque, dolorum quae voluptatum voluptate iure iste consequuntur animi tempore! Voluptatibus similique exercitationem earum iste cum a, itaque deleniti.",
    },
    {
      title: "React Js",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facere consectetur atque, dolorum quae voluptatum voluptate iure iste consequuntur animi tempore! Voluptatibus similique exercitationem earum iste cum a, itaque deleniti.",
    },
  ];
  return (
    <div className="technologies">
      <div className="wrapper-technologiies">
        <div className="title-technologies">Technologies</div>
        <div className="description-technologies">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nobis
          fugit totam nesciunt sint enim dignissimos molestiae magnam qui
          aliquam, eos quas corrupti voluptatem rerum repudiandae quia. Alias,
          eius ullam!
        </div>
        <div className="card-technologies">
          <Grid
            className="grid-technologiies"
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {temp_technologies.map((val, index) => (
              <Grid className="grids-technologiies" xs={2} sm={4} md={4} key={index}>
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
