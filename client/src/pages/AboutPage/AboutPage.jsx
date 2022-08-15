import React from "react";
import Title from "../../components/Title/Title";
import s from "./AboutPage.module.css";
import AboutContactPage from "./Contact/AboutContactPage";
import batary from "../../img/hero-Slider/aboutAdd.jpg";
import About from "./About/About";

import Menu from "../../components/Menu/Menu";

const AboutPage = () => {
  return (
    <div className="container">
      <Title name={"About ISES"} />
      <img src={batary} alt="batary" className={s.batary} />
      <div className={s.containerInfo}>
        <About />
        {/* <AboutContactPage /> */}
        <hr />
        <div className={s.RightContainer}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
