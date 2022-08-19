import React from "react";
import Title from "../../components/Title/Title";
import s from "./AboutPage.module.css";
import AboutContactPage from "./Contact/AboutContactPage";
import batary from "../../img/hero-Slider/aboutAdd.jpg";
import About from "./About/About";
import Router from "../../components/Router/Router";

import Menu from "../../components/Menu/Menu";

const AboutPage = () => {
  return (
    <div className="container">
      <Title name={"About ISES"} />
      <img src={batary} alt="batary" className={s.batary} />
      <div className={s.containerInfo}>
        <About />
        <hr />
        <div className={s.RightContainer}>
          <Title name={"About ISEA"} />
          {/* <Menu>
            <Router name={"About ISEA"} route={"/about"} />
            <Router name={"Contact"} route={"/contact"} />
            <Router name={"History"} route={"/abo"} />
            <Router name={"Institutional Structure"} route={"/bout"} />
            <Router name={"ISEA Membership"} route={"/ut"} />
            <Router name={"Official Documents"} route={"/ac"} />
            <Router name={"Senior Management"} route={"/abodut"} />
            <Router name={"Statute, Vision & Mission"} route={"/asbout"} />
          </Menu> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
