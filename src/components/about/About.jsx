import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./about.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="about" id="about">
      <div className="wrapper-about">
        <div className="top-about">
          <div className="title-about">About</div>
          <div className="description-about">
            I am Gihan Piumal Alwis. I am a Full Stack web developer with
            significant experience on the front and back ends. To make scaling
            up the project easy and painless, I keep my coding workflow
            organized and well documented. After completing my degree in
            Bachelor of Technology in Mechatronics at the Uva Wellassa
            University of Sri Lanka, in 2022, I decided to pursue a career as a
            web developer. So, I joined to Enterprise Business Intelligence as
            an intern developer. I learned and gained experience with React,
            Node, Express, and MongoDB while working there.
          </div>
        </div>
        <div className="middle-about">
          <div className="dp-about" data-aos="fade-right">
            <img src={require("../../images/dp.jpeg")} alt="img" />
          </div>
          <div className="middle-data-about" data-aos="fade-left">
            <div className="dp-title-about">Full Stack Web Developer</div>
            <div className="dp-description-about">
              This is my personal informations.
            </div>
            <div className="bio-about">
              <ul className="left-about">
                <li>
                  <div className="topic">Birthday :</div>
                  <div className="value">4 November 1995</div>
                </li>
                <li>
                  <div className="topic">Website :</div>
                  <div className="value">
                    <a href="https://gihanpiumal.github.io/portfolio/">
                      my website
                    </a>
                  </div>
                </li>
                <li>
                  <div className="topic">Phone :</div>
                  <div className="value">+94 776603689</div>
                </li>
                <li>
                  <div className="topic">City :</div>
                  <div className="value">Panadura, Sri Lanka</div>
                </li>
              </ul>
              <ul className="right-about">
                <li>
                  <div className="topic">Age :</div>
                  <div className="value">27</div>
                </li>
                <li>
                  <div className="topic">Digree :</div>
                  <div className="value">B. tech in Mechatronics</div>
                </li>
                <li>
                  <div className="topic">Email :</div>
                  <div className="value">gihanpiumal12345@gmail.com</div>
                </li>
                <li>
                  <div className="topic">Freelance :</div>
                  <div className="value">Available</div>
                </li>
              </ul>
            </div>
            <div className="bottom-description-about">
              My degree is related to Mechatronics; however, I am highly
              interested in web development. That is why I chose to work on the
              web development side
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="bottom-title-about">Skills</div>
          <div className="bottom-des-about">
            Now I know a lot about full stack web development. I have extensive
            experience with Figma, Adobe XD, and Adobe Illustrator for web
            design. I primarily use React js for front-end development. I am
            familiar with Node.js, PHP, Laravel, and Flask for back-end
            development. In addition, I have good knowledge about image
            processing and Machine learning. So, I can connect web app with
            Machine learning as well. Another area of passion of mine is
            blockchain development. As a developer, I am particularly interested
            in developing D.apps using web 3.0. Also, I know about solidity, so
            I can create smart contracts. I also have experience with mobile app
            development. I can create mobile applications with Dart and Flutter.
            All of my skills are listed in the project section.
          </div>
          <div className="skilles-list-about">
            <ul className="left-skils-about" data-aos="fade-right">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Php</li>
              <li>Dart</li>
              <li>Image Proccessiing</li>
            </ul>
            <ul className="middle-skils-about" data-aos="fade-up">
              <li>Python</li>
              <li>Flask</li>
              <li>Django</li>
              <li>Mysql</li>
              <li>Solidity</li>
              <li>Machine Learning</li>
            </ul>
            <ul className="right-skils-about" data-aos="fade-left">
              <li>React Js</li>
              <li>Node Js</li>
              <li>Express Js</li>
              <li>Mongo DB</li>
              <li>Flutter</li>
              <li>Deep Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
