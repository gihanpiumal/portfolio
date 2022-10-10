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
            I am Gihan Piumal. I am a Full Stack web developer with significant
            front and back end experience. I keep my coding workflow organized
            and well documented to make scaling up the project easy and
            painless.After completing my Bachelor of Technology in Mechatronics
            at the Uva Wellassa University of Sri Lanka, in 2022, I desided to
            move forward as a web developer. So i join to Enterprise Business
            Inteligence as a intern developer. In there , i got lot of knowledge
            and experience with React, Node, Express, and MongoDB.
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
                    https://gihanpiumal.github.io/portfolio/
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
                  <div className="value">Btec in Mechatronics</div>
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
              My digree is related to Mechatronics, But i am very interesting
              about web development. So that is why i choose this development
              side.
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="bottom-title-about">Skills</div>
          <div className="bottom-des-about">
            Now i have lot of knowledge about full stack web development. For
            designing web page i have good experience about Figma , Adobe XD and
            Adobe illustrator. For front end development, mainly i use React js.
            For backend development i have knowledge about Node js, Php ,
            laraval , Flask and Django. Also i have good knowledge about image
            proccessing and Machine learning. So i can connect web app with
            Machine learning as well. Also another favorite area of mine is
            blockchain development. As a developer i am very interesting to
            develop D.app with web 3.0 . Also i know about solidity so i can
            make smart contract as well. Also i know about mobile app
            development as well. Using Dart and Flutter i can make mobile
            applications. You can see all of my skills in project section.
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
