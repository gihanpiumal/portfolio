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
      description:
        "Hello, and welcome to this project. This is a memory blog application. Using this application,  Users can upload their memories to this blog and, everyone can see others' memory posts. To make the backend of this project, I have used Node js and Express js. To make the front end, I have used React js. Also, I used material UI and ant design components for making the front end. To make the database I have used Mongo DB.When you go to the blog page, first it will display the login page. if you already have an account, you can give your email and password to log in. If you don't have an account you have to signup. After clicking the signup button, you will come to the registration page. On the registration page, you have to give the details about yourself. if you already have an account, you can switch to the login page using this link. after the registration, it will send an OTP code to your email address. here, you can see I got a new email with the OTP code. I copy this code and paste it here. after submitting that, again comes to the login page. then you can give your email and password to log in. this is the home page of the application. There are no posts on here, which is why it shows 'No memories available'. By clicking my profile button, you can go to your profile page. in here you can see your data, and you can edit it as well. Then we are going to create a post. Inhere you have to give a title for the post. And you have to give an image and description as well.  Then you can see a new post here. On the profile page, you can also see the posts that you created. also, you can edit and delete the posts as well. when clicking the reset password button, you can reset your password. you have to give your email here. after submitting it,  an OTP code is sent to your email. You have to give that code to change your password.this application is fully authenticated and, when the user login, it will generate a JWT key and, for every activity, it will check by the backend. also, this application is fully responsive. finally, if you want you can delete your account as well.",
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
