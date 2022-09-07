import React from "react";

import s from "./education.module.css";

import img1 from "../../img/education/icons/calendar.svg";
import img2 from "../../img/education/icons/earth.svg";
import img3 from "../../img/education/icons/energy.svg";
import img4 from "../../img/education/icons/sun.svg";

import icon1 from "../../img/education/FEATURES/bubble.svg";
import icon2 from "../../img/education/FEATURES/player.svg";
import icon3 from "../../img/education/FEATURES/hat.svg";
import icon4 from "../../img/education/FEATURES/messages.svg";
import icon5 from "../../img/education/FEATURES/settings.svg";
import icon6 from "../../img/education/FEATURES/question.svg";

const Education = () => {
  const children = s.main2 + " " + "container";
  return (
    <div className={s.education}>
      <div className={s.hero}>
        <div className={s.heroTitle}>
          <h1 className={s.title}>ONLINE SOLAR TRAINING</h1>
          <h4>SOLAR HEATING COURSES</h4>
          <p>
            Online Courses from the world's leading renewable energy technical
            training provider - Solar Energy International
          </p>
        </div>
      </div>
      <div className={s.main}>
        <div className={children}>
          <h2>ONLINE SOLAR ENERGY EDUCATION AND RENEWABLE ENERGY COURSES</h2>
          <div className={s.bottom}></div>
          <p>
            Celebrating 25 years of Solar Training and Renewable Energy
            education, ISEA has been providing online solar training and
            in-person workshops to students from around the world. The ISEA
            provides anywhere / anytime access to our world-class curriculum and
            highly trained instructors. For upcoming online solar training and
            renewable energy education opportunities!
          </p>
          <h4>The (Solar) Power of our People</h4>
          <p>
            Solar Energy International takes pride in our decades of developing
            Solar Training and Renewable Energy curriculum, but what really sets
            ISEA's training apart from any other organization is our people. In
            a recent Home Power Magazine article, it was found that ISEA has
            more certified instructors and years of experience than any other
            solar training organization polled. So as you take an online course
            from ISEA you can be assured you have a quality cadre of solar
            training and renewable energy instructors there to support you.
          </p>
        </div>
        <div className={s.card}>
          <div className={s.card_child}>
            <img className={s.imgs} src={img1} alt="img1" />
            <h2>SOLAR ELECTRIC COURSES</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              eligendi ipsum odio doloribus quo ad, voluptatum rem.
              Exercitationem sunt
            </p>
          </div>
          <div className={s.card_child}>
            <img className={s.imgs} src={img2} alt="img2" />
            <h2>SOLAR HEATING COURSES</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              eligendi ipsum odio doloribus quo ad, voluptatum rem.
              Exercitationem sunt
            </p>
          </div>
          <div className={s.card_child}>
            <img className={s.imgs} src={img3} alt="img3" />
            <h2>DEVELOPING WORLD COURSES</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              eligendi ipsum odio doloribus quo ad, voluptatum rem.
              Exercitationem sunt
            </p>
          </div>
          <div className={s.card_child}>
            <img className={s.imgs} src={img4} alt="img4" />
            <h2>VIEW TRAINING SCHEDULE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              eligendi ipsum odio doloribus quo ad, voluptatum rem.
              Exercitationem sunt
            </p>
          </div>
        </div>
      </div>
      <div className={s.training}>
        <div className={s.news}>
          <h2 className={s.title2}>START TRAINING FOR FREE!</h2>
          <div className={s.bottom2}></div>
          <p>
            Solar technologies convert sunlight into electrical energy either
            through photovoltaic (PV) panels or through mirrors that concentrate
            solar radiation.
          </p>
          <p className={s.description}>LEARN MORE & ENROLL NOW</p>
        </div>
      </div>
      <div className={s.features}>
        <div>
          <h2 className={s.title2} style={{ color: "black" }}>
            ISEA ONLINE FEATURES
          </h2>
          <div
            className={s.bottom2}
            style={{ backgroundColor: "black", width: "20%" }}
          ></div>
          <div className={s.bottomGrid}>
            <div className={s.textType}>
              <div className={s.colMd}>
                <img src={icon1} alt="icons" className={s.icons} />
                <h3>Instructional Support from Live Instructors</h3>
              </div>
              <p>
                Our online courses are taught by many of the same instructors
                that teach our in-person sessions. All of our instructors are
                actively working in the solar industry and are experts in the
                field.
              </p>
            </div>
            <div className={s.textType}>
              <div className={s.colMd}>
                <img src={icon2} alt="icons" className={s.icons} />
                <h3>Instructional Support from Live Instructors</h3>
              </div>
              <p>
                Our online courses are taught by many of the same instructors
                that teach our in-person sessions. All of our instructors are
                actively working in the solar industry and are experts in the
                field.
              </p>
            </div>
            <div className={s.textType}>
              <div className={s.colMd}>
                <img src={icon3} alt="icons" className={s.icons} />
                <h3>Instructional Support from Live Instructors</h3>
              </div>
              <p>
                Our online courses are taught by many of the same instructors
                that teach our in-person sessions. All of our instructors are
                actively working in the solar industry and are experts in the
                field.
              </p>
            </div>
            <div className={s.textType}>
              <div className={s.colMd}>
                <img src={icon4} alt="icons" className={s.icons} />
                <h3>Instructional Support from Live Instructors</h3>
              </div>
              <p>
                Our online courses are taught by many of the same instructors
                that teach our in-person sessions. All of our instructors are
                actively working in the solar industry and are experts in the
                field.
              </p>
            </div>
            <div className={s.textType}>
              <div className={s.colMd}>
                <img src={icon5} alt="icons" className={s.icons} />
                <h3>Instructional Support from Live Instructors</h3>
              </div>
              <p>
                Our online courses are taught by many of the same instructors
                that teach our in-person sessions. All of our instructors are
                actively working in the solar industry and are experts in the
                field.
              </p>
            </div>
            <div className={s.textType}>
              <div className={s.colMd}>
                <img src={icon6} alt="icons" className={s.icons} />
                <h3>Instructional Support from Live Instructors</h3>
              </div>
              <p>
                Our online courses are taught by many of the same instructors
                that teach our in-person sessions. All of our instructors are
                actively working in the solar industry and are experts in the
                field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
