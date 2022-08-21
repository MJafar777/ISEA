import React from "react";

import s from "./education.module.css";

import img1 from "../../img/education/icons/calendar.svg";
import img2 from "../../img/education/icons/earth.svg";
import img3 from "../../img/education/icons/energy.svg";
import img4 from "../../img/education/icons/solar.svg";

const Education = () => {
  const children = s.main2 + " " + "container";
  return (
    <div className={s.education}>
      <div className={s.hero}>
        <div className={s.heroTitle}>
          <h1 className={s.title}>ONLINE SOLAR TRAINING</h1>
          <p>
            Online Courses from the world's leading renewable energy technical
            training provider - Solar Energy International
          </p>
          <h4>SOLAR HEATING COURSES</h4>
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
            highly trained instructors.
          </p>
          <p>
            for upcoming online solar training and renewable energy education
            opportunities!
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
          <div>
            <img className={s.imgs} src={img1} alt="img1" />
            
            <h2>SOLAR ELECTRIC COURSES</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eligendi ipsum odio doloribus quo ad, voluptatum rem. Exercitationem sunt</p>
          </div>
          <div>
            <img className={s.imgs} src={img2} alt="img2" />
            <h2>SOLAR HEATING COURSES</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eligendi ipsum odio doloribus quo ad, voluptatum rem. Exercitationem sunt</p>
          </div>
          <div>
            <img className={s.imgs} src={img3} alt="img3" />
            <h2>DEVELOPING WORLD COURSES</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eligendi ipsum odio doloribus quo ad, voluptatum rem. Exercitationem sunt</p>
          </div>
          <div>
            <img className={s.imgs} src={img4} alt="img4" />
            <h2>VIEW TRAINING SCHEDULE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eligendi ipsum odio doloribus quo ad, voluptatum rem. Exercitationem sunt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
