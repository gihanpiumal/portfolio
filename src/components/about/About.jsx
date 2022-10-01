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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            architecto excepturi neque temporibus iure ab eos exercitationem
            explicabo, vero asperiores ad facilis inventore eum? Perferendis
            similique architecto nobis facilis! Dolore. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Consectetur earum sint molestiae!
            Fuga placeat commodi sit labore quis neque, fugit quam quaerat ipsam
            aliquid voluptas impedit vero quos nulla quae?
          </div>
        </div>
        <div className="middle-about">
          <div className="dp-about" data-aos="fade-right">
            <img src={require("../../images/dp.jpeg")} alt="img" />
          </div>
          <div className="middle-data-about" data-aos="fade-left">
            <div className="dp-title-about">Full Stack Web Developer</div>
            <div className="dp-description-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ullam itaque soluta impedit explicabo, mollitia aliquam
              repellendus quod excepturi eos esse, modi sunt voluptatum
              pariatur. Quod impedit officiis suscipit mollitia.
            </div>
            <div className="bio-about">
              <ul className="left-about">
                <li>
                  <div className="topic">Birthday :</div>
                  <div className="value">4 November 1995</div>
                </li>
                <li>
                  <div className="topic">Website :</div>
                  <div className="value">www.abc.com</div>
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
                  <div className="value">gihan@gmail.com</div>
                </li>
                <li>
                  <div className="topic">Freelance :</div>
                  <div className="value">Available</div>
                </li>
              </ul>
            </div>
            <div className="bottom-description-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              ab ipsam maxime aliquam hic suscipit, at voluptatem ipsa
              distinctio commodi neque accusamus, quia, error aperiam amet
              facilis. Vitae, dolores nobis! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quidem adipisci magnam ea eius
              facere dicta a, nesciunt corporis commodi natus, quas animi itaque
              laudantium impedit reiciendis culpa repudiandae eligendi
              similique.
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="bottom-title-about">Skills</div>
          <div className="bottom-des-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            voluptatem eveniet exercitationem iste quis ducimus suscipit iure.
            Corporis quibusdam magnam iste laboriosam dolore a. Totam accusamus
            iure blanditiis nihil laboriosam?
          </div>
          <div className="skilles-list-about">
            <ul className="left-skils-about"  data-aos="fade-right">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>PHP</li>
            </ul>
            <ul className="middle-skils-about"   data-aos="fade-up">
              <li>PHTHON</li>
              <li>REACTJS</li>
              <li>NODEJS</li>
              <li>MONGODB</li>
            </ul>
            <ul className="right-skils-about"   data-aos="fade-left">
              <li>PHTHON</li>
              <li>REACTJS</li>
              <li>NODEJS</li>
              <li>MONGODB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
