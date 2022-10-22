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
    {
      title: "Student Management System",
      img: "https://www.youtube.com/embed/Z2nmzhM2Dhg",
      subTitle: "To manage the sttudent and subjects",
      description:
        "Hello, and welcome to this project.This is a student management system. using this application, users can manage the students, classes, and teachers.Also, can manage student payments as well. So, this application has a lot of functions that help to manage students, classes, and teachers.To make the backend of this project, I have used Node js and Express js. To make the front end, I have used React js.Also, I used material UI and ant design components for making the front end. To make the database I have used Mongo DB.when you go to the login page, the user admin can log in to the main dashboard, using email and password.if he forgets his email or password, he can use forgot password option and can reset it.this is the main interface you can see.in this dashboard, we have 3 tables. One table shows today time table. another table shows new extra class requests. ad the last table shows, the subject timetable.but here there are no data because we didn't add any data yet.First, we are going to add data for categories.here, we can add main categories for subjects. now this table not shows the subjects for each category , because we did not add any subjects yet.we can edit and delete the category as well.After that, we are going to add halls to this system. in here we can add new halls to the system and, we can delete and update that as well.in here also subjects are not displayed. because we did not and any subject yet.Then we are going to add teachers. Here, you can add new teachers to the system. Also, we can view the details of the teacher.We can edit and delete that as well.after that, we are going to add new subjects to the system.[breathing]for that, you have to fill in this subject form. here, you have to mention, is that subject will require admission or not. if it requires, you have to give the amount as well.also, you have to give the class fees, category name, teacher name, hall name, class date, and class time as well. Then after, you can view it and can update and delete also.then we move to the student registration part.here you have to give basic data about the student. After submitting this form system will ask you, do you want to add subjects to this student now? you can add it now or later.then you come to add the subjject page. here, it will only show the subjects, that are related to the category you added to this student before.also, if that selected subject has admission, you have to select the check box to confirm, that you take the admission fees from the student as well.in this table have a temporary stop date. if some students have any problems, we can deactivate that students as well. after we deactivate that student, here it will show the date, that deactivates the student.after again activate that student, it will not show the date.when it comes to the student payment table, we can manage the class payment of students.By default, it will show the current month's data only.but by clicking get all check box, you can get all the data. Also, you can filter the data by year, by month, or status of the payment.So if any student pays their class fees, the user only has to select that student and change his payment status only.here, teachers can add extra classes to the system. Until admin accepts it, that request is under the pending state.finally, you can see the summary of this data, on the dashboard as well. this application is fully authenticated and, when the user login, it will generate a JSON web token key and, for every activity, it will check by the backend. also, this application is fully responsive.",
      gitLink: "https://github.com/gihanpiumal/STMS-frontend",
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
